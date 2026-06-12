"""Post-build prerender: bake each route's rendered HTML into dist/ so crawlers
(and answer/generative engines) get full content without executing JS.
Run AFTER `npm run build`. Requires `npm run preview` port 4173 free."""
import shutil
import subprocess
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent
DIST = ROOT / "dist"
BASE = "http://localhost:4173/ijw-labs-site"
ROUTES = {"/": "index.html", "/services": "services/index.html",
          "/about": "about/index.html", "/contact": "contact/index.html"}

# SPA fallback for unknown deep links: raw shell BEFORE prerender overwrites index
shutil.copy2(DIST / "index.html", DIST / "404.html")

server = subprocess.Popen(["npm", "run", "preview", "--", "--port", "4173"],
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
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_text(html, encoding="utf-8")
            title = page.title()
            print(f"{route:<12} -> {outfile}  [{title[:60]}]")
        browser.close()
finally:
    server.terminate()
print("prerender done")
