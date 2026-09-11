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
 * Per-locale slug maps: map English paths to localized paths.
 *
 * Every locale localizes every section, per TRANSLATION_GUIDE §13. FR, ZH and
 * DE were migrated off their original English slugs on 2026-09-11; each old
 * path has a 301 in vercel.json, so nothing that was linked or indexed breaks.
 *
 * A section key covers its children: `mapPath` falls back to the longest
 * matching parent prefix, so `/insights` → `/decryptages` also moves every
 * `/insights/<article>` without enumerating articles. Article and case study
 * slugs themselves stay English in all locales.
 *
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
  '/wechat-agency': '/agencia-wechat',
  '/douyin-agency': '/agencia-douyin',
  '/rednote-agency': '/agencia-rednote',
  '/weibo-agency': '/agencia-weibo',
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
  '/industries': '/sectores',
  '/tools': '/herramientas',
};

/** ZH slugs are toneless pinyin per TRANSLATION_GUIDE 13. `/ai` keeps its
 *  spelling: Chinese tech press writes and reads it as "AI". Brand names
 *  (WeChat, Douyin, RedNote, Weibo, CRM) stay canonical. */
const zhSlugMap: Record<string, string> = {
  '/about': '/guanyu-women',
  '/contact': '/lianxi-women',
  '/work': '/anli',
  '/insights': '/guandian',
  '/services': '/fuwu',
  '/platforms': '/pingtai',
  '/pricing': '/jiage',
  '/thank-you': '/ganxie',
  '/privacy-policy': '/yinsi-zhengce',
  '/cookie-policy': '/cookie-zhengce',
  '/terms-of-service': '/fuwu-tiaokuan',
  '/services/strategy-campaigns': '/fuwu/celue-huodong',
  '/services/advertising': '/fuwu/guanggao',
  '/services/content-production': '/fuwu/neirong-zhizuo',
  '/services/influencer-marketing': '/fuwu/daren-yingxiao',
  '/services/market-entry': '/fuwu/shichang-jinru',
  '/services/crm-private-domain': '/fuwu/crm-siyu',
  '/services/training-consulting': '/fuwu/peixun-zixun',
  '/platforms/wechat': '/pingtai/wechat',
  '/platforms/rednote': '/pingtai/rednote',
  '/platforms/douyin': '/pingtai/douyin',
  '/platforms/weibo': '/pingtai/weibo',
  '/platforms/others': '/pingtai/qita',
  '/wechat-agency': '/wechat-daili',
  '/douyin-agency': '/douyin-daili',
  '/rednote-agency': '/rednote-daili',
  '/weibo-agency': '/weibo-daili',
  '/industries': '/hangye',
  '/tools': '/gongju',
};

/** DE slugs per TRANSLATION_GUIDE 13, with ae/oe/ue for umlauts.
 *  "Tools" and "Influencer-Marketing" stay: the German marketing press
 *  uses both, and translating them would read as a back-translation. */
const deSlugMap: Record<string, string> = {
  '/about': '/ueber-uns',
  '/contact': '/kontakt',
  '/work': '/referenzen',
  '/insights': '/analysen',
  '/services': '/leistungen',
  '/platforms': '/plattformen',
  '/pricing': '/preise',
  '/ai': '/ki',
  '/thank-you': '/danke',
  '/privacy-policy': '/datenschutz',
  '/cookie-policy': '/cookie-richtlinie',
  '/terms-of-service': '/agb',
  '/services/strategy-campaigns': '/leistungen/strategie-kampagnen',
  '/services/advertising': '/leistungen/werbung',
  '/services/content-production': '/leistungen/content-produktion',
  '/services/influencer-marketing': '/leistungen/influencer-marketing',
  '/services/market-entry': '/leistungen/markteintritt',
  '/services/crm-private-domain': '/leistungen/crm-private-domain',
  '/services/training-consulting': '/leistungen/schulung-beratung',
  '/platforms/wechat': '/plattformen/wechat',
  '/platforms/rednote': '/plattformen/rednote',
  '/platforms/douyin': '/plattformen/douyin',
  '/platforms/weibo': '/plattformen/weibo',
  '/platforms/others': '/plattformen/weitere',
  '/wechat-agency': '/wechat-agentur',
  '/douyin-agency': '/douyin-agentur',
  '/rednote-agency': '/rednote-agentur',
  '/weibo-agency': '/weibo-agentur',
  '/industries': '/branchen',
  '/tools': '/tools',
};

/** FR slugs per TRANSLATION_GUIDE 13. `/services` keeps its spelling:
 *  same word in French. Case study slugs are client names and stay
 *  canonical, so only the `/work` segment around them moves. */
const frSlugMap: Record<string, string> = {
  '/about': '/qui-nous-sommes',
  '/contact': '/nous-contacter',
  '/work': '/realisations',
  '/insights': '/decryptages',
  '/platforms': '/plateformes',
  '/pricing': '/tarifs',
  '/ai': '/ia',
  '/thank-you': '/merci',
  '/privacy-policy': '/politique-confidentialite',
  '/cookie-policy': '/politique-cookies',
  '/terms-of-service': '/conditions-generales',
  '/services/strategy-campaigns': '/services/strategie-campagnes',
  '/services/advertising': '/services/publicite',
  '/services/content-production': '/services/production-de-contenu',
  '/services/influencer-marketing': '/services/marketing-influence',
  '/services/market-entry': '/services/entree-marche',
  '/services/crm-private-domain': '/services/crm-domaine-prive',
  '/services/training-consulting': '/services/formation-conseil',
  '/platforms/wechat': '/plateformes/wechat',
  '/platforms/rednote': '/plateformes/rednote',
  '/platforms/douyin': '/plateformes/douyin',
  '/platforms/weibo': '/plateformes/weibo',
  '/platforms/others': '/plateformes/autres',
  '/wechat-agency': '/agence-wechat',
  '/douyin-agency': '/agence-douyin',
  '/rednote-agency': '/agence-rednote',
  '/weibo-agency': '/agence-weibo',
  '/industries': '/secteurs',
  '/tools': '/outils',
};

const slugMaps: Partial<Record<Lang, Record<string, string>>> = {
  es: esSlugMap,
  zh: zhSlugMap,
  de: deSlugMap,
  fr: frSlugMap,
};

/** Reverse direction, derived so a map only ever has to be edited in one place. */
const slugMapsReverse: Partial<Record<Lang, Record<string, string>>> = {};
for (const [lang, map] of Object.entries(slugMaps) as [Lang, Record<string, string>][]) {
  slugMapsReverse[lang] = Object.fromEntries(
    Object.entries(map).map(([en, localized]) => [localized, en])
  );
}

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

/** Translate a path against a slug map, falling back to the longest matching
 *  parent-segment prefix when there is no exact key. This is what lets dynamic
 *  child routes inherit their section's localized slug: `/insights` is mapped
 *  to `/analisis`, so `/insights/<article>` (never enumerated in the map)
 *  resolves to `/analisis/<article>`. Without the prefix fallback, blog
 *  articles emitted hreflang alternates pointing at the untranslated
 *  `/es/insights/...` segment, which 404s. Prefix matches only at segment
 *  boundaries so `/insights` can never partially match `/insights-foo`. */
function mapPath(map: Record<string, string>, key: string): string {
  const direct = map[key];
  if (direct) return direct;
  let bestFrom = '';
  let bestTo = '';
  for (const [from, to] of Object.entries(map)) {
    if ((key === from || key.startsWith(`${from}/`)) && from.length > bestFrom.length) {
      bestFrom = from;
      bestTo = to;
    }
  }
  return bestFrom ? bestTo + key.slice(bestFrom.length) : key;
}

/** Slug-map lookup keys are stored without trailing slashes, but callers may
 *  pass paths with or without one (since `trailingSlash: 'always'` is now the
 *  global convention). Normalize before lookup, then restore the trailing
 *  slash if the input had one. */
function applySlugMap(path: string, lang: Lang): string {
  const map = slugMaps[lang];
  if (!map) return path;
  const [base, tail] = splitTail(path);
  const hadTrailingSlash = base.length > 1 && base.endsWith('/');
  const lookupKey = hadTrailingSlash ? base.slice(0, -1) : base;
  const mapped = mapPath(map, lookupKey);
  return mapped + (hadTrailingSlash ? '/' : '') + tail;
}

function reverseSlugMap(path: string, lang: Lang): string {
  const map = slugMapsReverse[lang];
  if (!map) return path;
  const [base, tail] = splitTail(path);
  const hadTrailingSlash = base.length > 1 && base.endsWith('/');
  const lookupKey = hadTrailingSlash ? base.slice(0, -1) : base;
  const mapped = mapPath(map, lookupKey);
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
  const englishPath = reverseSlugMap(rawStripped, currentLang);
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
