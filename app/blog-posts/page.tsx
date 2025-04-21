import Link from "next/link";

async function getAllBlogPosts() {
  const res = await fetch("http://localhost:1337/api/blog-posts", {
    cache: "no-store",
  });
  const blogs = await res.json();
  return blogs.data;
}

interface BlogPost {
  id: number;
  Title: string;
  Subtitle: string;
  slug: string;
  image: string;
}

export default async function BlogPosts() {
  const blogs = await getAllBlogPosts();
  console.log(blogs);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="list-disc pl-5">
        {blogs.map((blog: BlogPost) => (
          <li key={blog.id} className="mb-2">
            <Link
              href={`/blog-posts/${blog.slug}`}
              className="text-blue-500 hover:underline"
            >
              {blog.Title}
            </Link>
            <p>{blog.Subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
