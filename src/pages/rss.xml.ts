import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Home Sweet Home @ sglkc',
  description: '@sglkc Personal Website',
  site: import.meta.env.SITE,
  items: import.meta.glob('./blog/**/*.md'),
});
