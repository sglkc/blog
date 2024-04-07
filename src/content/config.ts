import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().nullish(),
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().endsWith('.webp').nullish(),
    language: z.enum(['en', 'id']),
    created: z.string(),
    updated: z.string().nullish(),
    tags: z.array(z.string()),
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    created: z.string(),
    description: z.string(),
    thumbnail: z.string().endsWith('.webp'),
    source: z.string().url().nullish(),
    demo: z.string().url().nullish(),
    stack: z.array(z.string())
  })
})

export const collections = {
  posts,
  projects
}
