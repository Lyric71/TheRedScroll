// @ts-check
import { defineConfig } from 'astro/config';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
// Reuse the exact same locale/slug logic that BaseLayout uses for in-page
// hreflang, so the sitemap's alternate annotations can never drift from the
// pages' own tags (which is what previously orphaned the Spanish cluster).
import { availableLangs, alternateUrl, hreflangCode } from './src/i18n/config.ts';

const SITE = 'https://www.theredscroll.com';

// Must mirror availableLangs in src/i18n/config.ts. When a locale is added
// here, also add it to availableLangs (and vice versa) so hreflang emission
// and sitemap inclusion stay in sync.
const AVAILABLE_LOCALES = ['en', 'fr', 'zh', 'es', 'de'];
// Non-en locale prefixes that own a route tree. A path is dropped from the
// sitemap only when its first segment is a recognized locale prefix that isn't
// live. Deliberately does NOT match English content pages whose first segment
// merely looks like a two-letter code (e.g. '/ai/'), which the previous regex
// wrongly excluded.
const NON_EN_LOCALE_PREFIXES = ['fr', 'zh', 'es', 'de'];
/** @param {string} url */
const stripOrigin = (url) => url.replace(/^https?:\/\/[^/]+/, '') || '/';
/** @param {string} page */
const sitemapLocaleFilter = (page) => {
  const seg = stripOrigin(page).split('/')[1] || '';
  return !(NON_EN_LOCALE_PREFIXES.includes(seg) && !AVAILABLE_LOCALES.includes(seg));
};

// Every route the build produced, recorded during filter() so serialize() can
// verify an alternate actually exists before linking it. A page that isn't
// translated into a locale (e.g. zh has no market-entry) is simply never added,
// so we never emit an hreflang alternate that 404s.
const builtPaths = new Set();

/** Resolve a URL back to the source that produced it and derive a real
 *  lastmod from it. Content-collection posts (the /insights/ and /es/analisis/
 *  trees) use their frontmatter `updatedDate`/`publishDate`, which survives CI
 *  checkouts. Static .astro routes fall back to file mtime, then build date.
 *  Note: on fresh CI clones mtime equals checkout time, so frontmatter is the
 *  only reliable per-page freshness signal — hence the collection lookup. */
const srcRoot = fileURLToPath(new URL('./src/pages', import.meta.url));
const contentRoot = fileURLToPath(new URL('./src/content', import.meta.url));
const buildDate = new Date();

/** Map a URL path to the content-collection markdown file behind it, if any.
 *  Mirrors the route trees: /insights/<slug>/ → blog, /fr/insights/ → blog-fr,
 *  /zh/insights/ → blog-zh, /de/insights/ → blog-de, /es/analisis/ → blog-es. */
const blogRoutePatterns = [
  { re: /^\/insights\/([^/]+)\/?$/, dir: 'blog' },
  { re: /^\/fr\/insights\/([^/]+)\/?$/, dir: 'blog-fr' },
  { re: /^\/zh\/insights\/([^/]+)\/?$/, dir: 'blog-zh' },
  { re: /^\/de\/insights\/([^/]+)\/?$/, dir: 'blog-de' },
  { re: /^\/es\/analisis\/([^/]+)\/?$/, dir: 'blog-es' },
  { re: /^\/industries\/([^/]+)\/?$/, dir: 'industries' },
  { re: /^\/tools\/([^/]+)\/?$/, dir: 'tools' },
];

/** @param {string} urlPath */
const frontmatterDateForPath = (urlPath) => {
  for (const { re, dir } of blogRoutePatterns) {
    const m = urlPath.match(re);
    if (!m) continue;
    for (const ext of ['.md', '.mdx']) {
      const file = path.join(contentRoot, dir, `${m[1]}${ext}`);
      if (!existsSync(file)) continue;
      const head = readFileSync(file, 'utf8').slice(0, 2000);
      const dateMatch =
        head.match(/^updatedDate:\s*["']?(\d{4}-\d{2}-\d{2})/m) ??
        head.match(/^publishDate:\s*["']?(\d{4}-\d{2}-\d{2})/m);
      if (dateMatch) {
        const d = new Date(dateMatch[1]);
        if (!Number.isNaN(d.getTime())) return d;
      }
    }
  }
  return null;
};

/** @param {string} pageUrl */
const lastmodForPage = (pageUrl) => {
  try {
    const urlPath = pageUrl.replace(/^https?:\/\/[^/]+/, '') || '/';
    const fmDate = frontmatterDateForPath(urlPath);
    if (fmDate) return fmDate;
    const cleaned = urlPath.replace(/\/$/, '') || '/index';
    const candidates = [
      path.join(srcRoot, `${cleaned}.astro`),
      path.join(srcRoot, cleaned, 'index.astro'),
    ];
    for (const c of candidates) {
      if (existsSync(c)) return statSync(c).mtime;
    }
  } catch {
    // fall through
  }
  return buildDate;
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.theredscroll.com',
  output: 'static',
  trailingSlash: 'always',
  adapter: vercel(),
  build: {
    // Inline the (small ~10 KiB) CSS bundle into the HTML head instead of
    // emitting an external stylesheet. Removes a render-blocking request on
    // the critical path and improves LCP/FCP. 'auto' would keep it external
    // because it exceeds Vite's 4 KiB assetsInlineLimit.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        // Record every discovered route first so serialize() can check alternate
        // existence, then decide inclusion.
        builtPaths.add(stripOrigin(page));
        if (!sitemapLocaleFilter(page)) return false;
        const lowValuePaths = [
          '/thank-you/', '/cookie-policy/', '/terms-of-service/', '/privacy-policy/',
          '/fr/thank-you/', '/fr/cookie-policy/', '/fr/terms-of-service/', '/fr/privacy-policy/',
          '/zh/thank-you/', '/zh/cookie-policy/', '/zh/terms-of-service/', '/zh/privacy-policy/',
          '/es/gracias/', '/es/politica-cookies/', '/es/terminos-servicio/', '/es/politica-privacidad/',
          '/de/thank-you/', '/de/cookie-policy/', '/de/terms-of-service/', '/de/privacy-policy/',
        ];
        return !lowValuePaths.some((path) => page.endsWith(path));
      },
      // Build hreflang alternates ourselves from the shared i18n helpers instead
      // of the integration's built-in string matcher (which knows nothing about
      // the Spanish slug map, so it orphaned every /es/ page and never emitted
      // x-default). changefreq/priority are ignored by Google since 2023, so
      // they're omitted to keep the file lean.
      serialize: (item) => {
        const path = stripOrigin(item.url);
        const links = [];
        for (const lang of availableLangs) {
          const altPath = alternateUrl(path, lang);
          if (builtPaths.has(altPath)) {
            links.push({ lang: hreflangCode(lang), url: `${SITE}${altPath}` });
          }
        }
        // x-default → the English version (the site's default locale).
        const enPath = alternateUrl(path, 'en');
        if (builtPaths.has(enPath)) {
          links.push({ lang: 'x-default', url: `${SITE}${enPath}` });
        }
        return {
          url: item.url,
          links,
          lastmod: lastmodForPage(item.url).toISOString(),
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: '127.0.0.1',
  },
  image: {
    domains: [],
  },
});
