/** Capture current live concepts from Yaven Heights onward for gallery review.
 *  Set IJW_CAPTURE_DEPS_ROOT to a node_modules directory containing playwright
 *  and sharp if they are not installed in this checkout.
 */
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const modules = process.env.IJW_CAPTURE_DEPS_ROOT;
const getDependency = (name) => require(modules ? path.join(modules, name) : name);
const { chromium } = getDependency("playwright");
const sharp = getDependency("sharp");
const content = fs.readFileSync(path.join(root, "src/content.js"), "utf8");
const rows = [...content.matchAll(/\{ slug: "([^"]+)", title: "([^"]+)", tag: "[^"]+", url: "([^"]+)"/g)]
  .map((match) => ({ slug: match[1], title: match[2], url: match[3] }));
const start = rows.findIndex(({ slug }) => slug === "yaven-heights-koforidua");
if (start < 0) throw new Error("Yaven Heights is missing from the portfolio");
const requestedSlug = process.argv.find((arg) => arg.startsWith("--slug="))?.slice(7);
const targets = requestedSlug ? rows.filter(({ slug }) => slug === requestedSlug) : rows.slice(start);
if (!targets.length) throw new Error(`No portfolio entry for ${requestedSlug}`);
const staging = path.join(__dirname, "gallery-refresh");
fs.mkdirSync(staging, { recursive: true });

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.IJW_CHROME_PATH || undefined });
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 1 });
  const failures = [];
  for (const { slug, url } of targets) {
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
      if (!response || response.status() >= 400) throw new Error(`HTTP ${response?.status() ?? "no response"}`);
      await page.waitForLoadState("load", { timeout: 20000 }).catch(() => {});
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(async () => {
        const visible = [...document.images].filter((image) => {
          const rect = image.getBoundingClientRect();
          return rect.top < innerHeight && rect.bottom > 0;
        });
        await Promise.all(visible.map((image) => image.decode().catch(() => {})));
      });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(800);
      const heading = (await page.locator("h1").first().innerText({ timeout: 5000 })).trim();
      if (!heading) throw new Error("No visible heading");
      const jpg = await page.screenshot({ type: "jpeg", quality: 84 });
      fs.writeFileSync(path.join(staging, `${slug}.jpg`), jpg);
      for (const width of [480, 960, 1400]) {
        await sharp(jpg).resize({ width }).webp({ quality: 80 }).toFile(path.join(staging, `${slug}-w${width}.webp`));
      }
      console.log(`OK ${slug}: HTTP ${response.status()}; ${heading.slice(0, 70)}`);
    } catch (error) {
      failures.push(slug);
      console.error(`FAIL ${slug}: ${error.message.split("\n")[0]}`);
    }
  }
  await browser.close();
  if (failures.length) throw new Error(`Failed captures: ${failures.join(", ")}`);
  console.log(`Captured ${targets.length} live concepts in ${staging}`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
