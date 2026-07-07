"""Capture the real site into device frames and render the hero image."""
import io
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent.parent
ASSETS = Path(__file__).parent / "assets"
SITE = "https://ijw-labs.netlify.app/"

with sync_playwright() as p:
    b = p.chromium.launch()

    pg = b.new_page(viewport={"width": 1440, "height": 940}, device_scale_factor=2)
    pg.goto(SITE, wait_until="networkidle")
    pg.wait_for_timeout(2500)
    pg.screenshot(path=str(ASSETS / "site-desktop.png"))

    pm = b.new_page(viewport={"width": 390, "height": 812}, device_scale_factor=2)
    pm.goto(SITE, wait_until="networkidle")
    pm.wait_for_timeout(2500)
    pm.screenshot(path=str(ASSETS / "site-mobile.png"))

    hero = b.new_page(viewport={"width": 1200, "height": 1400}, device_scale_factor=2)
    hero.goto((Path(__file__).parent / "hero_mockup.html").as_uri(), wait_until="networkidle")
    hero.wait_for_timeout(1500)
    png = hero.screenshot()
    b.close()

im = Image.open(io.BytesIO(png)).convert("RGB")
im.thumbnail((1400, 1400 * 2), Image.LANCZOS)
out = ROOT / "public" / "images" / "hero.jpg"
im.save(out, "JPEG", quality=85, optimize=True, progressive=True)
print("hero.jpg", im.size, out.stat().st_size // 1024, "KB")
