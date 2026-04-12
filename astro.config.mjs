// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

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
          '/fr/thank-you/', '/fr/cookie-policy/', '/fr/terms-of-service/', '/fr/privacy-policy/'].some(
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
        },
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
