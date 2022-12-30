export function get() {
  const posts = import.meta.glob('./post/*.mdx', { eager: true });
  const mapped = Object.values(posts).map((post: any) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    created: post.frontmatter.created,
    tags: post.frontmatter.tags.join(),
    url: post.url,
  }));

  return { body: JSON.stringify(mapped) };
}
