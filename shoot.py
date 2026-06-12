"""Dev-only: full-page screenshots of all routes, desktop + mobile."""
from playwright.sync_api import sync_playwright

BASE = "http://localhost:8078"
ROUTES = [("home", "/"), ("services", "/services"), ("about", "/about"), ("contact", "/contact")]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for label, w, h in [("desktop", 1366, 900), ("mobile", 390, 844)]:
        page = browser.new_page(viewport={"width": w, "height": h})
        for name, route in ROUTES:
            page.goto(BASE + route, wait_until="networkidle")
            page.wait_for_timeout(1200)  # let entrance animations settle
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(900)   # trigger whileInView reveals
            page.evaluate("window.scrollTo(0, 0)")
            page.wait_for_timeout(400)
            page.screenshot(path=f"shots/{name}-{label}.png", full_page=True)
            print(f"shots/{name}-{label}.png")
        page.close()
    browser.close()
