import { Check } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

export default function Development() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2
              className={`${montserrat.className} text-5xl font-bold text-gray-800 leading-tight `}
            >
              Ecommerce Website
              <div className="relative inline-block  rotate-1 mt-1">
                <span className="relative z-10 bg-blue-500 text-neutral-100 px-6 py-2 rounded-md ml-2">
                  Development
                </span>
              </div>
            </h2>
          </div>

          <p className="font-sans text-gray-700">
            By utilising effective e-commerce development services, you can
            create and promote your website in a way that generates revenue even
            while you sleep.
          </p>

          <p className="font-sans text-slate-700">
            As a specialised e-commerce website development company, we possess
            the technical skills and proficiency to build or integrate any
            e-commerce platform. Whether it involves crafting a tailor-made
            backend solution or customising licensed software like Magento or
            Joomla, we can meet your requirements.
          </p>
          <Link
            href="/contact"
            className={` ${btnDimensions} flex justify-center items-center font-sans text-md bg-primary hover:bg-sky-700 text-neutral-100 font-bold `}
          >
            Contact Us
          </Link>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h3
            className={` ${montserrat.className} text-3xl font-bold text-gray-800  mt-3`}
          >
            A Great Brand Means
          </h3>

          <ul className="space-y-4">
            {[
              "Customised eCommerce web design and development",
              "Seamless API integration",
              "Secured payment gateway",
              "Search engine optimisation",
              "Certified eCommerce developers",
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
