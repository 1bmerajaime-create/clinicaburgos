import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { legalPages } from "../src/data/legal.ts";
import { seoByPath, SITE_URL, type SeoConfig } from "../src/data/seo.ts";
import { servicePages } from "../src/data/servicePages.ts";

type PageSeo = SeoConfig & { changefreq: string; priority: string };

const dist = join(process.cwd(), "dist");
const today = new Date().toISOString().slice(0, 10);
const SEO_SHARE_VERSION = "v=3";

function esc(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function pages(): PageSeo[] {
  const main = Object.values(seoByPath).map((page) => ({
    ...page,
    changefreq: "weekly",
    priority:
      page.path === "/"
        ? "1.0"
        : page.path.startsWith("/aviso") || page.path.startsWith("/politica")
          ? "0.3"
          : "0.9",
  }));

  const services = servicePages.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    changefreq: "weekly",
    priority: "0.8",
  }));

  const legal = legalPages.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    changefreq: "yearly",
    priority: "0.3",
  }));

  const seen = new Set<string>();
  return [...main, ...services, ...legal].filter((page) => {
    if (seen.has(page.path)) return false;
    seen.add(page.path);
    return true;
  });
}

function absolute(path: string) {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

function withSeoVersion(url: string) {
  return `${url}${url.includes("?") ? "&" : "?"}${SEO_SHARE_VERSION}`;
}

function replaceMeta(
  html: string,
  attr: "name" | "property",
  key: string,
  content: string,
) {
  const re = new RegExp(
    `<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/>`,
    "is",
  );
  const tag = `<meta ${attr}="${key}" content="${esc(content)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function applySeo(html: string, page: PageSeo) {
  const url = absolute(page.path);
  const shareUrl = withSeoVersion(url);
  const shareImage = withSeoVersion(`${SITE_URL}/images/espera.jpg`);
  let next = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${esc(page.title)}</title>`,
  );
  next = replaceMeta(next, "name", "description", page.description);
  if (page.keywords) {
    next = replaceMeta(next, "name", "keywords", page.keywords);
  }
  next = next.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  next = replaceMeta(next, "property", "og:title", page.title);
  next = replaceMeta(next, "property", "og:description", page.description);
  next = replaceMeta(next, "property", "og:url", shareUrl);
  next = replaceMeta(next, "property", "og:image", shareImage);
  next = replaceMeta(next, "name", "twitter:image", shareImage);
  return next;
}

function writeSitemap(list: PageSeo[]) {
  const urls = list
    .map(
      (page) => `  <url>
    <loc>${absolute(page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("\n");

  writeFileSync(
    join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    "utf8",
  );
}

const template = readFileSync(join(dist, "index.html"), "utf8");
const list = pages();

for (const page of list) {
  const html = applySeo(template, page);
  if (page.path === "/") {
    writeFileSync(join(dist, "index.html"), html);
    continue;
  }
  const file = join(dist, page.path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

writeFileSync(join(dist, "404.html"), readFileSync(join(dist, "index.html")));
writeSitemap(list);

console.log(`SEO prerender: ${list.length} pages + sitemap.xml`);
