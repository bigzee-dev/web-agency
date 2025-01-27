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
      {/* blur component */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[80rem] bg-gradient-to-tr from-[#4754a2] to-[#9089fc] opacity-30"
        />
      </div>
      <section className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="">
          <h2 className={`${homePageheadings}text-gray-800 text-center mb-5`}>
            Our Services
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
                "relative flex flex-col gap-2 lg:col-span-4 w-full max-w-[400px] mx-auto px-4 py-4 bg-background rounded-lg shadow-sm outline outline-1 outline-offset-1 outline-gray-400/30"
              )}
            >
              <div className="flex items-center gap-5 pb-2 border-b border-gray-300">
                <div
                  className={` ${service.backgroundColor} bg-opacity-30 w-12 h-12 flex items-center justify-center  p-2 rounded-xl self-start`}
                >
                  <div className={` ${service.color} `}>{service.icon}</div>
                </div>
                <div className="flex flex-col">
                  <h4
                    className={clsx(
                      "font-sans text-lg font-semibold text-gray-800 tracking-wide"
                    )}
                  >
                    {service.title}
                  </h4>
                  <div className="font-sans  text-gray-600 text-md leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </div>

              <Link
                href={service.url}
                className={`flex items-center font-sans text-base text-gray-800 font-semibold  hover:text-blue-600 min-w-52 pl-4 mt-1 tracking-wide`}
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
