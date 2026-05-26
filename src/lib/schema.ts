const SITE_URL = 'https://theredscroll.com';
const ORG_ID = `${SITE_URL}/#organization`;

export interface FaqItem {
  q: string;
  a: string;
}

export function faqPageSchema(faqs: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export interface ServiceSchemaOpts {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string[];
}

export function serviceSchema(opts: ServiceSchemaOpts): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    serviceType: opts.serviceType ?? opts.name,
    provider: { '@id': ORG_ID },
    areaServed: opts.areaServed ?? ['CN', 'HK'],
  };
}

export interface ArticleSchemaOpts {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  type?: 'Article' | 'BlogPosting' | 'NewsArticle';
}

export function articleSchema(opts: ArticleSchemaOpts): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    ...(opts.image && { image: opts.image.startsWith('http') ? opts.image : `${SITE_URL}${opts.image}` }),
    ...(opts.datePublished && { datePublished: opts.datePublished }),
    ...(opts.dateModified && { dateModified: opts.dateModified }),
    author: {
      '@type': opts.authorName ? 'Person' : 'Organization',
      name: opts.authorName ?? 'TheRedScroll',
      ...(opts.authorName ? {} : { '@id': ORG_ID }),
    },
    publisher: { '@id': ORG_ID },
  };
}

export interface CaseStudyOpts {
  clientName: string;
  headline: string;
  description: string;
  url: string;
  image?: string;
  industry?: string;
  platforms?: string[];
}

export function caseStudySchema(opts: CaseStudyOpts): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`}#article`,
    headline: opts.headline,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    ...(opts.image && { image: opts.image.startsWith('http') ? opts.image : `${SITE_URL}${opts.image}` }),
    about: {
      '@type': 'Organization',
      name: opts.clientName,
      ...(opts.industry && { industry: opts.industry }),
    },
    ...(opts.platforms && opts.platforms.length > 0 && {
      mentions: opts.platforms.map((p) => ({ '@type': 'Thing', name: p })),
    }),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}
