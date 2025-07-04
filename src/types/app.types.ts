export interface Project {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  image?: string;
}

export interface Post {
  post_id: number;
  post_slug: string;
  post_title: string;
  post_content: string;
  post_date: string;
  post_category: string;
  post_tags: string[];
  post_status?: string;
  post_excerpt?: string;
}
