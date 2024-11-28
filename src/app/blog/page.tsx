import Link from "next/link"

const posts = [
  {
    title: "Example Blog Post 1",
    date: "June 1, 2023",
    readTime: "5 min read",
    description: "This is a description of the first blog post. It covers topics related to web development and software engineering.",
    slug: "example-post-1"
  },
  {
    title: "Example Blog Post 2",
    date: "June 15, 2023",
    readTime: "8 min read",
    description: "This is a description of the second blog post. It discusses advanced techniques in frontend development.",
    slug: "example-post-2"
  }
]

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-16">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <div className="text-sm text-muted-foreground space-x-2">
              <span>{post.date}</span>
              <span>—</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="block mt-2">
              <h3 className="text-xl font-semibold group-hover:text-primary/80 transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mt-2">
                {post.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}