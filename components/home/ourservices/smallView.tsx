import { services } from "./services";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import clsx from "clsx";
import DomainSearch from "./searchdomain";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { FaLink } from "react-icons/fa";

export default function OurServicesSml() {
  return (
    <main className="md:hidden x-padding w-full relative isolate pt-12 md:pt-16 pb-12 md:pb-16">
      <section className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="">
          <h2 className={`${homePageheadings}text-gray-800 text-center mb-5`}>
            Services we offer
          </h2>
          <p className="max-w-2xl mx-auto text-md md:text-base text-center text-gray-600">
            We are here to help you and your business integrate into the digital
            landscape.
          </p>
        </div>

        {/* list of services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 justify-between bg-gray-200/50 p-4 mt-12 rounded-xl  outline outline-1 outline-offset-1 outline-gray-400/70">
          {services.map((service, index) => (
            <div
              key={index}
              className={clsx(
                "relative flex flex-col gap-2 lg:col-span-4 w-full max-w-[400px] mx-auto px-4 py-4 bg-background rounded-xl shadow-sm outline outline-1 outline-offset-1 outline-gray-400/30"
              )}
            >
              <div className="pb-2 border-b border-gray-300">
                <div className="flex items-center gap-3">
                  <div
                    className={` bg-gray-200/50 w-12 h-12 flex items-center justify-center  p-2 rounded-full self-start shadow-md border border-gray-300`}
                  >
                    <div
                      className={` ${service.color} `}
                      style={{ color: service.color }}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h4
                    className={`${service.color} text-lg font-bold tracking-wide uppercase`}
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h4>
                </div>

                <div className="mt-1">
                  <div className="font-sans  text-gray-600 text-md leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </div>

              <Link
                href={service.url}
                className={`flex items-center font-sans text-base text-gray-800 font-semibold  hover:text-blue-600 min-w-52 mt-1 tracking-wide`}
              >
                <FaLink className="mr-3" size="1.1em" />{" "}
                <span className="mr-3" aria-hidden="true">
                  {service.link}
                </span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
