"use client";

import { useEffect, useState } from "react";
import { fetchHashnodePosts, Post } from "../../utils/hashnode";

interface BlogProps {
  numberOfBlogs?: number;
}

export default function BlogClient({ numberOfBlogs }: BlogProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchHashnodePosts();
        if (numberOfBlogs) {
          setPosts(postsData.slice(0, numberOfBlogs));
        } else {
          setPosts(postsData);
        }
      } catch  {
        setError("Failed to fetch posts from Hashnode API ");
      }
    };

    getPosts();
  }, [numberOfBlogs]);

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-10">
        {posts.map((post) => (
          <div key={post.slug} className="group hover:bg-muted p-1 rounded-md">
            <a
              href={`https://huamanraj.hashnode.dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2"
            >
              <h3 className="text-xl text-justify font-semibold group-hover:text-primary/80 transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-justify mt-2">
                {post.brief}
              </p>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center"></div>
    </div>
  );
}