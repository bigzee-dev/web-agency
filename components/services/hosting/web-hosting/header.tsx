"use client";

import { merriweather, montserrat } from "@/app/ui/fonts";
import { MdOutlineDashboard } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
import Image from "next/image";
import { greenButton } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import { useCurrency } from "@/contexts/currency-context";

const iconProps = {
  size: "1.3em",
};

const price = { BWP: "60", USD: "4.25" };

const offers = [
  {
    icon: <MdOutlineDashboard {...iconProps} />,
    title: "Control Panel",
    description: "Industry Standard Cpanel",
    color: "text-rose-400",
  },
  {
    icon: <FaServer {...iconProps} />,
    title: "Servers",
    description: "High Performance NVMe",
    color: "text-yellow-400",
  },
  {
    icon: <BsLightningChargeFill {...iconProps} />,
    title: "Cache",
    description: "Fast, Responsive Sites",
    color: "text-yellow-400",
  },
  {
    icon: <IoShieldCheckmarkSharp {...iconProps} />,
    title: "Guarantee",
    description: "99.9% Uptime",
    color: "text-thatgreen",
  },
];

export default function Header() {
  const { currency } = useCurrency();
  const currencySymbol = currency === "USD" ? "$" : "P";

  return (
    <div className="x-padding relative w-full overflow-hidden bg-gradient-to-tr from-gray-800 to-secondary">
      {/* SVG background — same design language as blog header */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="hosting-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#33bff2"
              fillOpacity="0.12"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hosting-dots)" />

        {/* Large background circles — right side, behind image */}
        <circle cx="78%" cy="50%" r="340" fill="#005878" fillOpacity="0.30" />
        <circle cx="78%" cy="50%" r="230" fill="#005878" fillOpacity="0.28" />
        <circle cx="78%" cy="50%" r="130" fill="#33bff2" fillOpacity="0.05" />

        {/* Diagonal accent lines */}
        <line
          x1="38%"
          y1="0"
          x2="58%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.07"
        />
        <line
          x1="48%"
          y1="0"
          x2="68%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.05"
        />
        <line
          x1="28%"
          y1="0"
          x2="48%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.05"
        />

        {/* Decorative polygon — bottom right */}
        <polygon
          points="92%,75% 95%,68% 98%,75% 95%,82%"
          fill="none"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

        {/* Floating accent dots */}
        {/* <circle cx="20%" cy="82%" r="4" fill="#33bff2" fillOpacity="0.25" />
        <circle cx="72%" cy="18%" r="3" fill="#33bff2" fillOpacity="0.3" />
        <circle cx="58%" cy="88%" r="5" fill="#005878" fillOpacity="0.6" />
        <circle cx="14%" cy="42%" r="2.5" fill="#33bff2" fillOpacity="0.2" />
        <circle cx="88%" cy="88%" r="6" fill="#33bff2" fillOpacity="0.08" />
        <circle cx="3%" cy="65%" r="3" fill="#33bff2" fillOpacity="0.15" /> */}

        {/* Horizontal rule lines */}
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.15"
        />
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.1"
        />
      </svg>

      {/* Left-edge vertical accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#33bff2]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-8 md:gap-x-8 md:py-16">
        {/* LEFT — text content */}
        <div className="flex flex-col">
          {/* badge */}
          <div className="inline-block">
            <span className="font-semibold uppercase tracking-widest text-neutral-300">
              Web Hosting
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={` ${montserrat.className} mt-3 max-w-4xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
          >
            Top quality Web Hosting plans
          </h1>

          {/* Feature grid */}
          <div className="mt-8 grid grid-cols-2 gap-x-2 gap-y-5">
            {offers.map((offer) => (
              <div key={offer.title} className="flex flex-col gap-1.5">
                <h6 className="flex items-center gap-2.5 text-sm font-semibold text-neutral-200">
                  <div className="flex-shrink-0 rounded-lg bg-[#33bff2]/15 p-2 text-[#33bff2] ring-1 ring-[#33bff2]/20">
                    {offer.icon}
                  </div>
                  {offer.title}
                </h6>
                <p className="pl-0.5 text-xs leading-relaxed text-neutral-400">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="#pricing-plans" className={greenButton}>
              Compare Plans
            </Link>

            <div className="flex flex-col items-start">
              <span className="mb-0.5 text-xs text-neutral-400">
                Starting from
              </span>
              <span className="text-4xl font-semibold text-neutral-300">
                <span
                  className={` ${merriweather.className} mr-[0.1rem] text-[2.15rem]`}
                >
                  {currencySymbol}
                </span>
                {price[currency]}
                <span className="text-lg font-medium text-neutral-400">
                  /month
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="flex items-center justify-center md:justify-end">
          <div className="relative w-full max-w-[30rem] md:max-w-none">
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-2xl bg-[#33bff2]/10 blur-xl" />
            {/* Image frame */}
            <div className="relative overflow-hidden">
              <Image
                src="/img/hosting/young-businessmen.png"
                alt="Young businessmen working on web projects"
                width={1400}
                height={1000}
                className="w-full object-cover"
                priority
              />
              {/* Subtle inner overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f3551]/30 via-transparent to-transparent" />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-[#33bff2]/30" />
            <div className="absolute -left-2 -top-2 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-[#33bff2]/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
