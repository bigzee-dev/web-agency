import qs from "qs";

interface PostTypes {
  title: string;
  subtitle: string;
}

async function fetchpost(slug: string): Promise<PostTypes> {
  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });
  const res = await fetch(
    `http://localhost:1337/api/blog-posts?${ourQuery}`,
    {}
  );
  const data = await res.json();
  console.log(data);
  return {
    title: data.data[0]?.title || "",
    subtitle: data.data[0]?.subtitle || "",
  };
}

export default async function Page({ params }) {
  const post = await fetchpost(params.slug);
  console.log(post);
  return (
    <>
      <p>{post.title}</p>
      <p>{post.subtitle}</p>
    </>
  );
}
