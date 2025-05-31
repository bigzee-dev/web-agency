import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import articlesData from "./blogcontent.json";
import { montserrat, notoSans } from "@/app/ui/fonts";
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
      <div className="w-full max-w-7xl mx-auto pt-8 pb-20 space-y-12">
        <h2 className={` ${sectionHeadings} `}>Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-56">
                  <Image
                    src="/img/about-us/coding.jpg"
                    alt="coding"
                    width={1000}
                    height={667}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge
                  variant="secondary"
                  className={`mb-3 ${
                    article.categoryColor === "blue"
                      ? "text-blue-600 bg-blue-50"
                      : "text-green-600 bg-green-50"
                  }`}
                >
                  {article.category}
                </Badge>
                <h3
                  className={` ${montserrat.className} text-gray-800 text-xl font-bold mb-3 leading-tight `}
                >
                  {article.title}
                </h3>
                <p className="font-sans text-gray-700 mb-4 text-sm leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={article.author.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback
                      className={`${article.author.avatarBg} text-white text-xs`}
                    >
                      {article.author.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{article.author.name}</p>
                    <p className="text-gray-500 text-xs">
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
