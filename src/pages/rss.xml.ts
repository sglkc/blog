import rss from '@astrojs/rss';

const postsImport = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = Object.values(postsImport);

export const get = () => rss({
  title: 'Home // sglkc',
  description: '@sglkc Personal Website',
  site: import.meta.env.SITE,
  items: posts.map((post: any) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.created
  })),
});
