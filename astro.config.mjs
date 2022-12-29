import path from 'path';
import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import preact from "@astrojs/preact";
import prefetch from '@astrojs/prefetch';
import Unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    mdx(),
    preact(),
    prefetch(),
    Unocss(),
  ],
  site: "https://sglkc.my.id",
  vite: {
    resolve: {
      alias: {
        "@/*": path.resolve("src")
      }
    }
  }
});
