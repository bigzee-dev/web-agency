"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Montserrat } from "next/font/google";
import { montserrat } from "@/app/ui/fonts";

const tiers = [
  {
    id: "basic",
    name: "Basic Plan",
    priceMonthly: "P9.99",
    priceYearly: "P99.99",
    description: "Perfect for small projects and personal websites.",
    features: [
      "1 Website",
      "1 GB Storage",
      "10 GB Bandwidth",
      "Free SSL Certificate",
      "3 Email Accounts",
      "24/7/365 Support",
      "Cpanel Included",
    ],
    href: "#",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro Plan",
    priceMonthly: "P19.99",
    priceYearly: "P199.99",
    description: "Ideal for growing businesses and professional websites.",
    features: [
      "2 Websites",
      "5 GB Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "5 Email Accounts",
      "Cpanel Included",
      "24/7/365 Support",
    ],
    href: "#",
    featured: true,
  },
  {
    id: "basic",
    name: "Basic Plan",
    priceMonthly: "P9.99",
    priceYearly: "P99.99",
    description: "Perfect for small projects and personal websites.",
    features: [
      "1 Website",
      "1 GB Storage",
      "10 GB Bandwidth",
      "Free SSL Certificate",
      "3 Email Accounts",
      "24/7/365 Support",
      "Cpanel Included",
    ],
    href: "#",
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HostingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="relative isolate mx-auto max-w-7xl px-4 py-16">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[rgb(37,192,235)] to-[#89b9fc] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Pricing
        </h2>
        <p
          className={` ${montserrat.className} mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl `}
        >
          Choose the right plan for you
        </p>
      </div>

      <div className="mt-16 flex justify-center items-center gap-3">
        <div className="relative flex items-center justify-center space-x-4">
          <Label
            htmlFor="billing-toggle"
            className="text-sm font-medium text-gray-700"
          >
            Monthly
          </Label>
          <Switch
            id="billing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label
            htmlFor="billing-toggle"
            className="text-sm font-medium text-gray-700"
          >
            Yearly
          </Label>
          <div className="absolute -top-0.5 -right-5 transform translate-x-full">
            <p className="text-pink-700 text-base font-semibold">Save 20%</p>
          </div>
          <span className="absolute -top-6 right-5 transform translate-x-full">
            <img
              src="/svg/hosting/offer-vector.svg"
              height={20}
              width={85}
              alt=""
            />
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mt-12 px-2">
        {tiers.map((tier, index) => (
          <div
            key={tier.id}
            className={classNames(
              "bg-background shadow-2xl p-8 px-8 rounded-xl",
              tier.featured
                ? "outline outline-2 outline-offset-1 outline-primary"
                : "outline outline-1 outline-offset-1 outline-gray-400"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                "flex items-center justify-between text-lg text-gray-800 font-semibold leading-7"
              )}
            >
              {tier.name}
              {tier.featured === true ? (
                <div className="flex items-center justify-center py-1.5 px-2 bg-primary text-xs text-neutral-200 rounded-2xl">
                  <span>Most Popular</span>
                </div>
              ) : null}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  "text-gray-800 text-5xl font-bold tracking-tight"
                )}
              >
                {isYearly ? tier.priceYearly : tier.priceMonthly}
              </span>
              <span className="text-base text-gray-500">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <p className={classNames("text-gray-600 mt-6 text-base leading-7")}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                "text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="font-sans flex items-center gap-x-3"
                >
                  <FaCheck
                    aria-hidden="true"
                    className={classNames("text-blue-600 h-4 w-3 flex-none")}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                "font-sans mt-8 block rounded-md px-3 py-2 text-center text-md font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ",
                tier.featured
                  ? "bg-primary text-white"
                  : "bg-background text-gray-700 border border-1  border-gray-400"
              )}
            >
              Contact us
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
