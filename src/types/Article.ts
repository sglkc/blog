import type { ProjectProps } from './Project';

type ArticleProps = {
  title: string;
  description: string;
  project?: ProjectProps;
};

export default ArticleProps;
