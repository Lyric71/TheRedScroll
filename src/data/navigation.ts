export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  subtitle?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Strategy, Campaigns & Analytics', subtitle: 'Research, calendars, reporting', href: '/services/strategy-campaigns', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 6-8"/></svg>` },
      { label: 'Advertising Planning & Buying', subtitle: 'Media plans, creative, performance', href: '/services/advertising', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>` },
      { label: 'Content Production', subtitle: 'AI visuals, video, native copy', href: '/services/content-production', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/></svg>` },
      { label: 'Influencer Marketing', subtitle: 'KOL and KOC campaigns', href: '/services/influencer-marketing', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
      { label: 'China Market Entry', subtitle: 'Registration, setup, localization', href: '/services/market-entry', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` },
      { label: 'CRM & Private Domain Traffic', subtitle: 'WeCom, groups, retention', href: '/services/crm-private-domain', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` },
      { label: 'Training & Consulting', subtitle: 'Masterclasses, coaching, audits', href: '/services/training-consulting', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>` },
    ],
  },
  {
    label: 'Platforms',
    href: '/platforms',
    children: [
      { label: 'WeChat', subtitle: 'Official Accounts, Mini Programs, WeCom', href: '/platforms/wechat', icon: `<img src="/images/platforms/wechat-logo.svg" alt="WeChat" width="20" height="20" style="filter: brightness(0) invert(1);" />` },
      { label: 'RedNote / Xiaohongshu', subtitle: 'Reviews, shoppable posts, lifestyle', href: '/platforms/rednote', icon: `<img src="/images/platforms/rednote-logo.svg" alt="RedNote" width="20" height="20" style="filter: brightness(0) invert(1);" />` },
      { label: 'Douyin', subtitle: 'Short video, live commerce', href: '/platforms/douyin', icon: `<img src="/images/platforms/douyin-logo.svg" alt="Douyin" width="20" height="20" />` },
      { label: 'Weibo', subtitle: 'Mass reach, PR, trending topics', href: '/platforms/weibo', icon: `<img src="/images/platforms/weibo-logo.svg" alt="Weibo" width="20" height="20" />` },
      { label: 'Additional Platforms', subtitle: 'Bilibili, Kuaishou, Zhihu, and more', href: '/platforms', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>` },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Team', subtitle: 'Shanghai and Hong Kong', href: '/about#team', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
      { label: 'Our Approach', subtitle: 'How we work with clients', href: '/about#approach', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];
