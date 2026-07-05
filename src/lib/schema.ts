const SITE_URL = 'https://www.theredscroll.com';
const ORG_ID = `${SITE_URL}/#organization`;
const FOUNDER_ID = `${SITE_URL}/#founder`;

/** Resolve a relative path or absolute URL into the canonical absolute form,
 *  always with a trailing slash unless it points to a static asset file. */
function canonicalUrl(input: string): string {
  const full = input.startsWith('http') ? input : `${SITE_URL}${input.startsWith('/') ? input : `/${input}`}`;
  if (/\.[a-z0-9]{2,5}(?:\?|#|$)/i.test(full)) return full; // asset extension — leave alone
  if (full.endsWith('/')) return full;
  return `${full}/`;
}

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
    url: canonicalUrl(opts.url),
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
  /** Name of a human author. If omitted or equal to the brand name, the founder
   *  Person @id is used instead so the author entity resolves to a real person. */
  authorName?: string;
  type?: 'Article' | 'BlogPosting' | 'NewsArticle';
}

export function articleSchema(opts: ArticleSchemaOpts): Record<string, unknown> {
  // Brand name as author is invalid for Person/Article schema. Resolve to the
  // founder entity so Google's E-E-A-T parser sees a real Person.
  const namedAuthor = opts.authorName && opts.authorName !== 'TheRedScroll' ? opts.authorName : null;
  const author = namedAuthor
    ? { '@type': 'Person', name: namedAuthor, '@id': FOUNDER_ID }
    : { '@id': FOUNDER_ID };
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'Article',
    headline: opts.headline,
    description: opts.description,
    url: canonicalUrl(opts.url),
    ...(opts.image && { image: opts.image.startsWith('http') ? opts.image : `${SITE_URL}${opts.image}` }),
    ...(opts.datePublished && { datePublished: opts.datePublished }),
    ...(opts.dateModified && { dateModified: opts.dateModified }),
    author,
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
  const fullUrl = canonicalUrl(opts.url);
  // Google's structured-data image formats are JPG/PNG/WebP — AVIF is not
  // documented as supported. A WebP sibling is generated for every case-study
  // hero, so serve that to the schema even when the on-page <img> uses AVIF.
  const schemaImage = opts.image?.replace(/\.avif(?=$|[?#])/i, '.webp');
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${fullUrl}#article`,
    headline: opts.headline,
    description: opts.description,
    url: fullUrl,
    ...(schemaImage && { image: schemaImage.startsWith('http') ? schemaImage : `${SITE_URL}${schemaImage}` }),
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
