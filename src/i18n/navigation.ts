import { getCollection } from 'astro:content';
import type { NavItem, NavGroup } from '../data/navigation';
import { t } from './ui';
import { localizedPath } from './config';
import type { Lang } from './config';

/** Platforms the insights index can filter by. Values match the `platforms`
 *  enum in the blog schema and the `data-platform` buttons in PlatformFilter. */
const INSIGHT_PLATFORMS = [
  { value: 'wechat', label: 'WeChat', subtitle: '微信' },
  { value: 'rednote', label: 'RedNote', subtitle: '小红书' },
  { value: 'douyin', label: 'Douyin', subtitle: '抖音' },
  { value: 'weibo', label: 'Weibo', subtitle: '微博' },
];

/** English lives in the base collection, every other locale in a suffixed one. */
function editorialCollection(section: 'industries' | 'tools', lang: Lang) {
  return (lang === 'en' ? section : `${section}-${lang}`) as 'industries' | 'tools';
}

/** The header renders on every page, so without this the build would re-read
 *  both editorial collections a few hundred times. Module scope lives for the
 *  whole build, and content is static, so one read per section per locale. */
const editorialCache = new Map<string, Promise<NavItem[]>>();

/** Published pages of one editorial section, newest first, as menu rows. */
function editorialItems(
  section: 'industries' | 'tools',
  lang: Lang,
  limit: number
): Promise<NavItem[]> {
  const key = `${section}:${lang}:${limit}`;
  const cached = editorialCache.get(key);
  if (cached) return cached;
  const pending = loadEditorialItems(section, lang, limit);
  editorialCache.set(key, pending);
  return pending;
}

async function loadEditorialItems(
  section: 'industries' | 'tools',
  lang: Lang,
  limit: number
): Promise<NavItem[]> {
  const pages = await getCollection(editorialCollection(section, lang));
  return pages
    .sort(
      (a, b) =>
        new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
    )
    .slice(0, limit)
    .map((page) => ({
      label: page.data.title,
      subtitle: page.data.category,
      href: localizedPath(`/${section}/${page.id}`, lang),
    }));
}

/** The three columns under Insights. Platform rows deep-link into the existing
 *  client-side filter on the insights index; industry and tool rows come from
 *  the collections, so the menu grows as the editorial plan publishes. */
async function getInsightsGroups(lang: Lang): Promise<NavGroup[]> {
  const lp = (path: string) => localizedPath(path, lang);
  const [industries, tools] = await Promise.all([
    editorialItems('industries', lang, 8),
    editorialItems('tools', lang, 8),
  ]);

  /** A section with nothing published yet says what it is and links to its
   *  index, rather than leaving a labelled column standing empty. The tools
   *  section is in that state until its first page (scheduled Nov 30, 2026),
   *  and any section is while a locale waits on its translations. */
  const orEmpty = (items: NavItem[], section: 'industry' | 'tools', href: string) =>
    items.length
      ? items
      : [
          {
            label: t(`nav.insights.${section}.empty`, lang),
            subtitle: t(`nav.insights.${section}.empty.sub`, lang),
            href,
          },
        ];

  return [
    {
      label: t('nav.insights.platform', lang),
      href: lp('/insights'),
      viewAllLabel: t('nav.viewAll.insights', lang),
      items: INSIGHT_PLATFORMS.map((p) => ({
        label: p.label,
        subtitle: p.subtitle,
        href: `${lp('/insights')}#${p.value}`,
      })),
    },
    {
      label: t('nav.insights.industry', lang),
      href: lp('/industries'),
      viewAllLabel: t('nav.viewAll.industries', lang),
      items: orEmpty(industries, 'industry', lp('/industries')),
    },
    {
      label: t('nav.insights.tools', lang),
      href: lp('/tools'),
      viewAllLabel: t('nav.viewAll.tools', lang),
      items: orEmpty(tools, 'tools', lp('/tools')),
    },
  ];
}

/** Build localized navigation for the given language. */
export async function getLocalizedNav(lang: Lang): Promise<NavItem[]> {
  const lp = (path: string) => localizedPath(path, lang);

  const serviceChildren: NavItem[] = [
    { label: t('nav.services.strategy', lang), subtitle: t('nav.services.strategy.sub', lang), href: lp('/services/strategy-campaigns'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 6-8"/></svg>` },
    { label: t('nav.services.advertising', lang), subtitle: t('nav.services.advertising.sub', lang), href: lp('/services/advertising'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>` },
    { label: t('nav.services.content', lang), subtitle: t('nav.services.content.sub', lang), href: lp('/services/content-production'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/></svg>` },
    { label: t('nav.services.influencer', lang), subtitle: t('nav.services.influencer.sub', lang), href: lp('/services/influencer-marketing'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
    { label: t('nav.services.crm', lang), subtitle: t('nav.services.crm.sub', lang), href: lp('/services/crm-private-domain'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` },
    { label: t('nav.services.training', lang), subtitle: t('nav.services.training.sub', lang), href: lp('/services/training-consulting'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>` },
  ];
  if (lang !== 'zh') {
    serviceChildren.splice(4, 0, { label: t('nav.services.marketEntry', lang), subtitle: t('nav.services.marketEntry.sub', lang), href: lp('/services/market-entry'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` });
  }

  return [
    {
      label: t('nav.services', lang),
      href: lp('/services'),
      viewAllLabel: t('nav.viewAll.services', lang),
      children: serviceChildren,
    },
    {
      label: t('nav.platforms', lang),
      href: lp('/platforms'),
      viewAllLabel: t('nav.viewAll.platforms', lang),
      children: [
        { label: t('nav.platforms.wechat', lang), subtitle: t('nav.platforms.wechat.sub', lang), href: lp('/platforms/wechat'), icon: `<img src="/images/platforms/wechat-logo.svg" alt="WeChat" width="20" height="20" style="filter: brightness(0) invert(1);" />` },
        { label: t('nav.platforms.rednote', lang), subtitle: t('nav.platforms.rednote.sub', lang), href: lp('/platforms/rednote'), icon: `<img src="/images/platforms/rednote-logo.svg" alt="RedNote" width="20" height="20" style="filter: brightness(0) invert(1);" />` },
        { label: t('nav.platforms.douyin', lang), subtitle: t('nav.platforms.douyin.sub', lang), href: lp('/platforms/douyin'), icon: `<img src="/images/platforms/douyin-logo.svg" alt="Douyin" width="20" height="20" />` },
        { label: t('nav.platforms.weibo', lang), subtitle: t('nav.platforms.weibo.sub', lang), href: lp('/platforms/weibo'), icon: `<img src="/images/platforms/weibo-logo.svg" alt="Weibo" width="20" height="20" style="filter: brightness(0) invert(1);" />` },
        { label: t('nav.platforms.others', lang), subtitle: t('nav.platforms.others.sub', lang), href: lp('/platforms/others'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>` },
      ],
    },
    { label: t('nav.work', lang), href: lp('/work') },
    {
      label: t('nav.about', lang),
      href: lp('/about'),
      viewAllLabel: t('nav.viewAll.about', lang),
      children: [
        { label: t('nav.about.team', lang), subtitle: t('nav.about.team.sub', lang), href: lp('/about#team'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
        { label: t('nav.about.ai', lang), subtitle: t('nav.about.ai.sub', lang), href: lp('/ai'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z"/><circle cx="8" cy="6" r="1"/><circle cx="16" cy="6" r="1"/></svg>` },
      ],
    },
    { label: t('nav.pricing', lang), href: lp('/pricing') },
    {
      label: t('nav.insights', lang),
      href: lp('/insights'),
      viewAllLabel: t('nav.viewAll.insights', lang),
      groups: await getInsightsGroups(lang),
    },
  ];
}
