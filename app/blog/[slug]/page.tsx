import qs from "qs";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/app/blockrenderclient";
import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { User, CalendarDays, Clock } from "lucide-react";

interface PostTypes {
  title: string;
  subtitle: string;
  image?: string;
  author: string;
  publishedAt: string;
  readlength: string;
  slug: string;
  content: BlocksContent;
}

export const revalidate = false;
export const dynamicParams = true; // allow new slugs/routes

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/blog-posts`);
    if (!res.ok) return [];
    const json = await res.json();
    return (json.data || []).map((post: PostTypes) => ({
      slug: post.slug,
    }));
  } catch (e) {
    console.warn("generateStaticParams failed", e);
    return [];
  }
}

async function fetchpost(slug: string): Promise<PostTypes> {
  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
    populate: "*",
  });
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/blog-posts?${ourQuery}`,
    {},
  );
  const data = await res.json();
  console.log(data.data[0].image.url);
  return {
    title: data.data[0]?.title || "",
    subtitle: data.data[0]?.subtitle || "",
    image: data.data[0].image.url,
    content: data.data[0].content,
    author: data.data[0].author,
    publishedAt: data.data[0].publishedAt,
    readlength: data.data[0].readlength,
    slug: data.data[0].slug,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Await params here
  const post = await fetchpost(slug);
  const content: BlocksContent = post.content;
  console.log(post);
  return (
    <div className="x-padding mx-auto mb-16 max-w-3xl pb-10">
      <Image
        src={`${process.env.STRAPI_API_URL}${post.image}`}
        alt={post.title}
        width={811}
        height={540}
        className="mb-4 w-full object-cover"
      />
      <Breadcrumb className="mt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1
        className={` ${montserrat.className} mb-6 mt-6 text-4xl font-bold text-gray-800 md:text-5xl`}
      >
        {post.title}
      </h1>
      <div className="mb-8 flex w-full justify-between border-b border-t border-gray-400 py-1">
        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <User size={14} />
          {post.author}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <CalendarDays size={14} />
          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <Clock size={14} />
          {post.readlength} read
        </span>
      </div>

      <BlockRendererClient content={content} />
    </div>
  );
}
