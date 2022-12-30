import type { MDXLayoutProps } from 'astro';

type ExtractedPost = {
  url: string,
  title: string,
  description: string,
  created: string,
  tags: string,
};

type Post = {
  title: string,
  created: string,
  description: string,
  updated: string,
  tags: Array<string>,
  hero?: string,
  alt?: string
};

type PostProps = MDXLayoutProps<Post>;

export type { ExtractedPost, Post, PostProps };
