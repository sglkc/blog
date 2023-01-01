import type { MDXLayoutProps } from 'astro';

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

type Post = {
  draft?: true;
  title: string;
  description: string;
  thumbnail?: string;
  language: 'en' | 'id';
  created: string;
  updated?: string;
  tags: Array<string>;
};

type ExtractedPost = Overwrite<Post, { tags: string; }> & {
  url: string;
};

type PostProps = MDXLayoutProps<Post>;

export type { ExtractedPost, Post, PostProps };
