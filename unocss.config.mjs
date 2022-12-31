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
        h1: {
          margin: '1.75em 0 0.75em',
          'font-size': '1.825em'
        },
        h2: {
          margin: '1.5em 0 0.5em',
          'font-size': '1.625em'
        },
        'blockquote, hr, th, td': {
          transition: 'border-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        'tr': {
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        hr: {
          border: 'unset',
          'border-top': 'solid 2px var(--un-prose-hr)',
        },
        mark: {
          'background-color': '#dadadd',
        },
        '.dark mark': {
          'background-color': '#e4e4e7',
        },
        'ol, ul': {
          margin: '0',
          padding: '0',
          'list-style-position': 'inside',
        },
        code: {
          'font-size': '1em'
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
    'background': 'bg-zinc-100 dark:bg-dark-500 transition-property-[background-color] duration-300 ease-in-out',
  },
  preflights: [
    {
      getCSS: () => `
      .no-transitions * {
        transition: none!important;
        transition-property: none!important;
        transition-duration: 0ms!important;
        transition-timing-function: none!important;
        animation: none!important;
      }
      `
    }
  ]
});
