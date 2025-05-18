import { Check } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

export default function Development() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-3 mb-10">
        <h2
          className={`${montserrat.className} max-w-2xl text-5xl font-bold text-gray-800 leading-tight `}
        >
          Ecommerce Website
          <div className="relative inline-block  rotate-1 mt-1">
            <span className="relative z-10 bg-blue-500 text-neutral-100 px-5 py-1 rounded-md ml-2">
              Development
            </span>
          </div>
        </h2>
      </div>
      <div className="grid md:grid-cols-12 gap-x-20 items-start">
        {/* Left Column */}
        <div className="col-span-7 space-y-4">
          <p
            className={` ${montserrat.className} text-3xl text-secondary font-sans font-semibold `}
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
            <br />
            <strong>
              Start your online sales journey today and turn your website into a
              revenue-generating machine.
            </strong>
          </p>
          <Link
            href="/contact"
            className={` ${btnDimensions} flex justify-center items-center font-sans text-md bg-primary hover:bg-sky-700 text-neutral-100 font-bold `}
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
                <div className="bg-thatgreen rounded-full p-1 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="font-sans text-gray-700 text-base">
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
