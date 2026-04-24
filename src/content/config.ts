import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10).max(120),
    description: z.string().min(50).max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    author: z.string().default('Inside Cupertino'),
    tags: z.array(z.string()).default([]),
    // When the article is sparked by a third-party report, attribution lives here.
    // Empty `name` means it's an original Inside Cupertino piece with no upstream source.
    source: z.object({
      name: z.string().default(''),
      url:  z.string().url().or(z.literal('')),
    }).optional(),
  }),
});

export const collections = { articles };
