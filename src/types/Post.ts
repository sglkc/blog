import type { MDXLayoutProps } from 'astro';

type Post = {
  url: string,
  title: string,
  description: string,
  created: string,
  tags: string,
};

type PostProps = MDXLayoutProps<{
  title: string;
  description: string;
  created: string;
  tags: Array<string>;
}>;

export type { Post, PostProps };
