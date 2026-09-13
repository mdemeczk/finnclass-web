import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), excerpt: z.string(), image: z.string().optional(), imageAlt: z.string().optional(), icon: z.string().default('fa-newspaper'), featured: z.boolean().default(false), draft: z.boolean().default(false) }),
});
const races = defineCollection({
  loader: glob({ base: './src/content/races', pattern: '**/*.json' }),
  schema: z.object({
    name: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    noticeUrl: z.string().optional(),
    documents: z.array(z.object({ label: z.string(), path: z.string() })).default([]),
    information: z.object({
      source: z.string().optional(),
      sections: z.array(z.object({
        title: z.string(),
        icon: z.string().default('fa-circle-info'),
        paragraphs: z.array(z.string()),
      })),
    }).optional(),
  }),
});
const results = defineCollection({
  loader: glob({ base: './src/content/results', pattern: '**/*.json' }),
  schema: z.object({ name: z.string(), sailNumber: z.string().optional(), club: z.string().optional(), points: z.number().nonnegative(), ranking: z.number().int().positive(), season: z.number().int(), published: z.boolean().default(true) }),
});
const sponsors = defineCollection({
  loader: glob({ base: './src/content/sponsors', pattern: '**/*.json' }),
  schema: z.object({ name: z.string(), icon: z.string().default('fa-handshake'), url: z.string().url().optional(), order: z.number().int().default(0) }),
});

const reports = defineCollection({
  loader: glob({ base: './src/content/reports', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(), date: z.coerce.date(), year: z.number().int(), location: z.string(),
    excerpt: z.string(), author: z.string().optional(), draft: z.boolean().default(false),
    images: z.array(z.object({ path: z.string(), alt: z.string(), caption: z.string().optional() })).default([]),
  }),
});
export const collections = { news, races, results, sponsors, reports };
