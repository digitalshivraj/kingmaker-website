import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    marathi: z.string(),
    summary: z.string(),
    order: z.number(),
    icon: z.string(),
    photo: z.string(),
    deliverables: z.array(z.string()),
    forWhom: z.array(z.string()),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    marathi: z.string(),
    tagline: z.string(),
    sector: z.string(),
    order: z.number(),
    mock: z.enum(['lodge', 'citizen', 'booth', 'subsidy', 'opd', 'idcard', 'queue', 'logistics']),
    status: z.string(),
    photo: z.string(),
    highlights: z.array(z.string()),
    users: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Kingmaker Enterprises'),
    tags: z.array(z.string()).default([]),
    readingMinutes: z.number().default(5),
    cover: z.string().default('typing'),
  }),
});

export const collections = { services, products, blog };
