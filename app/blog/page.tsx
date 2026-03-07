import type { Metadata } from "next";
import BlogHeader from "@/components/blog/header";
import AllBlogPosts from "@/components/blog/AllBlogPosts";

export const metadata: Metadata = {
  title: "Blog - Tech Insights & Industry News | Deltaworx",
  description:
    "Stay updated with Deltaworx's blog. Read about cloud computing, web development, hosting tips, and IT trends in Botswana. Expert insights and technical guides.",
};

export const revalidate = 3600; // ISR: Revalidate every hour

async function getAllBlogPosts() {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/blog-posts?populate=image`,
    { next: { revalidate: 3600 } }, // Cache for 1 hour
  );
  const blogs = await res.json();
  return blogs.data;
}

const POSTS_PER_PAGE = 9;

export default async function BlogPosts({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);

  const allBlogs = await getAllBlogPosts();
  const totalPosts = allBlogs.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  // Validate page number
  const page = Math.max(1, Math.min(currentPage, totalPages || 1));

  const startIdx = (page - 1) * POSTS_PER_PAGE;
  const endIdx = startIdx + POSTS_PER_PAGE;
  const paginatedBlogs = allBlogs.slice(startIdx, endIdx);

  return (
    <>
      <BlogHeader />
      <AllBlogPosts
        paginatedBlogs={paginatedBlogs}
        page={page}
        totalPages={totalPages}
        startIdx={startIdx}
        endIdx={endIdx}
        totalPosts={totalPosts}
      />
    </>
  );
}
