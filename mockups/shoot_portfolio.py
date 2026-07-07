"""Screenshot all 19 live hotel sites into public/images/work/<slug>.jpg (1200x900) + webp."""
import io, json
from pathlib import Path
from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent.parent
OUT = ROOT / "public" / "images" / "work"
OUT.mkdir(parents=True, exist_ok=True)
urls = json.loads((Path(__file__).parent / "_hotel_urls.json").read_text())
# little-acre now live
urls["little-acre-hotel-aburi"] = {"url": "https://little-acre-hotel-aburi.netlify.app/", "live": True}

WIDTHS = [480, 960, 1200]

def variants(jpg: Path):
    im = Image.open(jpg).convert("RGB")
    for w in WIDTHS:
        h = int(im.height * w / im.width)
        im.resize((w, h), Image.LANCZOS).save(jpg.with_name(f"{jpg.stem}-w{w}.webp"), "WEBP", quality=80, method=6)

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1200, "height": 900}, device_scale_factor=2)
    for slug, info in urls.items():
        u = info["url"] if isinstance(info, dict) else info
        try:
            pg.goto(u, wait_until="networkidle", timeout=45000)
            pg.wait_for_timeout(2500)
            png = pg.screenshot()
            im = Image.open(io.BytesIO(png)).convert("RGB")
            im.thumbnail((1200, 900), Image.LANCZOS)
            jpg = OUT / f"{slug}.jpg"
            im.save(jpg, "JPEG", quality=82, optimize=True, progressive=True)
            variants(jpg)
            print(f"OK  {slug}  {jpg.stat().st_size//1024}KB")
        except Exception as e:
            print(f"ERR {slug}: {str(e)[:50]}")
    b.close()
