import type { MDXLayoutProps } from 'astro';

interface Page {
  title: string;
  description: string;
  footer?: string;
};

interface PageProps extends MDXLayoutProps<Page> {
  title: string;
  description: string;
  footer?: string;
};

export default PageProps;
