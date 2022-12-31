import type { MDXLayoutProps } from 'astro';

type Page = {
  title: string;
  description: string;
  footer?: string;
};

type PageProps = MDXLayoutProps<Page> | {
  title: string;
  description: string;
  footer?: string;
};

export default PageProps;
