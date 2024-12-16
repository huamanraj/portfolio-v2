import { HashnodeResponse } from "@/types/hashnode";

// src/utils/hashnode.ts
export interface Post {
    title: string;
    brief: string;
    slug: string;
    
  }
  
  export async function fetchHashnodePosts(): Promise<Post[]> {
    const query = `
      query {
        publication(host: "huamanraj.hashnode.dev") {
          posts(first: 20) {
            edges {
              node {
                title
                brief
                slug
                
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts from Hashnode API");
    }

    const data: HashnodeResponse = await response.json(); // Use your defined interface
    return data.data.publication.posts.edges.map((edge: { node: Post }) => ({
      title: edge.node.title,
      brief: edge.node.brief,
      slug: edge.node.slug,
    }));
  }
  