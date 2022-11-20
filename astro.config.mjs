import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://dakishi.me',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    sitemap(),
    prefetch()
  ]
});
