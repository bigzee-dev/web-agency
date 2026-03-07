import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  author: string;
  publishedAt: string;
  readlength: string;
}

interface AllBlogPostsProps {
  paginatedBlogs: BlogPost[];
  page: number;
  totalPages: number;
  startIdx: number;
  endIdx: number;
  totalPosts: number;
}

export default function AllBlogPosts({
  paginatedBlogs,
  page,
  totalPages,
  startIdx,
  endIdx,
  totalPosts,
}: AllBlogPostsProps) {
  return (
    <div className="x-padding mx-auto w-full max-w-7xl py-12">
      {/* <h1 className="mb-2 text-4xl font-bold">Blog</h1>
      <p className="mb-8 text-gray-600">
        Insights on web hosting, domains, and digital solutions
      </p> */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedBlogs.map((article: BlogPost) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="block transition-transform hover:scale-105"
          >
            <Card className="overflow-hidden bg-transparent">
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
                <h3 className="mb-2 text-xl font-bold leading-tight text-gray-800">
                  {article.title}
                </h3>
                <p className="mb-3 font-sans text-sm leading-relaxed text-gray-700">
                  {article.subtitle}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-blue-600 text-xs text-white">
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
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          {page > 1 && (
            <Link
              href={`/blog?page=${page - 1}`}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Link>
          )}

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog?page=${pageNum}`}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    pageNum === page
                      ? "bg-primary text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </Link>
              ),
            )}
          </div>

          {page < totalPages && (
            <Link
              href={`/blog?page=${page + 1}`}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}

      {/* Results info */}
      <div className="mt-8 text-center text-sm text-gray-600">
        Showing {startIdx + 1} to {Math.min(endIdx, totalPosts)} of {totalPosts}{" "}
        posts
      </div>
    </div>
  );
}
