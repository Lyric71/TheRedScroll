export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Return the lang prefix for URLs. English has no prefix. */
export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

/** Build a localized path. English stays at root, French gets /fr prefix. */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}

/** Get the alternate-language version of the current path. */
export function alternateUrl(currentPath: string, targetLang: Lang): string {
  // Strip any existing /fr/ prefix
  const stripped = currentPath.replace(/^\/fr(\/|$)/, '/');
  return localizedPath(stripped, targetLang);
}

/** Detect current lang from a URL path. */
export function getLangFromPath(path: string): Lang {
  if (path.startsWith('/fr/') || path === '/fr') return 'fr';
  return 'en';
}
