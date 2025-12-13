import Link from "next/link";

async function getAllBlogPosts() {
  const res = await fetch(` ${process.env.STRAPI_API_URL}/api/blog-posts`, {});
  const blogs = await res.json();
  return blogs.data;
}

interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  image: string;
}

export default async function BlogPosts() {
  const blogs = await getAllBlogPosts();
  console.log(blogs);
  return (
    <div className="x-padding mx-auto max-w-7xl py-12">
      <h1 className="mb-4 text-3xl font-bold">Blog Posts</h1>
      <ul className="list-disc pl-5">
        {blogs.map((blog: BlogPost) => (
          <li key={blog.id} className="mb-2">
            <Link
              href={`/blog-posts/${blog.slug}`}
              className="text-blue-500 hover:underline"
            >
              {blog.title}
            </Link>
            <p>{blog.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
