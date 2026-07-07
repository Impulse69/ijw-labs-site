"""Capture the 6 chosen hotel sites into 1200x900 work-tile JPEGs."""
import io
from pathlib import Path
from PIL import Image
from playwright.sync_api import sync_playwright

LEADS = Path(r"C:\Users\User\leads-scraper\leads")
OUT = Path(__file__).parent.parent / "public" / "images"

# work slot -> hotel folder
CHOSEN = {
    "work-1.jpg": "eastern-premier-hotel",
    "work-2.jpg": "freden-hotel-koforidua",
    "work-3.jpg": "little-acre-hotel-aburi",
    "work-4.jpg": "yaven-heights-koforidua",
    "work-5.jpg": "dear-home-hotel-koforidua",
    "work-6.jpg": "modak-royal-hotel-kwahu",
}

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1200, "height": 900}, device_scale_factor=2)
    for slot, folder in CHOSEN.items():
        d = LEADS / folder
        f = d / "index.html"
        if not f.exists():
            f = d / "mockup.html"
        pg.goto(f.as_uri(), wait_until="networkidle", timeout=40000)
        pg.wait_for_timeout(2000)
        png = pg.screenshot()  # top 1200x900 fold
        im = Image.open(io.BytesIO(png)).convert("RGB")
        im.thumbnail((1200, 900), Image.LANCZOS)
        im.save(OUT / slot, "JPEG", quality=84, optimize=True, progressive=True)
        print(f"{slot} <- {folder}  {(OUT/slot).stat().st_size//1024}KB")
    b.close()
