import { FaCheck } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "P29",
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
    name: "Business",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "P99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "P99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
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

export default function Pricing() {
  return (
    <div className="w-full pt-10 px-20">
      <div className="w-full bg-gray-900 py-20 rounded-2xl">
        <div className="max-w-lg lg:max-w-6xl mx-auto">
          <div className="mb-4">
            <h4 className="text-neutral-300 text-5xl font-extrabold  bg-gradient-to-r from-red-600 via-purple-700 to-indigo-600 text-transparent bg-clip-text leading-normal">
              Website Development <br />
              <span className="underline">Prices</span>
            </h4>
          </div>
          <div className="grid grid-cols-1 items-center gap-y-6 gap-x-6 sm:mt-20 sm:gap-y-0 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  "shadow-2xl p-6 px-4  rounded-2xl",
                  tier.featured
                    ? "relative bg-gradient-to-b from-gray-900 to-primary ring-2 ring-inset ring-primary"
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
                      tier.featured ? "text-white" : "text-white",
                      "text-5xl font-bold tracking-tight"
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-400" : "text-gray-500",
                      "text-base"
                    )}
                  >
                    /month
                  </span>
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
                          tier.featured ? "text-indigo-400" : "text-indigo-600",
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
                      ? "bg-secondary text-neutral-200 ring-1 ring-inset ring-neutral-300 shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                      : "text-neutral-300 bg-gray-800 ring-1 ring-inset ring-gray-600 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                    "font-sans mt-8 block rounded-md px-3 py-2 text-center text-md font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                  )}
                >
                  Get started today
                </a>
              </div>
            ))}
          </div>
          <p className="font-sans mt-16 max-w-2xl mx-auto leading-loose text-neutral-200 text-md text-center">
            All Woww websites adhere to very strict design and functional
            standards which include: Fast loading times, mobile friendliness,
            basic SEO and a beautiful design. Our websites all start with a base
            fee and then once the project scope is calculated, the total time is
            multiplied by an hourly rate and fixed costs are included
          </p>
          <div className="w-max-3xl flex gap-4 items-center justify-center mt-12">
            {pricingLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="min-w-52 flex justify-center items-center bg-gradient-to-r from-red-600 to-purple-700 text-transparent bg-clip-text hover:bg-neutral-200 py-2.5 px-6 rounded-lg"
              >
                <h5 className=" text-base font-bold tracking-wide">
                  {link.title}
                </h5>
                <MdNavigateNext className="text-purple-700" size="1.6em" />
              </Link>
            ))}

            {/* <Link
              href="/"
              className="min-w-52 flex justify-center items-center bg-gradient-to-r from-red-600 to-purple-700 hover:bg-gray-800 py-2 px-6 rounded-lg"
            >
              <h5 className="text-center text-neutral-200 text-md font-medium tracking-wide">
                Email Prices
              </h5>
              <MdNavigateNext className="text-neutral-200" size="1.6em" />
            </Link>
            <Link
              href="/"
              className="min-w-52 flex justify-center items-center bg-gradient-to-r from-red-600 to-purple-700 hover:bg-gray-800 py-2 px-6 rounded-lg"
            >
              <h5 className="text-center text-neutral-200 text-md font-medium tracking-wide">
                Domain Prices
              </h5>
              <MdNavigateNext className="text-neutral-200" size="1.6em" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
