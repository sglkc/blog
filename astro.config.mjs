import path from 'path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import unocss from 'unocss/astro';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFigure from 'rehype-figure';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://sglkc.my.id",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        { behavior: 'wrap', properties: { target: '_self' } }
      ],
      rehypeFigure
    ],
    shikiConfig: {
      theme: 'slack-dark'
    }
  },
  integrations: [
    mdx(), preact(), sitemap(), unocss(), icon(),
  ],
  vite: {
    resolve: {
      alias: {
        "@/*": path.resolve("src")
      }
    }
  }
});
