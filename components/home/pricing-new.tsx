import { FaCheck } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const tiers = [
  {
    name: "Websites",
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
    name: "Hosting",
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
    name: "Emails",
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

export default function PricingNew() {
  return (
    <div className="bg-neutral-100">
      <div className="w-full px-6 py-20">
        <div className="relative isolate overflow-hidden bg-gray-900 md:px-6 pt-16 shadow-2xl rounded-3xl lg:px-16 md:pt-24 lg:flex lg:gap-x-20  lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="max-w-lg lg:max-w-6xl mx-auto py-12">
            <div className="mb-4 flex justify-between items-center">
              <h4 className="text-neutral-300 text-5xl font-extrabold  bg-gradient-to-r from-red-600 via-purple-700 to-indigo-600 text-transparent bg-clip-text leading-normal">
                Pricing
              </h4>
              <div className="flex h-5 items-center space-x-4 text-neutral-400 font-sans text-md">
                <div>Domains</div>
                <Separator orientation="vertical" />
                <div>Whatsapp integration</div>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-x-12 sm:mt-20 lg:grid-cols-3">
              {tiers.map((tier, index) => (
                <div
                  key={tier.id}
                  className={classNames(
                    "shadow-2xl p-8 px-6 rounded-2xl",
                    tier.featured
                      ? "relative bg-gray-800 border border-gray-600"
                      : "bg-gray-800 border border-gray-600"
                  )}
                >
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? "text-neutral-300" : "text-neutral-300",
                      "flex items-center justify-between text-base font-semibold leading-7"
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
                        tier.featured ? "text-gray-500" : "text-gray-500",
                        "text-base"
                      )}
                    >
                      Starting at
                    </span>
                    <span
                      className={classNames(
                        tier.featured ? "text-white" : "text-white",
                        "text-5xl font-bold tracking-tight"
                      )}
                    >
                      {tier.priceMonthly}
                    </span>
                    {index !== 0 && (
                      <span
                        className={classNames(
                          tier.featured ? "text-gray-400" : "text-gray-400",
                          "text-base"
                        )}
                      >
                        /month
                      </span>
                    )}
                  </p>
                  <p
                    className={classNames(
                      tier.featured ? "text-gray-300" : "text-gray-300",
                      "mt-6 text-base leading-7"
                    )}
                  >
                    {tier.description}
                  </p>
                  <ul
                    role="list"
                    className={classNames(
                      tier.featured ? "text-gray-300" : "text-gray-300",
                      "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
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
                            tier.featured
                              ? "text-indigo-400"
                              : "text-indigo-600",
                            "h-4 w-3 flex-none"
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
      </div>
    </div>
  );
}
