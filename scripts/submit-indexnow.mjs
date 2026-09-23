import { readFile } from "node:fs/promises";
import { PAGE_META } from "../src/page-metadata.js";

const host = "ijwlabs.com";
const key = "0b272d3940e940871b655b294a9e7578";
const localKey = (await readFile(new URL(`../public/${key}.txt`, import.meta.url), "utf8")).trim();
if (localKey !== key) throw new Error("IndexNow key file does not match the configured key");

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: Object.values(PAGE_META).filter(({ noindex }) => !noindex).map(({ path }) => `https://${host}${path}`),
  }),
});
if (!response.ok) throw new Error(`IndexNow rejected the URLs: ${response.status} ${await response.text()}`);
console.log(`IndexNow accepted ${Object.values(PAGE_META).filter(({ noindex }) => !noindex).length} URLs (${response.status})`);
