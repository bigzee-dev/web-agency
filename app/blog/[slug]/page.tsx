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
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/shared/json-ld";

interface PostTypes {
  title: string;
  subtitle: string;
  image?: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readlength: string;
  slug: string;
  content: BlocksContent;
}

function postImageUrl(post: PostTypes) {
  return post.image ? `${process.env.STRAPI_API_URL}${post.image}` : undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchpost(slug);
  const imageUrl = postImageUrl(post);

  return {
    title: post.title,
    description: post.subtitle,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.subtitle,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.author ? [post.author] : undefined,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
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
  // Strapi errors should surface as a 500, not be hidden as a 404
  if (!res.ok) {
    throw new Error(`Failed to fetch blog post "${slug}": ${res.status}`);
  }
  const data = await res.json();
  const post = data.data?.[0];
  if (!post) notFound();

  return {
    title: post.title || "",
    subtitle: post.subtitle || "",
    image: post.image?.url,
    content: post.content,
    author: post.author,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readlength: post.readlength,
    slug: post.slug,
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
  const postUrl = `https://deltaworx.co.bw/blog/${post.slug}`;
  const postSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.subtitle,
        image: postImageUrl(post),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: { "@type": "Person", name: post.author },
        publisher: { "@id": "https://deltaworx.co.bw/#organization" },
        mainEntityOfPage: postUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://deltaworx.co.bw/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://deltaworx.co.bw/blog",
          },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };
  return (
    <div className="x-padding mx-auto mb-16 max-w-3xl pb-10">
      <JsonLd data={postSchema} />
      {post.image && (
        <Image
          src={`${process.env.STRAPI_API_URL}${post.image}`}
          alt={post.title}
          width={811}
          height={540}
          className="mb-4 w-full object-cover"
        />
      )}
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
