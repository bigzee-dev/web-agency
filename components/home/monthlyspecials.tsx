"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";
import { primaryButton } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

interface Special {
  id: number;
  image: string;
  title: string;
  quote: string;
  features?: string[];
  price: string;
  href: string;
  linkText: string;
}

const specials: Special[] = [
  {
    id: 1,
    image: "/img/tech-laptop.jpg",
    title: "Business Starter Pack",
    quote:
      "Launch your new business quickly with our Business Starter Pack. For one low monthly price, you get everything you need to get started:",
    features: [
      "1-Page Website",
      "Annual Domain Registration",
      "Business Email Account",
      "4-Page Company Profile",
      "Monthly Maintenance & Hosting",
    ],
    price: "P295/month",
    href: "/contact-us",
    linkText: "Get Started",
  },
  {
    id: 2,
    image: "/img/linux-vps/hostiko-hosting-img.png",
    title: "Linux Virtual Machine",
    quote:
      "Get powerful performance and full control over your deployment environment with our Linux VPS. Perfect for growing websites and applications that need more resources and flexibility.",
    features: [
      "2 vCPU, 4GB RAM, 60GB SSD",
      "Full Root Access",
      "Choice of Linux Distributions",
      "Deploy the tech stack you need",
      "Web Apps, Databases, Docker and more",
      "Use as Proxy or VPN",
    ],
    price: "P180/month",
    href: `${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/store/linux-vps/lvps-4`,
    linkText: "Order Now",
  },
];

export default function MonthlySpecials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? specials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === specials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentSpecial = specials[currentIndex];

  return (
    <div className="w-full bg-gradient-to-b from-neutral-200/50 to-transparent">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2
              className={` ${montserrat.className} max-w-6xl text-4xl font-bold leading-tight text-gray-800 md:text-5xl`}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Monthly
              </span>{" "}
              Specials
            </h2>
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={goToPrevious}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-400 bg-gray-700 p-2 text-neutral-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-400 bg-gray-700 p-2 text-neutral-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative h-[350px] overflow-hidden rounded-xl bg-gray-800/25">
              <Image
                src={currentSpecial.image || "/placeholder.svg"}
                alt={currentSpecial.title}
                fill
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/ flex w-full flex-col justify-center space-y-5">
            <h2 className="text-4xl font-bold text-primary">
              {currentSpecial.title}
            </h2>
            <blockquote className="text-xl font-medium italic text-gray-800 md:text-xl">
              {currentSpecial.quote}
            </blockquote>
            {currentSpecial.features && (
              <ul className="grid list-disc grid-cols-2 gap-y-2 pl-5 text-gray-800">
                {currentSpecial.features.map((feature, index) => (
                  <li key={index} className="col-span-1 text-md text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            <div>
              <h3 className="font-sans text-3xl font-bold text-gray-900 md:text-3xl">
                {currentSpecial.price}
              </h3>
            </div>
            <Link href={currentSpecial.href} className={primaryButton}>
              {currentSpecial.linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
