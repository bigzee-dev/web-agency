import type React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { montserrat } from "@/app/ui/fonts";
import { primaryButton } from "@/app/ui/customTailwindClasses";

interface SupportCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const iconStyles = "h-6 w-6 text-white";

const supportCards: SupportCard[] = [
  {
    id: "call",
    icon: <FaPhone className={iconStyles} />,
    title: "Call Us",
    description: "We are standing by!",
    buttonText: "+267 72537524",
    buttonLink: "#",
  },
  {
    id: "Email",
    icon: <MdEmail className={iconStyles} />,
    title: "Email",
    description: "Get a quick response",
    buttonText: "admin@deltaworx.co.bw",
    buttonLink: "#",
  },
  {
    id: "ticket",
    icon: <FaTicket className={iconStyles} />,
    title: "Submit A Ticket",
    description: "Get dedicated support",
    buttonText: "Submit Ticket",
    buttonLink: `${process.env.WHMCS_URL}/submitticket.php`,
  },
  {
    id: "whatsapp",
    icon: <IoLogoWhatsapp className={iconStyles} />,
    title: "Whatsapp",
    description: "Chat with support now",
    buttonText: "+267 72537524",
    buttonLink: "https://wa.me/26772537524",
  },
];

export default function ContactCards() {
  return (
    <main className="bg-background px-4 py-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {supportCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center rounded-3xl border border-border bg-neutral-200/30 p-6 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 rounded-2xl bg-gray-800 p-3">
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className={` ${montserrat.className} mb-2 text-lg font-bold text-gray-800`}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p className="mb-6 flex-grow font-sans text-md text-gray-600">
                {card.description}
              </p>

              {/* Button: only the 'ticket' and "whatsapp" cards are actual link; others are informational */}
              {card.id === "ticket" || card.id === "whatsapp" ? (
                <a
                  href={card.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryButton}
                >
                  {card.buttonText}
                </a>
              ) : (
                <div
                  role="article"
                  aria-disabled="true"
                  className="inline-flex cursor-default items-center gap-2 rounded-[0.60rem] bg-transparent px-4 py-2.5 font-sans text-md font-medium text-gray-800"
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
