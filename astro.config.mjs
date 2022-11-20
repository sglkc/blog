import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://sglkc.github.io',
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    sitemap()
  ],
});
