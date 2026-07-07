"""Regenerate webp variants for public/images/work/*.jpg at ImageSlot's widths."""
from pathlib import Path
from PIL import Image

WORK = Path(__file__).parent.parent / "public" / "images" / "work"
WIDTHS = [480, 960, 1400]  # match ImageSlot WIDTHS

# clean any stale -w1200 variants from the first pass
for old in WORK.glob("*-w1200.webp"):
    old.unlink()

for jpg in sorted(WORK.glob("*.jpg")):
    im = Image.open(jpg).convert("RGB")
    for w in WIDTHS:
        h = int(im.height * w / im.width)
        im.resize((w, h), Image.LANCZOS).save(jpg.with_name(f"{jpg.stem}-w{w}.webp"), "WEBP", quality=80, method=6)
    print(f"{jpg.stem}: 480/960/1400 webp")
print("done")
