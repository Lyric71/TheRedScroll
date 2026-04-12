export const languages = {
  en: 'English',
  fr: 'Français',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Return the lang prefix for URLs. English has no prefix. */
export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

/** Build a localized path. English stays at root, other languages get a prefix. */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}

/** Get the alternate-language version of the current path. */
export function alternateUrl(currentPath: string, targetLang: Lang): string {
  // Strip any existing language prefix
  const stripped = currentPath.replace(/^\/(fr|zh)(\/|$)/, '/');
  return localizedPath(stripped, targetLang);
}

/** Detect current lang from a URL path. */
export function getLangFromPath(path: string): Lang {
  if (path.startsWith('/fr/') || path === '/fr') return 'fr';
  if (path.startsWith('/zh/') || path === '/zh') return 'zh';
  return 'en';
}

/** Get all alternate languages (excluding the current one). */
export function getAlternateLangs(currentLang: Lang): Lang[] {
  return (Object.keys(languages) as Lang[]).filter(l => l !== currentLang);
}
