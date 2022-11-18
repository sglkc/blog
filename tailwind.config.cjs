module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    fontFamily: {
      'nunito': 'NunitoVariable',
      'overpass': '"Overpass Mono"',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
