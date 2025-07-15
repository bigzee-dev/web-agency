import { FaCheck } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const tiers = [
  {
    name: "1-Pager",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "P2500",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Basic",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "P120",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      //   "Marketing automations",
      //   "Custom integrations",
    ],
    featured: true,
  },
  {
    name: "Business",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "P50",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      //   "Marketing automations",
      //   "Custom integrations",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "P50",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      //   "Marketing automations",
      //   "Custom integrations",
    ],
    featured: false,
  },
];

const pricingLinks = [
  {
    title: "Hosting Prices",
    url: "/",
  },
  {
    title: "Email Prices",
    url: "/",
  },
  {
    title: "Domain Prices",
    url: "/",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingWebsites() {
  return (
    <div className="w-full">
      <div className="max-w-lg lg:max-w-7xl mx-auto py-12">
        <div className="mb-4 flex justify-between items-center">
          <h4 className="text-5xl font-extrabold  text-gray-800 leading-normal">
            Pricing
          </h4>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-6 sm:mt-20 lg:grid-cols-4">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={classNames(
                "shadow-2xl p-8 px-6 outline outline-1 outline-gray-400/50 rounded-xl"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  "flex items-center justify-between text-base text-gray-700 font-semibold leading-7"
                )}
              >
                {tier.name}
                {tier.featured === true ? (
                  <div className="flex items-center justify-center py-1.5 px-2 bg-blue-600 text-xs text-neutral-200 rounded-2xl">
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
                  {tier.priceMonthly}
                </span>
                {index !== 0 && (
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-500" : "text-gray-400",
                      "text-base"
                    )}
                  >
                    /month
                  </span>
                )}
              </p>
              <p
                className={classNames("text-gray-600 mt-6 text-base leading-7")}
              >
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
                      className={classNames(
                        "text-indigo-600 h-4 w-3 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? " bg-gray-800 text-neutral-200 ring-1 ring-inset ring-gray-600 shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "text-neutral-300 bg-gray-800 ring-1 ring-inset ring-gray-600 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                  "font-sans mt-8 block rounded-md px-3 py-2 text-center text-md font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                )}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
