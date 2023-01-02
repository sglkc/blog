import path from 'path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from "@astrojs/preact";
import prefetch from '@astrojs/prefetch';
import sitemap from "@astrojs/sitemap";
import Unocss from 'unocss/astro';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFigure from 'rehype-figure';

// https://astro.build/config
export default defineConfig({
  site: "https://sglkc.my.id",
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      rehypeFigure
    ],
    shikiConfig: {
      theme: 'slack-dark'
    }
  },
  integrations: [
    mdx(), preact(), prefetch(), sitemap(), Unocss()
  ],
  vite: {
    resolve: {
      alias: {
        "@/*": path.resolve("src")
      }
    }
  }
});
