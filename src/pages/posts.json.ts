import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts');
  const mapped = Object.values(posts)
    .filter((post) => !(import.meta.env.PROD && post.data.draft))
    .map((post) => {
      const props = post.data;

      // @ts-ignore
      delete props.layout;
      delete props.updated;

      return {
        ...props,
        tags: props.tags.join(','),
        url: `/post/${post.slug}/`,
      }
    });

  return new Response(
    JSON.stringify(mapped), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
}
