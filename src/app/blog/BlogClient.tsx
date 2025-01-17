"use client";

import { useEffect, useState } from "react";
import { Post } from "@/types/hashnode";
import { fetchHashnodePosts } from "@/utils/hashnode";

interface BlogProps {
  numberOfBlogs?: number;
}

const BlogClient: React.FC<BlogProps> = ({ numberOfBlogs }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const postsData = await fetchHashnodePosts();
      if (numberOfBlogs) {
        setPosts(postsData.slice(0, numberOfBlogs));
      } else {
        setPosts(postsData);
      }
      setError(null);
    } catch {
      setError("Failed to fetch posts from Hashnode API");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getPosts();
    const interval = setInterval(getPosts, 60000);
    return () => clearInterval(interval);
  }, [numberOfBlogs]);

  return (
    <div className="container   ">
      <div className=" mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        
      </div>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      {isLoading && posts.length === 0 && (
        <div className="text-center py-8">
          <div className="animate-pulse">Loading posts...</div>
        </div>
      )}

      <div className="">
        {posts.map((post) => (
          <div 
            key={post.slug} 
            className="group hover:bg-muted py-2  px-1 rounded-md transition-all duration-200"
          >
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

      {posts.length === 0 && !isLoading && (
        <div className="text-center py-8 text-muted-foreground">
          No blog posts found.
        </div>
      )}
    </div>
  );
};

export default BlogClient;