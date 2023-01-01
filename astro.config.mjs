import path from 'path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from "@astrojs/preact";
import prefetch from '@astrojs/prefetch';
import sitemap from "@astrojs/sitemap";
import Unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  site: "https://sglkc.my.id",
  integrations: [mdx(), preact(), prefetch(), sitemap(), Unocss()],
  vite: {
    resolve: {
      alias: {
        "@/*": path.resolve("src")
      }
    }
  }
});
