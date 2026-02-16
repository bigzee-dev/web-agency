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
      <div className="mx-auto w-full max-w-7xl space-y-12 pb-20 pt-16">
        <h2 className={` ${sectionHeadings} `}>Latest Blogs</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog-posts/${article.slug}`}
              className="block transition-transform hover:scale-105"
            >
              <Card className="h-full overflow-hidden">
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
              </Card>
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
