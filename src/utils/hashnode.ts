import { HashnodeResponse, Post } from "@/types/hashnode";

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
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts from Hashnode API");
  }

  const data: HashnodeResponse = await response.json();
  return data.data.publication.posts.edges.map((edge: { node: Post }) => ({
    title: edge.node.title,
    brief: edge.node.brief,
    slug: edge.node.slug,
  }));
}
