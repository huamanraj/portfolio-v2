export interface HashnodeResponse {
  data: {
    publication: {
      posts: {
        edges: Array<{
          node: Post;
        }>;
      };
    };
  };
}

export interface Post {
  title: string;
  brief: string;
  slug: string;
}
