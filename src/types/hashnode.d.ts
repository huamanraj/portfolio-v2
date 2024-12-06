// types/hashnode.d.ts
export interface Post {
    title: string;
    brief: string;
    slug: string;
    dateAdded: string;
  }
  
  export interface HashnodeResponse {
    data: {
      publication: {
        posts: {
          edges: {
            node: Post;
          }[];
        };
      };
    };
  }
  