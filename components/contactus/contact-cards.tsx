import type React from "react";
import { Ticket, MessageCircle, Phone } from "lucide-react";
import { IoIosCall, IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { montserrat } from "@/app/ui/fonts";

interface SupportCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const iconStyles = "h-8 w-8 text-primary";

const supportCards: SupportCard[] = [
  {
    id: "call",
    icon: <IoIosCall className={iconStyles} />,
    title: "Call Us",
    description: "We are standing by!",
    buttonText: "+267 77810825",
    buttonLink: "#",
  },
  {
    id: "Email",
    icon: <MdEmail className={iconStyles} />,
    title: "Email",
    description: "Get a quick response",
    buttonText: "support@deltaworx.co.bw",
    buttonLink: "#",
  },
  {
    id: "ticket",
    icon: <FaTicket className={iconStyles} />,
    title: "Submit A Ticket",
    description: "Get dedicated support",
    buttonText: "Submit Ticket",
    buttonLink: "#",
  },
  {
    id: "whattsapp",
    icon: <IoLogoWhatsapp className={iconStyles} />,
    title: "Whatsapp",
    description: "Chat with support now",
    buttonText: "+267 77810825",
    buttonLink: "#",
  },
];

export default function ContactCards() {
  return (
    <main className="bg-background px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {supportCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4">{card.icon}</div>

              {/* Title */}
              <h3
                className={` ${montserrat.className} mb-2 text-xl font-semibold text-gray-800`}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p className="mb-6 flex-grow text-sm text-muted-foreground">
                {card.description}
              </p>

              {/* Button: only the 'ticket' card is an actual link; others are informational */}
              {card.id === "ticket" ? (
                <a
                  href={card.buttonLink}
                  className="hover:pointer inline-flex items-center gap-2 rounded border bg-primary px-4 py-2 text-sm font-medium text-white transition-colors"
                >
                  {card.buttonText}
                  <span className="ml-2" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              ) : (
                <div
                  role="article"
                  aria-disabled="true"
                  className="inline-flex cursor-default items-center gap-2 rounded border border-primary bg-transparent px-4 py-2 text-sm font-medium text-secondary"
                >
                  {card.buttonText}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
