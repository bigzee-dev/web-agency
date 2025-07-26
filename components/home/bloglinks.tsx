import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import articlesData from "./blogcontent.json";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";

interface Article {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
    avatarBg: string;
  };
  publishDate: string;
  readTime: string;
  hasPartnership: boolean;
  partnershipText?: {
    line1: string;
    line2: string;
    line3: string;
  } | null;
}

export default function Component() {
  const articles: Article[] = articlesData;

  return (
    <div className="x-padding">
      <div className="mx-auto w-full max-w-7xl space-y-12 pb-20 pt-16">
        <h2 className={` ${sectionHeadings} `}>Latest Blogs</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-56">
                  <Image
                    src="/img/about-us/coding.jpg"
                    alt="coding"
                    width={1000}
                    height={667}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge
                  variant="secondary"
                  className={`mb-3 ${
                    article.categoryColor === "blue"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {article.category}
                </Badge>
                <h3
                  className={`mb-3 text-xl font-bold leading-tight text-gray-800`}
                >
                  {article.title}
                </h3>
                <p className="mb-4 font-sans text-sm leading-relaxed text-gray-700">
                  {article.description}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={article.author.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback
                      className={`${article.author.avatarBg} text-xs text-white`}
                    >
                      {article.author.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{article.author.name}</p>
                    <p className="text-xs text-gray-500">
                      {article.publishDate} • {article.readTime}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
