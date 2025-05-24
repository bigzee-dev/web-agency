import qs from "qs";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/app/blockrenderclient";

interface DocumentTypes {
  title: string;
  slug: string;
  content: BlocksContent;
}

async function getTermsOfService(slug: string): Promise<DocumentTypes> {
  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });
  const res = await fetch(
    `https://strapi.keizimmy.co.za/api/legal-docs?${ourQuery}`,
    {}
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
  const document = await getTermsOfService("terms-of-service");
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
