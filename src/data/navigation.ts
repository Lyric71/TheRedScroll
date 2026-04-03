export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Strategy, Campaigns & Analytics', href: '/services/strategy-campaigns' },
      { label: 'Advertising Planning & Buying', href: '/services/advertising' },
      { label: 'Content Production', href: '/services/content-production' },
      { label: 'Influencer Marketing', href: '/services/influencer-marketing' },
      { label: 'China Market Entry', href: '/services/market-entry' },
      { label: 'CRM & Private Domain Traffic', href: '/services/crm-private-domain' },
      { label: 'Training & Consulting', href: '/services/training-consulting' },
    ],
  },
  {
    label: 'Platforms',
    href: '/platforms',
    children: [
      { label: 'WeChat', href: '/platforms/wechat' },
      { label: 'RedNote / Xiaohongshu', href: '/platforms/rednote' },
      { label: 'Douyin', href: '/platforms/douyin' },
      { label: 'Weibo', href: '/platforms/weibo' },
      { label: 'Additional Platforms', href: '/platforms' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Team', href: '/about#team' },
      { label: 'Our Approach', href: '/about#approach' },
      { label: 'From Shanghai & Hong Kong', href: '/about#locations' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];
