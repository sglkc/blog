import { defineConfig } from 'unocss/vite';
import { presetUno, presetTypography } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        a: {
          'text-decoration-thickness': '1px',
          'text-underline-position': 'under',
          'overflow-wrap': 'break-word'
        },
        button: {
          color: 'var(--un-prose-links)'
        },
        h1: {
          margin: '1.6em 0 0.75em',
          'font-size': '1.825em'
        },
        h2: {
          margin: '1.4em 0 0.5em',
          'font-size': '1.625em'
        },
        h3: {
          margin: '1.25em 0 0.5em',
        },
        'blockquote, hr, th, td': {
          transition: 'border-color 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        'tr:nth-child(2n)': {
          transition: 'background-color 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        'li::marker, figcaption': {
          transition: 'color 500ms cubic-bezier(0.4, 0, 0.2, 1)'
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
        'article ol, article ul': {
          margin: '0 auto',
          'margin-left': '1em',
          padding: '0 auto',
        },
        'article img': {
          'margin': '1.5rem auto 0'
        },
        figcaption: {
          'margin-top': '0.5rem',
          'text-align': 'center',
          'font-size': '0.875rem'
        },
        pre: {
          padding: '1rem 1.25rem'
        },
        table: {
          margin: 'auto auto 2em',
          display: 'table'
        },
        details: {
          padding: '0',
          'background-color': 'transparent'
        },
        summary: {
          'margin-left': '1.5em',
          'padding-left': '0.5em',
          'list-style-position': 'outside'
        },
        rt: {
          'margin-bottom': '1em',
          'font-size': '0.75em'
        },
      }
    })
  ],
  theme: {
    fontFamily: {
      overpass: '"Overpass Mono Variable", monospace'
    },
  },
  shortcuts: {
    'background': 'bg-zinc-100 dark:bg-dark-500 transition-property-[background-color,color] duration-500 ease-in-out',
  },
  preflights: [
    {
      getCSS: () => `
      html:not(.loaded) * {
        display: none!important;
        visibility: hidden!important;
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
