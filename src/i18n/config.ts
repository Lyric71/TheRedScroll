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

function applySlugMap(path: string, lang: Lang): string {
  if (lang !== 'es') return path;
  const [base, tail] = splitTail(path);
  return (esSlugMap[base] ?? base) + tail;
}

function reverseSlugMap(path: string): string {
  const [base, tail] = splitTail(path);
  return (esSlugMapReverse[base] ?? base) + tail;
}

/** Build a localized path. English stays at root, other languages get a prefix. */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const mapped = applySlugMap(clean, lang);
  if (lang === defaultLang) return mapped;
  return `/${lang}${mapped}`;
}

/** Get the alternate-language version of the current path. */
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
