import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import {
  MdOutlineSecurity,
  MdMemory,
  MdMarkEmailRead,
  MdShop,
} from "react-icons/md";
import clsx from "clsx";

const stats = [
  {
    icon: <MdShop className="size-8 text-blue-400" />,
    value: "Business Suite",
    text: "We offer more than standard Webmail. Get integrated email, contacts, calendar, file sharing, online meetings, and more.",
  },
  {
    icon: <MdMarkEmailRead className="size-8 text-blue-400" />,
    value: "Custom Domain Email",
    text: "Boost your brand with domain-matching email addresses. Create personalised emails like you@yourdomain.com to build trust.",
  },
  {
    icon: <MdMemory className="size-8 text-blue-400" />,
    value: "SMTP, POP3, IMAP",
    text: "Supports all major mail protocols compatible with email apps. Connect via SMTP from your website to send login, signup, and other transactional emails",
  },

  {
    icon: <MdOutlineSecurity className="size-8 text-blue-400" />,
    value: "Premium Spam Filtering",
    text: "Keep your inbox safe and clutter-free with our advanced spam filtering. Every plan includes SpamExperts to block spam, viruses, and phishing attempts.",
  },
];

export default function CTA() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-20">
        <div className="relative isolate grid grid-cols-12 overflow-hidden bg-gray-900 pt-16 shadow-2xl md:rounded-3xl md:pt-24 lg:pt-0">
          {/* Blur component for background effect */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-20"
            />
          </div>
          {/* Left Section - Text Content */}
          <div className="col-span-9 lg:mx-0 lg:py-12 lg:pt-12">
            <div className="mx-auto flex max-w-4xl flex-col gap-y-12 px-4 text-center">
              <h2 className="text-balance text-4xl font-semibold text-neutral-300 sm:text-4xl">
                Email Built for Business
                <br />{" "}
                <span className="mt-8 text-neutral-400">Designed for You</span>
              </h2>
              {/* Stats Grid - Desktop (4 columns) */}
              <div className="grid gap-x-4 gap-y-4 md:grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "border border-gray-600/30 bg-slate-800/90 px-8 py-6 text-center shadow-lg",
                      index === 0 && "rounded-l-2xl",
                      index === 1 && "rounded-r-2xl",
                      index === 2 && "rounded-l-2xl",
                      index === 3 && "rounded-r-2xl",
                    )}
                  >
                    <div className="mb-3 flex items-center gap-x-2.5">
                      {stat.icon}
                      <span className="text-lg font-bold text-neutral-300">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-start font-sans text-sm leading-relaxed text-slate-400 lg:text-sm">
                      {stat.text}
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="flex items-center justify-center gap-x-6 lg:justify-center">
                <a
                  href="#"
                  className={` ${btnDimensions} bg-white text-secondary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                >
                  Get Started
                </a>
              </div> */}
            </div>
          </div>
          {/* Right Section - Image */}
          <div className="relative col-span-3 md:block md:h-full">
            <Image
              src="/img/tech-laptop.jpg"
              alt="img"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
