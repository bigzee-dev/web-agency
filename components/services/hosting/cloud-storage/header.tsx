"use client";

import { montserrat } from "@/app/ui/fonts";
import { HiCloud } from "react-icons/hi2";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Image from "next/image";
import { greenButton } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import { useCurrency } from "@/contexts/currency-context";

const iconProps = {
  size: "1.2em",
};

const price = { BWP: "60", USD: "4.50" };

const features = [
  {
    icon: <HiCloud {...iconProps} />,
    title: "Cloud Storage",
    description: "Up to 1TB capacity",
    color: "text-blue-300",
  },
  {
    icon: <MdDevices {...iconProps} />,
    title: "Multi-Device",
    description: "Phone, Tablet, Laptop",
    color: "text-purple-400",
  },
  {
    icon: <IoShieldCheckmarkSharp {...iconProps} />,
    title: "Secure",
    description: "Encrypted transfers",
    color: "text-green-400",
  },
  {
    icon: <FaLock {...iconProps} />,
    title: "Private",
    description: "Your data, your control",
    color: "text-orange-400",
  },
];

export default function Header() {
  const { currency } = useCurrency();
  const currencySymbol = currency === "USD" ? "$" : "P";

  return (
    <div className="x-padding relative w-full overflow-hidden bg-gradient-to-tr from-gray-800 to-secondary">
      {/* SVG background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="cloud-dots"
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
        <rect width="100%" height="100%" fill="url(#cloud-dots)" />

        {/* Large background circles — anchored top-right for cloud/sky feel */}
        <circle cx="82%" cy="20%" r="300" fill="#005878" fillOpacity="0.28" />
        <circle cx="82%" cy="20%" r="200" fill="#005878" fillOpacity="0.22" />
        <circle cx="82%" cy="20%" r="100" fill="#33bff2" fillOpacity="0.05" />

        {/* Secondary cluster — bottom left */}
        <circle cx="5%" cy="90%" r="180" fill="#005878" fillOpacity="0.18" />
        <circle cx="5%" cy="90%" r="100" fill="#005878" fillOpacity="0.12" />

        {/* Diagonal accent lines */}
        <div className="hidden md:block">
          <line
            x1="35%"
            y1="0"
            x2="55%"
            y2="100%"
            stroke="#33bff2"
            strokeWidth="1"
            strokeOpacity="0.07"
          />
          <line
            x1="45%"
            y1="0"
            x2="65%"
            y2="100%"
            stroke="#33bff2"
            strokeWidth="1"
            strokeOpacity="0.05"
          />
          <line
            x1="55%"
            y1="0"
            x2="75%"
            y2="100%"
            stroke="#33bff2"
            strokeWidth="1"
            strokeOpacity="0.04"
          />
        </div>

        {/* Decorative polygon — bottom right */}
        <polygon
          points="91%,78% 94%,71% 97%,78% 94%,85%"
          fill="none"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.18"
        />

        {/* Floating accent dots */}
        <circle cx="25%" cy="15%" r="3" fill="#33bff2" fillOpacity="0.28" />
        <circle cx="68%" cy="78%" r="4" fill="#33bff2" fillOpacity="0.20" />
        <circle cx="50%" cy="92%" r="5" fill="#005878" fillOpacity="0.55" />
        <circle cx="18%" cy="70%" r="2.5" fill="#33bff2" fillOpacity="0.18" />
        <circle cx="90%" cy="55%" r="3" fill="#33bff2" fillOpacity="0.14" />

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
          strokeOpacity="0.10"
        />
      </svg>

      {/* Left-edge vertical accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#33bff2]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-x-14 gap-y-12 pb-12 pt-16 md:grid-cols-12 md:py-16">
        <div className="col-span-1 px-2 md:col-span-6 md:px-0">
          {/* badge */}
          <div className="inline-block">
            <span className="font-semibold uppercase tracking-widest text-neutral-300">
              Cloud Storage
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`${montserrat.className} mt-3 max-w-4xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
          >
            No1 Rule: Always Backup Your Data
          </h1>

          {/* Feature grid */}
          <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-1.5 rounded-xl border border-white/[0.08] bg-white/5 p-3.5 backdrop-blur-sm"
              >
                <h6 className="flex items-center gap-2.5 text-sm font-semibold text-neutral-200">
                  <div className="flex-shrink-0 rounded-lg bg-[#33bff2]/15 p-2 text-[#33bff2] ring-1 ring-[#33bff2]/20">
                    {feature.icon}
                  </div>
                  <span className="text-neutral-300">{feature.title}</span>
                </h6>
                <p className="pl-0.5 text-xs leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-end justify-center gap-x-5 gap-y-6 md:justify-start md:gap-x-12">
            <Link href="#pricing-plans" className={greenButton}>
              Compare Plans
            </Link>
            <div className="flex flex-col items-start">
              <span className="mb-0.5 text-xs text-neutral-400">
                Starting from
              </span>
              <span className="text-4xl font-semibold text-neutral-300">
                <span className={`mr-[0.1rem]`}>{currencySymbol}</span>
                {price[currency]}
                <span className="text-lg font-medium text-neutral-400">
                  /month
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="col-span-1 flex items-center justify-center md:col-span-6">
          <div className="relative w-full">
            {/* Outer glow */}
            <div className="absolute -inset-3 rounded-2xl bg-[#33bff2]/10 blur-xl" />

            {/* Image frame */}
            <div className="relative h-96 w-full rounded-2xl border border-[#33bff2]/20 shadow-2xl shadow-black/50 md:h-[28rem]">
              <Image
                src="/img/cloudstorage/150857.jpg"
                alt="Cloud Storage"
                fill
                className="rounded-2xl object-cover"
              />
              {/* Depth overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f3551]/30 via-transparent to-transparent" />

              {/* Floating 1TB badge */}
              <div className="absolute -bottom-5 right-8 rounded-xl bg-gradient-to-br from-yellow-500 to-sky-700 px-6 py-4 shadow-xl md:-right-8">
                <div className="text-sm text-neutral-200">Up to</div>
                <div className="text-3xl font-bold text-white">1TB</div>
                <div className="text-sm text-neutral-200">Storage</div>
              </div>
            </div>

            {/* Decorative corner brackets */}
            <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-[#33bff2]/30" />
            <div className="absolute -left-2 -top-2 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-[#33bff2]/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
