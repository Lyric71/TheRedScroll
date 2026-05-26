// @ts-check
import { defineConfig } from 'astro/config';
import { copyFileSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Must mirror availableLangs in src/i18n/config.ts. When a locale is added
// here, also add it to availableLangs (and vice versa) so hreflang emission
// and sitemap inclusion stay in sync.
const AVAILABLE_LOCALES = ['en', 'fr', 'zh', 'es', 'de'];
const localeGatePattern = new RegExp(`^/(?!${AVAILABLE_LOCALES.filter((l) => l !== 'en').join('|')}/)[a-z]{2}/`);
/** @param {string} page */
const sitemapLocaleFilter = (page) => {
  const path = page.replace(/^https?:\/\/[^/]+/, '') || '/';
  return !localeGatePattern.test(path);
};

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
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => {
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
      // changefreq and priority are ignored by Google since 2023; omitting both
      // shrinks the file and removes noise.
      serialize: (item) => ({
        url: item.url,
        links: item.links,
        lastmod: lastmodForPage(item.url).toISOString(),
      }),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          zh: 'zh-Hans',
          es: 'es',
          de: 'de',
        },
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
