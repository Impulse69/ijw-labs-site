"""Dev-only: point mockup image URLs at the downloaded local assets."""
import re
from pathlib import Path

MOCKS = Path(__file__).parent
KEY_TO_ASSET = {
    "overhead%20premium%20food": "food-hero",
    "close%20up%20Ghanaian%20jollof": "dish-jollof",
    "waakye": "dish-waakye",
    "grilled%20tilapia": "dish-tilapia",
    "suya%20beef": "dish-suya",
    "editorial%20fashion": "fashion-hero",
    "wrap%20dress": "product-1",
    "bomber%20jacket": "product-2",
    "two%20piece": "product-3",
    "short%20sleeve%20shirt": "product-4",
    "doctor%20consultation": "clinic-doctor",
}

def swap(match):
    url = match.group(1)
    for key, asset in KEY_TO_ASSET.items():
        if key in url:
            return f'url("assets/{asset}.jpg")'
    print(f"  UNMAPPED: {url[:90]}")
    return match.group(0)

for f in ["restaurant.html", "boutique.html", "clinic.html"]:
    p = MOCKS / f
    html = p.read_text(encoding="utf-8")
    new, n = re.subn(r'url\("(https://image\.pollinations\.ai/[^"]+)"\)', swap, html)
    p.write_text(new, encoding="utf-8")
    print(f"{f}: {n} URLs localized")
print("done")
