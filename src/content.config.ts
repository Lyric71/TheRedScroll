import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(155),
    icon: z.string(),
    order: z.number(),
    keywords: z.array(z.string()),
    relatedServices: z.array(z.string()).optional(),
  }),
});

const platforms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/platforms' }),
  schema: z.object({
    title: z.string(),
    chineseName: z.string(),
    mau: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(155),
    icon: z.string(),
    order: z.number(),
    isCore: z.boolean(),
    keywords: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(155),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    category: z.string(),
    platforms: z.array(z.enum(['wechat', 'rednote', 'douyin', 'weibo'])).default([]),
    keywords: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
    keyFacts: z.array(z.string()).optional(),
  }),
});

const blogFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-fr' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(160),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    category: z.string(),
    platforms: z.array(z.enum(['wechat', 'rednote', 'douyin', 'weibo'])).default([]),
    keywords: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
    keyFacts: z.array(z.string()).optional(),
  }),
});

const blogZh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-zh' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(160),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    category: z.string(),
    platforms: z.array(z.enum(['wechat', 'rednote', 'douyin', 'weibo'])).default([]),
    keywords: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
    keyFacts: z.array(z.string()).optional(),
  }),
});

const blogDe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-de' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(160),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    category: z.string(),
    platforms: z.array(z.enum(['wechat', 'rednote', 'douyin', 'weibo'])).default([]),
    keywords: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
    keyFacts: z.array(z.string()).optional(),
  }),
});

const blogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-es' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(160),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    category: z.string(),
    platforms: z.array(z.enum(['wechat', 'rednote', 'douyin', 'weibo'])).default([]),
    keywords: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
    keyFacts: z.array(z.string()).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string(),
    bio: z.string(),
    order: z.number(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    order: z.number(),
    category: z.enum(['general', 'services', 'pricing', 'process']).optional(),
  }),
});

/** Editorial sections created by the Sept to Dec 2026 plan. Same shape as blog
 *  plus optional FAQ pairs (rendered as an accordion and emitted as FAQPage
 *  schema) and an optional service type for the Service schema on industry
 *  pages. Published in all five locales, same as blog. */
const editorialSchema = z.object({
  title: z.string(),
  description: z.string(),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(155),
  publishDate: z.date(),
  updatedDate: z.date().optional(),
  author: z.string(),
  category: z.string(),
  platforms: z.array(z.enum(['wechat', 'rednote', 'douyin', 'weibo'])).default([]),
  keywords: z.array(z.string()),
  featured: z.boolean().default(false),
  featuredImage: z.string().optional(),
  keyFacts: z.array(z.string()).optional(),
  faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  serviceType: z.string().optional(),
  cta: z.string().optional(),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: editorialSchema,
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: editorialSchema,
});

/** Localized editorial content. Translations run longer than the English source,
 *  so metaDescription gets the same 160-char ceiling the localized blog
 *  collections already use instead of the English 155. */
const localizedEditorialSchema = editorialSchema.extend({
  metaDescription: z.string().max(160),
});

/** One collection per section per locale. Filenames match the English source,
 *  exactly like the blog collections: the URL segment is localized by the slug
 *  map in src/i18n/config.ts, the article slug is not. Written out rather than
 *  generated so Astro can infer the collection names statically. */
const localizedEditorial = (section: 'industries' | 'tools', lang: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.md', base: `./src/content/${section}-${lang}` }),
    schema: localizedEditorialSchema,
  });

export const collections = {
  services,
  platforms,
  blog,
  'blog-fr': blogFr,
  'blog-zh': blogZh,
  'blog-de': blogDe,
  'blog-es': blogEs,
  team,
  faq,
  industries,
  tools,
  'industries-fr': localizedEditorial('industries', 'fr'),
  'industries-zh': localizedEditorial('industries', 'zh'),
  'industries-de': localizedEditorial('industries', 'de'),
  'industries-es': localizedEditorial('industries', 'es'),
  'tools-fr': localizedEditorial('tools', 'fr'),
  'tools-zh': localizedEditorial('tools', 'zh'),
  'tools-de': localizedEditorial('tools', 'de'),
  'tools-es': localizedEditorial('tools', 'es'),
};
