"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { montserrat } from "@/app/ui/fonts";
import { EmailPlans } from "@/components/shared/pricing/email-features";
import { HostingPlans } from "@/components/shared/pricing/hosting-features";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingPlans({ plan }: { plan: string }) {
  const plans = plan === "emails" ? EmailPlans : HostingPlans;
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div
      className="relative isolate mx-auto max-w-7xl overflow-hidden px-4 py-16"
      id="pricing-plans"
    >
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
        <h2 className="text-base font-semibold leading-7 text-blue-600">
          Pricing
        </h2>
        <p
          className={` ${montserrat.className} mt-2 text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl`}
        >
          Choose the right plan for you
        </p>
      </div>

      <div className="mt-16 flex items-center justify-center gap-3">
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
          <div className="absolute -right-5 -top-0.5 translate-x-full transform">
            <p className="text-base font-semibold text-pink-700">Save 20%</p>
          </div>
          <span className="absolute -top-6 right-5 translate-x-full transform">
            <img
              src="/svg/hosting/offer-vector.svg"
              height={20}
              width={85}
              alt=""
            />
          </span>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-center gap-x-10 gap-y-8 px-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={classNames(
              "rounded-xl bg-background p-8 px-10 shadow-2xl",
              plan.featured
                ? "outline outline-2 outline-offset-1 outline-primary"
                : "outline outline-1 outline-offset-1 outline-gray-400",
            )}
          >
            <h3
              id={plan.id}
              className={classNames(
                "flex items-center justify-between text-lg font-semibold leading-7 text-gray-800",
              )}
            >
              {plan.name}
              {plan.featured === true ? (
                <div className="flex items-center justify-center rounded-2xl bg-primary px-2 py-1.5 text-xs text-neutral-200">
                  <span>Most Popular</span>
                </div>
              ) : null}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  "text-5xl font-bold tracking-tight text-gray-800",
                )}
              >
                {isYearly ? plan.priceYearly : plan.priceMonthly}
              </span>
              <span className="text-base text-gray-500">
                /
                {plan.name === "Business" || plan.name === "Enterprise"
                  ? "acc/"
                  : ""}
                {isYearly ? "year" : "month"}
              </span>
            </p>
            <p className={classNames("mt-6 text-base leading-7 text-gray-600")}>
              {plan.description}
            </p>
            <a
              href={plan.href}
              aria-describedby={plan.id}
              className={classNames(
                "mx-auto mt-6 block w-full rounded-[5rem] px-3 py-2.5 text-center font-sans text-md font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                plan.featured
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-neutral-100",
              )}
            >
              {plan.linkText}
            </a>
            <ul
              role="list"
              className={classNames(
                "mt-8 space-y-3 text-sm leading-6 text-gray-600",
              )}
            >
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-x-3 font-sans"
                >
                  <FaCheck
                    aria-hidden="true"
                    className={classNames("h-4 w-3 flex-none text-gray-500")}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
