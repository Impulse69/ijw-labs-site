from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1280, "height": 860})
    pg.goto("https://ijw-labs.netlify.app/about", wait_until="networkidle")
    pg.wait_for_timeout(2000)
    # scroll gradually so IntersectionObserver reveals fire
    for y in range(0, 4200, 300):
        pg.evaluate(f"window.scrollTo(0, {y})")
        pg.wait_for_timeout(120)
    pg.evaluate("document.querySelectorAll('.work-grid')[0].scrollIntoView({block:'center'})")
    pg.wait_for_timeout(1500)
    pg.screenshot(path="shots/live-workgrid.png")
    b.close()
print("done")
