import BlogClient from "./BlogClient";

export const metadata = {
  title: "Aman Raj - Blog🧾",
  description: "Read our latest blog posts from Hashnode",
};

export default function BlogPage() {
  return <BlogClient numberOfBlogs={15} />;
}
