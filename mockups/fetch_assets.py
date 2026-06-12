"""Dev-only: fetch CC0/public-domain images from Openverse for the concept mockups.
Downloads to mockups/assets/ so rendering never depends on remote hosts."""
import json
import urllib.request
from pathlib import Path

ASSETS = Path(__file__).parent / "assets"
ASSETS.mkdir(exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

# slot -> ordered search queries (first hit wins)
WANTED = {
    "food-hero": ["jollof rice", "west african food", "african cuisine plate"],
    "dish-jollof": ["jollof rice chicken", "rice dish tomato"],
    "dish-waakye": ["rice and beans dish", "waakye"],
    "dish-tilapia": ["grilled fish plate", "grilled tilapia"],
    "dish-suya": ["beef skewers", "meat skewers grill"],
    "fashion-hero": ["kente", "african fashion model", "african textile clothing"],
    "product-1": ["african fabric dress", "kente cloth"],
    "product-2": ["african print fabric", "ankara fabric"],
    "product-3": ["african textile pattern", "woven fabric colorful"],
    "product-4": ["african shirt fashion", "colorful fabric textile"],
    "clinic-doctor": ["doctor patient consultation", "doctor clinic africa", "physician consultation"],
}

API = "https://api.openverse.org/v1/images/?format=json&license=cc0,pdm&page_size=8&q="


def search(q):
    req = urllib.request.Request(API + urllib.parse.quote(q), headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)["results"]


def grab(name, queries):
    out = ASSETS / f"{name}.jpg"
    if out.exists():
        print(f"{name}: cached")
        return
    for q in queries:
        try:
            for hit in search(q):
                url = hit.get("url") or ""
                if not url:
                    continue
                try:
                    req = urllib.request.Request(url, headers=UA)
                    with urllib.request.urlopen(req, timeout=45) as r:
                        data = r.read()
                    if len(data) < 8000:  # skip tiny junk
                        continue
                    out.write_bytes(data)
                    print(f"{name}: '{q}' -> {hit.get('foreign_landing_url','?')[:60]} ({len(data)//1024}KB, license {hit.get('license')})")
                    return
                except Exception:
                    continue
        except Exception as e:
            print(f"{name}: query '{q}' failed: {e}")
    print(f"{name}: NO RESULT — will keep gradient fallback")


import urllib.parse
for name, queries in WANTED.items():
    grab(name, queries)
print("done")
