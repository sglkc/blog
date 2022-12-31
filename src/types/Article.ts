import type { MDXLayoutProps } from 'astro';
import type { Post } from './Post';
import type { Project } from './Project';

type ArticleProps = {
  title: string;
  description: string;
  post?: Post;
  project?: Project;
  headings: MDXLayoutProps<{}>['headings'];
};

export default ArticleProps;
