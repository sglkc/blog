import path from 'path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import image from '@astrojs/image';
import Unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    Unocss(),
    mdx(),
    prefetch(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  site: "https://sglkc.my.id",
  vite: {
    resolve: {
      alias: {
        "@/*": path.resolve("src"),
      },
    },
  },
});
