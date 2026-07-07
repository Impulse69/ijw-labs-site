"""Post-build prerender: bake each route's rendered HTML into dist/ so crawlers
(and answer/generative engines) get full content without executing JS.
Run AFTER `npm run build`. Requires `npm run preview` port 4173 free."""
import shutil
import subprocess
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

import os

ROOT = Path(__file__).parent
DIST = ROOT / "dist"
_base = os.environ.get("DEPLOY_BASE", "/ijw-labs-site/").rstrip("/")
ROUTES = {"/": "index.html", "/services": "services/index.html",
          "/about": "about/index.html", "/contact": "contact/index.html"}

# SPA fallback for unknown deep links: raw shell BEFORE prerender overwrites index
shutil.copy2(DIST / "index.html", DIST / "404.html")

PORT = 4183  # avoid the common 4173 collision with stray preview servers
BASE = f"http://localhost:{PORT}{_base}"
server = subprocess.Popen(["npm", "run", "preview", "--", "--port", str(PORT), "--strictPort"],
                          cwd=ROOT, shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
try:
    time.sleep(4)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        for route, outfile in ROUTES.items():
            page.goto(BASE + route, wait_until="networkidle")
            page.wait_for_timeout(1500)
            html = page.content()
            out = DIST / outfile
            title = page.title()
            # Content check, not just title: the SPA must have actually mounted.
            root = page.eval_on_selector("#root", "el => el.innerText.length")
            if not title or "IJW" not in title or root < 400:
                raise SystemExit(f"PRERENDER FAILED for {route}: title='{title}', #root text len={root} "
                                 f"— server on {PORT} served a shell/stale build?")
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_text(html, encoding="utf-8")
            print(f"{route:<12} -> {outfile}  [{title[:48]}]  root={root} chars")
        browser.close()
finally:
    # shell=True means terminate() would only kill the shell — kill the whole tree
    subprocess.run(["taskkill", "/PID", str(server.pid), "/T", "/F"],
                   capture_output=True)
print("prerender done")
