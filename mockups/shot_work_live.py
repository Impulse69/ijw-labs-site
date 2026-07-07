from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1280, "height": 880})
    pg.goto("https://ijw-labs.netlify.app/work", wait_until="networkidle")
    pg.wait_for_timeout(2000)
    for y in range(0, 3600, 300):
        pg.evaluate(f"window.scrollTo(0, {y})"); pg.wait_for_timeout(90)
    pg.evaluate("window.scrollTo(0, 380)")
    pg.wait_for_timeout(800)
    # hover first tile to show the "Visit live site" overlay
    pg.hover("a.work-item")
    pg.wait_for_timeout(700)
    pg.screenshot(path="shots/live-work-page.png")
    b.close()
print("done")
