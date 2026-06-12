"""Dev-only: normalize user-dropped images to web-weight JPEGs at slot names."""
import os
from pathlib import Path
from PIL import Image

IMG = Path(__file__).parent / "public" / "images"
MAP = {
    "founder-1.png": "founder-1.jpg",
    "founder-2.png": "founder-2.jpg",
    "founder-3.png": "founder-3.jpg",
    "hero.png": "hero.jpg",
    "service-web.png": "service-web.jpg",
    "service-systems.png": "service-systems.jpg",
    "service-photo.png": "service-photo.jpg",
    "IJW collab photo.png": "team.jpg",
}
MAX_SIDE = 1400

for src_name, dst_name in MAP.items():
    src = IMG / src_name
    if not src.exists():
        print(f"skip (missing): {src_name}")
        continue
    im = Image.open(src).convert("RGB")
    im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
    dst = IMG / dst_name
    im.save(dst, "JPEG", quality=82, optimize=True, progressive=True)
    os.remove(src)
    print(f"{src_name} -> {dst_name}  {im.size}  {dst.stat().st_size // 1024}KB")
