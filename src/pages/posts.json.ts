import type { APIRoute } from 'astro';
import type { PostProps } from '@/types/Post';

export const get: APIRoute = async function get() {
  const posts = import.meta.glob<PostProps>('./post/*.mdx', { eager: true });
  const mapped = Object.values(posts)
    .filter((post) => !(import.meta.env.PROD && post.frontmatter.draft))
    .map((post: PostProps) => {
      const props = post.frontmatter;

      // @ts-ignore
      delete props.layout;
      delete props.updated;

      return {
        ...props,
        tags: props.tags.join(','),
        url: post.url,
      }
    });

  return { body: JSON.stringify(mapped) };
}
