import { getCollection } from 'astro:content';
import { hreflangCode, langPrefix, localizedPath } from '../i18n/config';
import type { Lang } from '../i18n/config';

const SITE = 'https://www.theredscroll.com';

type Section = 'insights' | 'industries' | 'tools';

/** Collection name per section and locale. Insights live in the `blog`
 *  collections; English uses the unsuffixed name. */
function collectionFor(section: Section, lang: Lang) {
  const base = section === 'insights' ? 'blog' : section;
  return (lang === 'en' ? base : `${base}-${lang}`) as 'blog';
}

const channelDescriptions: Record<Lang, string> = {
  en: 'China social media marketing insights, industry guides and tools from TheRedScroll.',
  fr: 'Décryptages, guides sectoriels et outils de TheRedScroll sur le marketing des réseaux sociaux chinois.',
  zh: 'TheRedScroll 关于中国社交媒体营销的观点、行业指南与工具。',
  de: 'Analysen, Branchenleitfäden und Tools von TheRedScroll zum Social-Media-Marketing in China.',
  es: 'Análisis, guías sectoriales y herramientas de TheRedScroll sobre marketing en redes sociales de China.',
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * RSS 2.0 feed of every insight, industry page and tool page in one locale.
 *
 * Submitted in Search Console next to the sitemap: Google polls small feeds
 * more often than the full sitemap, so new articles are discovered faster.
 * Items are built from the same collections and slug maps as the pages, so a
 * published translation appears in its locale's feed on the next build.
 */
export async function feedResponse(lang: Lang): Promise<Response> {
  const sections: Section[] = ['insights', 'industries', 'tools'];
  const items = (
    await Promise.all(
      sections.map(async (section) =>
        (await getCollection(collectionFor(section, lang))).map((entry) => ({
          title: entry.data.title,
          description: entry.data.description,
          url: `${SITE}${localizedPath(`/${section}/${entry.id}/`, lang)}`,
          published: new Date(entry.data.publishDate),
          updated: new Date(entry.data.updatedDate ?? entry.data.publishDate),
        }))
      )
    )
  )
    .flat()
    .sort((a, b) => b.published.getTime() - a.published.getTime());

  const lastBuild = new Date(Math.max(0, ...items.map((item) => item.updated.getTime())));
  const feedUrl = `${SITE}${langPrefix(lang)}/rss.xml`;
  const homeUrl = `${SITE}${localizedPath('/', lang)}`;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>TheRedScroll</title>
<link>${homeUrl}</link>
<description>${escapeXml(channelDescriptions[lang])}</description>
<language>${hreflangCode(lang)}</language>
<lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
<atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
${items
  .map(
    (item) => `<item>
<title>${escapeXml(item.title)}</title>
<link>${item.url}</link>
<guid isPermaLink="true">${item.url}</guid>
<pubDate>${item.published.toUTCString()}</pubDate>
<description>${escapeXml(item.description)}</description>
</item>`
  )
  .join('\n')}
</channel>
</rss>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
