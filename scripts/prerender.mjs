import { readFile, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { createServer } from "vite";
import { PAGE_META } from "../src/page-metadata.js";

const origin = "https://ijwlabs.com";
const template = await readFile("dist/index.html", "utf8");
const vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const jsonScript = (data) => JSON.stringify(data).replaceAll("<", "\\u003c");

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.jsx");
  const { ORG_JSONLD, FAQ_JSONLD } = await vite.ssrLoadModule("/src/seo.jsx");
  for (const [path, meta] of Object.entries(PAGE_META)) {
    const canonical = origin + meta.path;
    const content = renderToString(React.createElement(StaticRouter, { location: meta.path }, React.createElement(App)))
      .replaceAll("opacity:0", "opacity:1")
      .replace(/;transform:translate[XY]\([^)]*\)/g, "");
    const head = [
      `<title>${escapeHtml(meta.title)}</title>`,
      `<meta name="description" content="${escapeHtml(meta.description)}" />`,
      `<link rel="canonical" href="${canonical}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:site_name" content="IJW Labs" />`,
      `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
      `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
      `<meta property="og:url" content="${canonical}" />`,
      `<meta property="og:image" content="${origin}/images/hero.jpg" />`,
      `<meta property="og:image:alt" content="IJW Labs digital solutions showcase" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:image" content="${origin}/images/hero.jpg" />`,
      ...(path === "/contact" ? [] : [`<script type="application/ld+json" data-prerendered-jsonld>${jsonScript(ORG_JSONLD)}</script>`]),
      ...(path === "/" ? [`<script type="application/ld+json" data-prerendered-jsonld>${jsonScript(FAQ_JSONLD)}</script>`] : []),
    ].join("\n    ");
    const html = template
      .replace(/<title>[^<]*<\/title>/, head)
      .replace(/\s*<meta name="description"[^>]*>/, "")
      .replace('<div id="root"></div>', `<div id="root">${content}</div>`);
    const directory = join("dist", path === "/" ? "" : path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "index.html"), html);
    console.log(`Prerendered ${path}`);
  }
} finally {
  await vite.close();
}
