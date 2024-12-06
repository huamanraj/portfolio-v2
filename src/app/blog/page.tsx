// src/app/blog/page.tsx
'use client'; 
import { useEffect, useState } from 'react';
import { fetchHashnodePosts, Post } from '../../utils/hashnode';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchHashnodePosts();
        setPosts(postsData);
      } catch (err: any) {
        setError('Failed to fetch posts from Hashnode API');
      }
    };

    getPosts();
  }, []);

  return (
    <div className=''>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-10  ">
        {posts.map((post) => (
          <div key={post.slug} className="group hover:bg-muted p-1 rounded-md">
            
            <a href={`https://huamanraj.hashnode.dev/${post.slug}`} className="block mt-2">
              
              <h3 className="text-xl text-justify font-semibold group-hover:text-primary/80 transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-justify mt-2">{post.brief}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
