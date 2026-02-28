import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";

interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  section: string;
  // sectionColor: string;
  author: string;
  // author: {
  //   name: string;
  //   avatar: string;
  //   initials: string;
  //   avatarBg: string;
  // };
  publishedAt: string;
  readlength: string;
}

async function getLatestBlogPosts() {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/blog-posts?populate=image`,
    {},
  );
  const blogs = await res.json();
  console.log(blogs.data);
  return blogs.data;
}

export default async function Component() {
  const allBlogs = await getLatestBlogPosts();
  const articles: BlogPost[] = allBlogs.slice(0, 3);

  return (
    <div className="x-padding">
      <div className="mx-auto w-full max-w-7xl space-y-12 pb-12 pt-16">
        <h2 className={` ${sectionHeadings} `}>Latest Blogs</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="block transition-transform hover:scale-105"
            >
              <Card key={article.id} className="overflow-hidden bg-transparent">
                <CardHeader className="p-0">
                  <div className="relative h-52">
                    <Image
                      src={
                        article.image?.url
                          ? `https://strapi.bigzee.app${article.image.url}`
                          : "/img/about-us/coding.jpg"
                      }
                      alt={article.title}
                      width={article.image?.width || 1000}
                      height={article.image?.height || 667}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-4">
                  <Badge
                    variant="secondary"
                    className={`mb-3 ${
                      article.section === "Products"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {article.section}
                  </Badge>
                  <h3
                    className={`mb-2 text-xl font-bold leading-tight text-gray-800`}
                  >
                    {article.title}
                  </h3>
                  <p className="mb-3 font-sans text-sm leading-relaxed text-gray-700">
                    {article.subtitle}
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback
                        className={`bg-blue-600 text-xs text-white`}
                      >
                        {article.author.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{article.author}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString(
                          "en-GB",
                          { day: "numeric", month: "short", year: "numeric" },
                        )}{" "}
                        • {article.readlength} read
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* <Card className="h-full overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-56">
                    <Image
                      src={
                        article.image?.url
                          ? `https://strapi.bigzee.app${article.image.url}`
                          : "/img/about-us/coding.jpg"
                      }
                      alt={article.title}
                      width={article.image?.width || 1000}
                      height={article.image?.height || 667}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold leading-tight text-gray-800">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-gray-700">
                    {article.subtitle}
                  </p>
                </CardContent>
              </Card> */}
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            href="/blog-posts"
            className="group flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            View all posts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
