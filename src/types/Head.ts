import type { Post } from './Post';
import type { Project } from './Project';

type HeadProps = {
  title: string;
  description: string;
  post?: Post;
  project?: Project;
};

export default HeadProps;
