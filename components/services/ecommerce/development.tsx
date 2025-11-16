import { montserrat } from "@/app/ui/fonts";
import { primaryButton } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import { FiTrendingUp } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { RiArchive2Fill } from "react-icons/ri";
import type { IconType } from "react-icons";

const iconProps = {
  className: "h-6 w-6 mt-[0.05rem] text-secondary",
};

type Feature = {
  title: string;
  description: string;
  icon: IconType; // <-- icon is a component, not JSX
};

const features: Feature[] = [
  {
    title: "Sell Anywhere.",
    description:
      "Launch a professional e-commerce site and accept credit/debit card payments from customers countrywide.",
    icon: FaCreditCard,
  },
  {
    title: "Physical or Digital.",
    description:
      "Sell anything—from clothing and furniture to online courses and downloadable software.",
    icon: RiShoppingBag4Fill,
  },
  {
    title: "Easy Store Management.",
    description:
      "Manage products, track orders, and view customer insights with a user-friendly dashboard ",
    icon: RiArchive2Fill,
  },
  {
    title: "Built to Convert.",
    description:
      "High-performing online stores powered by WooCommerce or Shopify, designed to grow your business.",
    icon: FiTrendingUp,
  },
];

export default function Development() {
  return (
    <section className="x-padding mx-auto max-w-6xl py-20 sm:px-6 lg:px-8">
      <div className="mb-14 space-y-3">
        <h2
          className={`${montserrat.className} max-w-2xl text-4xl font-bold leading-tight text-gray-800 md:text-5xl`}
        >
          Ecommerce Website
          <div className="relative mt-1 inline-block rotate-1">
            <span className="relative z-10 ml-2 rounded-md bg-blue-500 px-5 py-1 text-neutral-100">
              Development
            </span>
          </div>
        </h2>
      </div>
      <div className="flex flex-col gap-y-12">
        <ul className="grid items-start gap-x-16 gap-y-6 md:grid-cols-2">
          {features.map(({ title, description, icon: Icon }, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="h-auto min-w-6">
                <Icon {...iconProps} />
              </div>

              <div>
                <p className="font-sans text-base text-gray-600">
                  <strong>{title}</strong> {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={` ${primaryButton} inline-flex items-center justify-center self-center`}
        >
          Get Started
        </Link>

        {/* Right Column */}
        {/* <div className="col-span-5 space-y-6">
          <h3
            className={` ${montserrat.className} text-3xl font-bold text-gray-800`}
          >
            A Great Brand Means
          </h3>

          <ul className="space-y-4">
            {[
              "Customised eCommerce web design and development",
              "Seamless API integration",
              "Secured Payment Gateway",
              "Search Engine Optimisation",
              "Certified eCommerce Developers",
              "Supporting you beyond the project",
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-thatgreen p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="font-sans text-base text-gray-700">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  );
}
