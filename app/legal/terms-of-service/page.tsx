import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/app/blockrenderclient";

async function getTermsOfService() {
  /*http://localhost:1337/api/legal-docs*/
  const res = await fetch("https://strapi.keizimmy.co.za/api/legal-docs", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function TermsOfService() {
  const { data } = await getTermsOfService();
  console.log(data);
  const content: BlocksContent = data[2].content;

  console.log(content);
  return (
    <div>
      {/* <h1>{data[0].title}</h1> */}
      <BlockRendererClient content={content} />
    </div>
  );
}
