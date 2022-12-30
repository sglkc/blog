import type { MDXLayoutProps } from 'astro';

type Project = {
  title: string;
  created: string;
  description: string;
  source: string;
  demo: string;
  stack: Array<string>;
  thumbnail?: string;
};

type ProjectProps = MDXLayoutProps<Project>;

export type { Project, ProjectProps };
