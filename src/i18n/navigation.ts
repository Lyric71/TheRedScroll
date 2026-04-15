import type { NavItem } from '../data/navigation';
import { t } from './ui';
import { localizedPath } from './config';
import type { Lang } from './config';

/** Build localized navigation for the given language. */
export function getLocalizedNav(lang: Lang): NavItem[] {
  const lp = (path: string) => localizedPath(path, lang);

  return [
    {
      label: t('nav.services', lang),
      href: lp('/services'),
      viewAllLabel: t('nav.viewAll.services', lang),
      children: [
        { label: t('nav.services.strategy', lang), subtitle: t('nav.services.strategy.sub', lang), href: lp('/services/strategy-campaigns'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 6-8"/></svg>` },
        { label: t('nav.services.advertising', lang), subtitle: t('nav.services.advertising.sub', lang), href: lp('/services/advertising'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>` },
        { label: t('nav.services.content', lang), subtitle: t('nav.services.content.sub', lang), href: lp('/services/content-production'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/></svg>` },
        { label: t('nav.services.influencer', lang), subtitle: t('nav.services.influencer.sub', lang), href: lp('/services/influencer-marketing'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
        { label: t('nav.services.marketEntry', lang), subtitle: t('nav.services.marketEntry.sub', lang), href: lp('/services/market-entry'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` },
        { label: t('nav.services.crm', lang), subtitle: t('nav.services.crm.sub', lang), href: lp('/services/crm-private-domain'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` },
        { label: t('nav.services.training', lang), subtitle: t('nav.services.training.sub', lang), href: lp('/services/training-consulting'), icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>` },
      ],
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
    { label: t('nav.insights', lang), href: lp('/insights') },
  ];
}
