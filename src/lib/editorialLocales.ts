import { getCollection } from 'astro:content';
import { availableLangs } from '../i18n/config';
import type { Lang } from '../i18n/config';

type Section = 'industries' | 'tools';

/** Collection name for a section in a locale. English lives in the base
 *  collection, every other locale in a suffixed one. */
function collectionFor(section: Section, lang: Lang) {
  return (lang === 'en' ? section : `${section}-${lang}`) as Section;
}

/** Article ids present in one collection. Cached for the build: these routes
 *  run getStaticPaths per page, and the content never changes mid-build. */
const idCache = new Map<string, Promise<Set<string>>>();

function idsIn(section: Section, lang: Lang): Promise<Set<string>> {
  const key = `${section}:${lang}`;
  const cached = idCache.get(key);
  if (cached) return cached;
  const pending = getCollection(collectionFor(section, lang)).then(
    (pages) => new Set(pages.map((page) => page.id))
  );
  idCache.set(key, pending);
  return pending;
}

/**
 * Locales that have no translation of this editorial page yet, so their
 * hreflang alternate would 404.
 *
 * A dead alternate invalidates the whole cluster for Google, which is why this
 * is computed rather than hardcoded: as each locale's translation is published,
 * its alternate appears on the next build with no code change, and a locale
 * that falls behind is dropped automatically instead of silently breaking.
 */
export async function missingEditorialLocales(
  section: Section,
  id: string
): Promise<Lang[]> {
  const present = await Promise.all(
    availableLangs.map(async (lang) => ({ lang, has: (await idsIn(section, lang)).has(id) }))
  );
  return present.filter((entry) => !entry.has).map((entry) => entry.lang);
}
