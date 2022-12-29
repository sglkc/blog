import { defineConfig } from 'unocss/vite';
import presetWind from '@unocss/preset-wind';
import presetTypography from '@unocss/preset-typography';

export default defineConfig({
  presets: [
    presetWind(),
    presetTypography({
      cssExtend: {
        button: {
          color: 'var(--un-prose-links)'
        }
      }
    })
  ],
  theme: {
    fontFamily: {
      overpass: '"Overpass Mono", monospace'
    }
  },
});
