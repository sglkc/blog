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
        },
        hr: {
          border: 'unset',
          'border-top': 'solid 2px var(--un-prose-hr)',
          transition: 'border-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          filter: 'brightness(0.925)'
        },
        '.dark hr': {
          filter: 'brightness(1)'
        }
      }
    })
  ],
  theme: {
    fontFamily: {
      overpass: '"Overpass Mono", monospace'
    },
  },
  shortcuts: {
    'background': 'bg-zinc-100 dark:bg-zinc-800 transition-property-[background-color] duration-300 ease-in-out',
  },
  preflights: [
    {
      getCSS: () => `
      .unloaded * {
        transition: none!important;
        transition-property: none!important;
        transition-duration: 0ms!important;
        transition-timing-function: none!important;
      }
      `
    }
  ]
});
