import type { APIRoute } from 'astro';

// Country-gated GA4 loader. Every page requests /ga.js; this endpoint reads
// Vercel's geo header and returns either the real gtag bootstrap or an empty
// stub. Visitors in China never make a single request to Google.
export const prerender = false;

const GA_ID = 'G-PF5EEZM6WN';

const STUB = '/* analytics not loaded */\n';

const bootstrap = (id: string) => `(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${id}';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', '${id}');
})();
`;

export const GET: APIRoute = ({ request }) => {
  // Fail closed: a missing header (local dev, un-geolocatable request) serves
  // the stub. GA only loads when we positively know the visitor is not in CN.
  const country = request.headers.get('x-vercel-ip-country') ?? 'CN';
  const enabled = country !== 'CN';

  return new Response(enabled ? bootstrap(GA_ID) : STUB, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      // Varies by visitor country - must never be shared from a CDN cache.
      'Cache-Control': 'private, no-store',
    },
  });
};
