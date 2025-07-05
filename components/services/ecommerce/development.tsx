import { Check } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

export default function Development() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-14 space-y-3">
        <h2
          className={`${montserrat.className} max-w-2xl text-5xl font-bold leading-tight text-gray-800`}
        >
          Ecommerce Website
          <div className="relative mt-1 inline-block rotate-1">
            <span className="relative z-10 ml-2 rounded-md bg-blue-500 px-5 py-1 text-neutral-100">
              Development
            </span>
          </div>
        </h2>
      </div>
      <div className="grid items-start gap-x-20 md:grid-cols-12">
        {/* Left Column */}
        <div className="col-span-7 flex flex-col gap-y-4">
          <p
            className={` ${montserrat.className} font-sans text-3xl font-semibold text-secondary`}
          >
            Start Your Online Retail Business Today
          </p>

          <p className="font-sans text-slate-700">
            Sell your products directly through your website and accept credit
            card payments from customers worldwide. An e-commerce website gives
            you all the tools you need to launch and manage a successful online
            store. Whether you're selling physical products like clothing and
            furniture, or offering services and digital goods such as online
            courses or downloadable software, your e-commerce site can handle it
            all.
            <br />
          </p>
          <p className="font-sans text-slate-700">
            {" "}
            We build modern, high-converting online stores powered by
            WooCommerce or Shopify—tailored to help you grow your business
            online.
            <strong>
              {" "}
              Start your online sales journey today and turn your website into a
              revenue-generating machine.
            </strong>
          </p>
          <Link
            href="/contact"
            className={` ${btnDimensions} mt-8 flex items-center justify-center bg-primary font-sans text-md font-bold text-neutral-100 hover:bg-sky-700`}
          >
            Contact Us
          </Link>
        </div>

        {/* Right Column */}
        <div className="col-span-5 space-y-6">
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
        </div>
      </div>
    </section>
  );
}
