import time, urllib.request
from playwright.sync_api import sync_playwright

# wait for CDN propagation of the new /about
for i in range(10):
    html = urllib.request.urlopen("https://ijw-labs.netlify.app/about").read().decode("utf-8", "ignore")
    if "Eastern Premier" in html:
        print(f"propagated after {i*15}s"); break
    print(f"attempt {i+1}: old HTML still cached, waiting 15s"); time.sleep(15)

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1366, "height": 900})
    pg.goto("https://ijw-labs.netlify.app/about", wait_until="networkidle")
    pg.wait_for_timeout(2500)
    pg.mouse.wheel(0, 5200)
    pg.wait_for_timeout(2500)
    widths = pg.eval_on_selector_all(".work-item img", "els => els.map(i => i.naturalWidth)")
    titles = pg.eval_on_selector_all(".work-item h4", "els => els.map(e => e.textContent)")
    print("titles:", titles)
    print("img widths:", widths)
    pg.screenshot(path="shots/live-hotel-tiles.png", full_page=True)
    b.close()
