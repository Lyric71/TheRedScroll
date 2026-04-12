// @ts-check
import { defineConfig } from 'astro/config';
import { copyFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

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
  site: 'https://theredscroll.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    sitemap({
      filter: (page) =>
        !['/thank-you/', '/cookie-policy/', '/terms-of-service/', '/privacy-policy/',
          '/fr/thank-you/', '/fr/cookie-policy/', '/fr/terms-of-service/', '/fr/privacy-policy/',
          '/zh/thank-you/', '/zh/cookie-policy/', '/zh/terms-of-service/', '/zh/privacy-policy/'].some(
          (path) => page.endsWith(path)
        ),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          zh: 'zh',
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
