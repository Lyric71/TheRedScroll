export const languages = {
  en: 'English',
  fr: 'Français',
  zh: '中文',
  es: 'Español',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/**
 * Locales whose pages are live in production. Hreflang emission and the
 * language switcher must only reference URLs that resolve. Declaring an
 * alternate that 404s breaks the international SEO signal for the whole
 * cluster, so this list must mirror the pages actually built under src/pages.
 */
export const availableLangs: readonly Lang[] = ['en', 'fr', 'zh', 'es', 'de'] as const;

/**
 * BCP 47 codes for hreflang / html lang attributes. Routing keys stay short
 * ('zh') for URL ergonomics; emitted tags use the script-specific form
 * ('zh-Hans' for Simplified Chinese) so crawlers index the right variant.
 */
const hreflangCodes: Record<Lang, string> = {
  en: 'en',
  fr: 'fr',
  zh: 'zh-Hans',
  es: 'es',
  de: 'de',
};

export function hreflangCode(lang: Lang): string {
  return hreflangCodes[lang];
}

/**
 * Per-locale slug map: maps English paths to localized paths.
 * Only ES uses Spanish slugs; FR/ZH/DE continue to use English slugs at their prefix.
 * Keys must be exact English paths (with leading slash, no trailing slash, no anchors).
 */
const esSlugMap: Record<string, string> = {
  '/about': '/quienes-somos',
  '/contact': '/contacto',
  '/work': '/proyectos',
  '/insights': '/analisis',
  '/services': '/servicios',
  '/platforms': '/plataformas',
  '/pricing': '/precios',
  '/ai': '/ia',
  '/thank-you': '/gracias',
  '/privacy-policy': '/politica-privacidad',
  '/cookie-policy': '/politica-cookies',
  '/terms-of-service': '/terminos-servicio',
  '/services/strategy-campaigns': '/servicios/estrategia-campanas',
  '/services/advertising': '/servicios/publicidad',
  '/services/content-production': '/servicios/produccion-contenido',
  '/services/influencer-marketing': '/servicios/marketing-influencia',
  '/services/market-entry': '/servicios/entrada-mercado',
  '/services/crm-private-domain': '/servicios/crm-dominio-privado',
  '/services/training-consulting': '/servicios/formacion-consultoria',
  '/platforms/wechat': '/plataformas/wechat',
  '/platforms/rednote': '/plataformas/rednote',
  '/platforms/douyin': '/plataformas/douyin',
  '/platforms/weibo': '/plataformas/weibo',
  '/platforms/others': '/plataformas/otras',
  '/work/age20s': '/proyectos/age20s',
  '/work/blue-insurance': '/proyectos/blue-insurance',
  '/work/camper': '/proyectos/camper',
  '/work/iguzzini': '/proyectos/iguzzini',
  '/work/jac-motors': '/proyectos/jac-motors',
  '/work/jaguar-land-rover': '/proyectos/jaguar-land-rover',
  '/work/langnese': '/proyectos/langnese',
  '/work/marriott': '/proyectos/marriott',
  '/work/master-martini': '/proyectos/master-martini',
  '/work/mission-foods': '/proyectos/mission-foods',
  '/work/viessmann': '/proyectos/viessmann',
};

const esSlugMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(esSlugMap).map(([en, es]) => [es, en])
);

/** Return the lang prefix for URLs. English has no prefix. */
export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

function splitTail(path: string): [string, string] {
  const hashIdx = path.indexOf('#');
  const queryIdx = path.indexOf('?');
  const idx = [hashIdx, queryIdx].filter(i => i >= 0).sort((a, b) => a - b)[0] ?? -1;
  return idx >= 0 ? [path.slice(0, idx), path.slice(idx)] : [path, ''];
}

/** Slug-map lookup keys are stored without trailing slashes, but callers may
 *  pass paths with or without one (since `trailingSlash: 'always'` is now the
 *  global convention). Normalize before lookup, then restore the trailing
 *  slash if the input had one. */
function applySlugMap(path: string, lang: Lang): string {
  if (lang !== 'es') return path;
  const [base, tail] = splitTail(path);
  const hadTrailingSlash = base.length > 1 && base.endsWith('/');
  const lookupKey = hadTrailingSlash ? base.slice(0, -1) : base;
  const mapped = esSlugMap[lookupKey] ?? lookupKey;
  return mapped + (hadTrailingSlash ? '/' : '') + tail;
}

function reverseSlugMap(path: string): string {
  const [base, tail] = splitTail(path);
  const hadTrailingSlash = base.length > 1 && base.endsWith('/');
  const lookupKey = hadTrailingSlash ? base.slice(0, -1) : base;
  const mapped = esSlugMapReverse[lookupKey] ?? lookupKey;
  return mapped + (hadTrailingSlash ? '/' : '') + tail;
}

/** Append a trailing slash to a path unless it points to a file (has an
 *  extension) or already ends in `/`, `?`, or `#`. Keeps paths canonical
 *  under `trailingSlash: 'always'`. */
function withTrailingSlash(path: string): string {
  if (path.endsWith('/')) return path;
  const [base, tail] = (() => {
    const m = path.match(/^([^?#]*)([?#].*)?$/);
    return m ? [m[1] || '', m[2] || ''] : [path, ''];
  })();
  if (/\.[a-z0-9]{2,5}$/i.test(base)) return path;
  return `${base}/${tail}`;
}

/** Build a localized path. English stays at root, other languages get a prefix.
 *  Always returns a trailing-slash URL to match `trailingSlash: 'always'`. */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const mapped = applySlugMap(clean, lang);
  const localized = lang === defaultLang ? mapped : `/${lang}${mapped}`;
  return withTrailingSlash(localized);
}

/** Get the alternate-language version of the current path. Always returns
 *  a trailing-slash URL because `localizedPath()` enforces it. */
export function alternateUrl(currentPath: string, targetLang: Lang): string {
  const match = currentPath.match(/^\/(fr|zh|es|de)(\/.*)?$/);
  const currentLang: Lang = match ? (match[1] as Lang) : 'en';
  const rawStripped = match ? (match[2] || '/') : currentPath;
  const englishPath = currentLang === 'es' ? reverseSlugMap(rawStripped) : rawStripped;
  return localizedPath(englishPath, targetLang);
}

/** Detect current lang from a URL path. */
export function getLangFromPath(path: string): Lang {
  if (path.startsWith('/fr/') || path === '/fr') return 'fr';
  if (path.startsWith('/zh/') || path === '/zh') return 'zh';
  if (path.startsWith('/es/') || path === '/es') return 'es';
  if (path.startsWith('/de/') || path === '/de') return 'de';
  return 'en';
}

/** Get all alternate languages (excluding the current one). */
export function getAlternateLangs(currentLang: Lang): Lang[] {
  return (Object.keys(languages) as Lang[]).filter(l => l !== currentLang);
}

/** Like getAlternateLangs but only returns locales whose pages are live. */
export function getAvailableAlternateLangs(currentLang: Lang): Lang[] {
  return availableLangs.filter(l => l !== currentLang);
}
