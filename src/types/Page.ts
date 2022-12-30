import type { MDXLayoutProps } from 'astro';

type DefaultProps = {
  title: string;
  description: string;
  footer?: string;
};

type PageProps = DefaultProps | MDXLayoutProps<{
  title: string;
  description: string;
  footer?: string;
}>;

export default PageProps;
