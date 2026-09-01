import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), excerpt: z.string(), icon: z.string().default('fa-newspaper'), featured: z.boolean().default(false), draft: z.boolean().default(false) }),
});
const races = defineCollection({
  loader: glob({ base: './src/content/races', pattern: '**/*.json' }),
  schema: z.object({ name: z.string(), startDate: z.coerce.date(), endDate: z.coerce.date().optional(), location: z.string(), published: z.boolean().default(true), featured: z.boolean().default(false), noticeUrl: z.string().optional() }),
});
const results = defineCollection({
  loader: glob({ base: './src/content/results', pattern: '**/*.json' }),
  schema: z.object({ name: z.string(), sailNumber: z.string(), points: z.number().nonnegative(), ranking: z.number().int().positive(), season: z.number().int() }),
});
const sponsors = defineCollection({
  loader: glob({ base: './src/content/sponsors', pattern: '**/*.json' }),
  schema: z.object({ name: z.string(), icon: z.string().default('fa-handshake'), url: z.string().url().optional(), order: z.number().int().default(0) }),
});

export const collections = { news, races, results, sponsors };
