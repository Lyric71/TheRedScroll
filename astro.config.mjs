// @ts-check
import { defineConfig } from 'astro/config';
import { copyFileSync, existsSync, statSync } from 'node:fs';
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

/** Resolve a URL back to the source file that produced it, then use that
 *  file's mtime for lastmod. Falls back to the build date when no file maps
 *  cleanly (eg. dynamic routes whose source is harder to locate). */
const srcRoot = fileURLToPath(new URL('./src/pages', import.meta.url));
const buildDate = new Date();
/** @param {string} pageUrl */
const lastmodForPage = (pageUrl) => {
  try {
    const urlPath = pageUrl.replace(/^https?:\/\/[^/]+/, '') || '/';
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

/** @type {import('astro').AstroIntegration} */
const sitemapAlias = {
  name: 'sitemap-alias',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const outDir = fileURLToPath(dir);
      const src = `${outDir}/sitemap-0.xml`;
      const dest = `${outDir}/sitemap.xml`;
      if (existsSync(src)) copyFileSync(src, dest);
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.theredscroll.com',
  output: 'static',
  trailingSlash: 'always',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
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
    sitemapAlias,
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
