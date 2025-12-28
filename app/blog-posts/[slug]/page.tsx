import qs from "qs";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/app/blockrenderclient";
import Image from "next/image";

export const runtime = "nodejs";

interface PostTypes {
  title: string;
  subtitle: string;
  image?: string;
  content: BlocksContent;
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
    <div className="mx-auto mb-16 max-w-3xl">
      <Image
        src={`${process.env.STRAPI_API_URL}/${post.image}`}
        alt={post.title}
        width={811}
        height={540}
        className="mb-4 w-full object-cover"
      />
      <p>{post.title}</p>
      <p>{post.subtitle}</p>
      <BlockRendererClient content={content} />
    </div>
  );
}
