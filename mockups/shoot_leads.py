"""Render each hotel site's index.html and screenshot the top fold for review."""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(r"C:\Users\User\leads-scraper\leads")
OUT = Path(__file__).parent / "leads_review"
OUT.mkdir(exist_ok=True)

targets = []
for d in sorted(ROOT.iterdir()):
    if not d.is_dir() or d.name == "_shared":
        continue
    for cand in ("index.html", "mockup.html"):
        f = d / cand
        if f.exists():
            targets.append((d.name, f))
            break

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1280, "height": 960}, device_scale_factor=1)
    for name, f in targets:
        try:
            pg.goto(f.as_uri(), wait_until="networkidle", timeout=30000)
            pg.wait_for_timeout(1500)
            pg.screenshot(path=str(OUT / f"{name}.png"))
            print(f"OK  {name}")
        except Exception as e:
            print(f"ERR {name}: {str(e)[:60]}")
    b.close()
print(f"\n{len(targets)} rendered -> {OUT}")
