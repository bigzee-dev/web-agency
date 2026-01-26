"use client";

import { montserrat, merriweather } from "@/app/ui/fonts";
import Image from "next/image";
import { transparentButton } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/contexts/currency-context";

const price = { BWP: "35", USD: "2.50" };

export default function Header() {
  const { currency } = useCurrency();
  const currencySymbol = currency === "USD" ? "$" : "P";

  return (
    <div className="relative w-full bg-rose-700/60">
      <div className="x-padding inset-0 w-full bg-gradient-to-r from-gray-900 via-primary to-slate-600">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-12">
            <div className="col-span-1 pt-16 md:col-span-6 md:py-16">
              {/* Email badge */}
              <div className="inline-block">
                <span className="font-semibold tracking-widest text-neutral-300">
                  EMAIL
                </span>
              </div>
              {/* Main heading */}
              <h1
                className={`${montserrat.className} mt-3 max-w-4xl text-4xl font-semibold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
              >
                Connect with your Clients - Fast, Simple, Secure
              </h1>

              <div className="my-6 space-y-4 text-md">
                <p className="max-w-[90%] font-sans font-normal text-neutral-300">
                  Setup a personalised email address using your domain name, e.g
                  <span className="text-blue-300"> david@mywebsite.com</span>
                </p>
                <p className="max-w-[90%] font-sans font-normal text-neutral-300">
                  A business email address makes a great professional
                  impression. With Deltaworx, you can get a work email address
                  for each team or individual team member e.g{" "}
                  <span className="text-blue-300">sales@mybusiness.com</span>,
                  <span className="text-blue-300"> support@mybusiness.com</span>
                </p>
              </div>

              <div className="mt-5 flex items-end gap-x-5 md:mt-10 md:gap-x-12">
                <Link
                  href="#pricing-plans"
                  className={` ${transparentButton} `}
                >
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
            <div className="relative col-span-1 flex items-center pb-12 pt-0 md:col-span-6 md:py-8">
              {" "}
              <div className="relative rounded-3xl bg-neutral-400/40 px-4 py-3 md:px-12 md:py-6">
                <Image
                  src="/img/emails/emails-filter.png"
                  alt="Logo"
                  width={1000}
                  height={800}
                  className="rounded-3xl object-cover"
                />
                <Badge
                  variant="outline"
                  className="absolute right-2 top-2 border-white/20 bg-gray-800/20 px-3 py-1.5 text-white md:right-4 md:top-4 md:px-4 md:py-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400 md:h-2.5 md:w-2.5"></div>
                    <span>1 New msg</span>
                    <span className="font-semibold text-green-400">INBOX</span>
                  </div>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
