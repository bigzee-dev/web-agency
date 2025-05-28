import { Users, Server, Globe, type LucideIcon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { notoSans } from "@/app/ui/fonts";

// Define the type for our card data
type CardLink = {
  text: string;
  href: string;
};

type CardData = {
  icon: LucideIcon;
  iconColor: string;
  backgroundColor: string;
  title: string;
  description: string;
  links: CardLink[];
};

export default function Home() {
  // Array of card data
  const cards: CardData[] = [
    {
      icon: Globe,
      iconColor: "text-blue-400",
      backgroundColor: "bg-blue-400/10",
      title: "Web Development",
      description:
        "Whether you need a Website or a full-featured Web Application, our team has the skills and experience to build it from the ground up—tailored exactly to your needs.",
      links: [
        { text: "Websites", href: "#" },
        { text: "Web Apps", href: "#" },
        { text: "Ecommerce", href: "#" },
      ],
    },
    {
      icon: Server,
      iconColor: "text-purple-400",
      backgroundColor: "bg-purple-400/10",
      title: "Robust Backend & Security",
      description:
        "Once deployed, your application is protected using industry best practices. Our robust backend keeps it reliable, secure, and always available to users.",
      links: [
        { text: "Managed Hosting", href: "#" },
        { text: "Server Management", href: "#" },
      ],
    },
    {
      icon: Users,
      iconColor: "text-cyan-400",
      backgroundColor: "bg-cyan-400/10",
      title: "Marketing Integration",
      description:
        "We know effective marketing is key to business success. That's why every project we deliver includes built-in social media integration. We also offer reliable email solutions to keep you connected with clients.",
      links: [{ text: "Emails", href: "#" }],
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index}
          className={clsx(
            "col-span-1 py-9 px-16",
            index === 1 && "border-r border-gray-500/50",
            index === 2 && "bg-neutral-300/10",
            (index === 1 || index === 2) && "md:border-t border-gray-500/50"
          )}
        >
          <div className="flex flex-col gap-y-4 h-full">
            <div className="flex items-center gap-x-2">
              <div
                className={` ${card.backgroundColor} inline-flex items-center justify-center p-2 rounded-lg `}
              >
                <card.icon className={`h-6 w-6 ${card.iconColor} `} />
              </div>
              <h2
                className={` ${notoSans.className} text-xl font-medium text-neutral-300 `}
              >
                {card.title}
              </h2>
            </div>

            <p className="font-sans text-md text-neutral-300/80">
              {card.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {card.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="font-sans inline-flex px-4 py-1.5 bg-gray-700/50 text-blue-400 border border-gray-600 rounded-md hover:bg-gray-700 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
