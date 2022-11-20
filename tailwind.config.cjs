const colors = {
  primary: (int) => `colors.zinc.${int}`,
  accent: (int) => `colors.slate.${int}`
};

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    fontFamily: {
      'nunito': 'NunitoVariable',
      'overpass': '"Overpass Mono"',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme(colors.primary(800)),
            '--tw-prose-hr': theme(colors.accent(400)),
            '--tw-prose-bullets': theme(colors.accent(400)),
            '--tw-prose-quotes': theme(colors.accent(700)),
            '--tw-prose-quote-borders': theme(colors.accent(300)),
            '--tw-prose-th-borders': theme(colors.accent(400)),
            '--tw-prose-td-borders': theme(colors.accent(300)),
            table: {
              margin: '0'
            },
            'div:has(table)': {
              margin: '2rem 0'
            }
          }
        },
        invert: {
          css: {
            color: theme(colors.primary(200)),
            '--tw-prose-invert-body': theme(colors.primary(200)),
            '--tw-prose-invert-headings': theme(colors.primary(100)),
            '--tw-prose-invert-lead': theme(colors.accent(200)),
            '--tw-prose-invert-links': theme(colors.accent(300)),
            '--tw-prose-invert-bold': theme(colors.primary(200)),
            '--tw-prose-invert-counters': theme(colors.accent(400)),
            '--tw-prose-invert-bullets': theme(colors.accent(600)),
            '--tw-prose-invert-hr': theme(colors.accent(700)),
            '--tw-prose-invert-quotes': theme(colors.accent(300)),
            '--tw-prose-invert-quote-borders': theme(colors.accent(700)),
            '--tw-prose-invert-captions': theme(colors.accent(400)),
            '--tw-prose-invert-code': theme(colors.primary(200)),
            '--tw-prose-invert-pre-code': theme(colors.accent(300)),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme(colors.accent(600)),
            '--tw-prose-invert-td-borders': theme(colors.accent(700)),
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
