"""Render concept mockups + the live IJW home page into work-tile JPEGs (1200x900)."""
import io
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent.parent
OUT = ROOT / "public" / "images"
MOCKS = Path(__file__).parent

TILES = [
    ("work-1.jpg", "http://localhost:8078/ijw-labs-site/"),       # real: this site
    ("work-2.jpg", (MOCKS / "restaurant.html").as_uri()),
    ("work-3.jpg", (MOCKS / "inventory.html").as_uri()),
    ("work-4.jpg", (MOCKS / "clinic.html").as_uri()),
    ("work-5.jpg", (MOCKS / "boutique.html").as_uri()),
    ("work-6.jpg", (MOCKS / "retouch.html").as_uri()),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 900})
    for name, url in TILES:
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(1500)
        png = page.screenshot()
        im = Image.open(io.BytesIO(png)).convert("RGB")
        im.save(OUT / name, "JPEG", quality=82, optimize=True, progressive=True)
        print(name, (OUT / name).stat().st_size // 1024, "KB")
    browser.close()
