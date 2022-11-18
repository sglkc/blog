# My Website (WIP)

My personal website made with Astro and Tiny Rocket template.

## 🚀 Project Structure

Below is an overview.

```bash
/
├── public/
│   ├── assets
│   ├── _leaflet
│   ├── _pagefind
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
│       └── doc.astro
│       └── search.astro
│       └── map.astro
│       └── about.mdx
│       └── privacy.mdx
│       └── rss.xml.ts
│       └── blog/
│           └── [...page].astro
│           └── few_sample_posts.md
└── astro.config.mjs
```

Astro looks for `.astro` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, are placed in the `public/` directory.

## 👀 Want to learn more?

- [Astro documentation](https://github.com/withastro/astro)

- [Tiny Rocket Documentation](https://tinyrocket.pages.dev/doc)
