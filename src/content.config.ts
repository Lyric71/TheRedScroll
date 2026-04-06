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
    author: z.string(),
    category: z.string(),
    keywords: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
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

export const collections = { services, platforms, blog, team, faq };
