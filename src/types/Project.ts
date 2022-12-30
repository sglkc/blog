import type { MDXLayoutProps } from 'astro';

type ProjectProps = {
  title: string;
  created: string;
  description: string;
  source: string;
  demo: string;
  stack: Array<string>;
  thumbnail?: string;
};

type MDXProjectProps = MDXLayoutProps<ProjectProps>;

export type { ProjectProps, MDXProjectProps };
