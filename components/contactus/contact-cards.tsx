import type React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
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
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {supportCards.map((card) => (
            <div
              key={card.id}
              className="flex items-start gap-x-4 rounded-xl bg-neutral-200/20 p-6 text-center shadow-md transition-shadow hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 rounded-xl bg-gray-800 p-3">{card.icon}</div>
              <div className="flex flex-col items-start pt-2">
                {/* Title */}
                <h3
                  className={` ${montserrat.className} mb-1 text-lg font-semibold text-gray-800`}
                >
                  {card.title}
                </h3>

                {/* Button: only the 'ticket' and "whatsapp" cards are actual link; others are informational */}
                {card.id === "ticket" || card.id === "whatsapp" ? (
                  <a
                    href={card.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-md text-blue-600"
                  >
                    {card.buttonText} &#8594;
                  </a>
                ) : (
                  <div
                    role="article"
                    aria-disabled="true"
                    className="inline-flex cursor-default items-center bg-transparent font-sans text-gray-500"
                  >
                    {card.buttonText}
                  </div>
                )}

                {/* Description */}
                <p className="flex-grow font-sans text-md text-gray-500">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
