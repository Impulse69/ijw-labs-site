"""Generate responsive WebP variants (480/960/1400w) for every JPG in public/images."""
from pathlib import Path
from PIL import Image

IMG = Path(__file__).parent / "public" / "images"
WIDTHS = [480, 960, 1400]

total_before = total_after = 0
for jpg in sorted(IMG.glob("*.jpg")):
    im = Image.open(jpg).convert("RGB")
    total_before += jpg.stat().st_size
    for w in WIDTHS:
        out = IMG / f"{jpg.stem}-w{w}.webp"
        v = im.copy()
        if v.width > w:
            v.thumbnail((w, 10 ** 6), Image.LANCZOS)
        v.save(out, "WEBP", quality=78, method=6)
        total_after += out.stat().st_size if w == 480 else 0
    print(f"{jpg.name}: {jpg.stat().st_size//1024}KB -> " +
          ", ".join(f"w{w}={(IMG / f'{jpg.stem}-w{w}.webp').stat().st_size//1024}KB" for w in WIDTHS))
print(f"\nmobile payload: {total_before//1024}KB (jpg) -> {total_after//1024}KB (480w webp)")
