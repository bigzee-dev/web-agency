import qs from "qs";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/app/blockrenderclient";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Privacy Policy | Deltaworx",
  description:
    "Read Deltaworx's privacy policy. Learn how we collect, use, and protect your personal information when you use our IT services and solutions.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "GDPR compliance",
  ],
};

interface DocumentTypes {
  title: string;
  slug: string;
  content: BlocksContent;
}

async function getDocument(slug: string): Promise<DocumentTypes> {
  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/legal-docs?${ourQuery}`,
    {},
  );
  const data = await res.json();
  console.log(data);
  return {
    title: data.data[0]?.title || "",
    slug: data.data[0]?.slug || "",
    content: data.data[0].content,
  };
}

export default async function TermsOfService() {
  const document = await getDocument("privacy-policy");
  console.log(document);
  const content: BlocksContent = document.content;

  console.log(content);
  return (
    <div>
      {/* <h1>{data[0].title}</h1> */}
      <BlockRendererClient content={content} />
    </div>
  );
}
