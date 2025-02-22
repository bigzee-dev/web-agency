import { services } from "./services";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import clsx from "clsx";
import DomainSearch from "./searchdomain";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { FaLink } from "react-icons/fa";

export default function OurServicesLrg() {
  return (
    <div className="hidden md:block w-full bg-background">
      {/* <div className="w-full h-2 bg-gradient-to-r from-gray-900 to-primary" /> */}
      <section className="relative isolate pt-12 pb-16 px-1">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[80rem] bg-gradient-to-tr from-[#4754a2] to-[#9089fc] opacity-15"
          />
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className={`${homePageheadings} text-center text-gray-900 mb-4 `}>
            Services We{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-500 to-blue-700 text-transparent bg-clip-text">
              Offer
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-center text-gray-700">
            We are here to help you and your business integrate into the digital
            landscape. Let us transform your vision into an engaging online
            experience.
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 justify-between gap-x-16 gap-y-6 mt-10"
            id="our-services"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={clsx(
                  "relative flex flex-col gap-2 w-full col-span-1 lg:col-span-4 px-4 py-4 rounded-xl overflow-hidden"
                  // index === 3 ? "col-start-3" : "",
                  // index === 4 ? " col-start-7" : ""
                )}
              >
                {/* <div
                  className={` w-[120px] h-auto absolute -top-10 right-0 opacity-10  ${service.color} -z-10  rotate-12`}
                >
                  {service.bottomIcon}
                </div> */}
                <div className={clsx(" ")}>
                  <div
                    className={`w-12 h-12 flex items-center justify-center p-2  bg-gray-200/50 rounded-full border border-secondary`}
                  >
                    <div
                      // className={` ${service.color} `}
                      // style={{ color: service.color }}
                      className="text-primary"
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h4
                    className={clsx(
                      "font-sans text-lg font-bold text-gray-800 mt-4"
                    )}
                  >
                    {service.title}
                  </h4>
                </div>

                <div className="font-sans  text-gray-700 text-md leading-relaxed">
                  <div>{service.description}</div>
                </div>

                <Link
                  href={service.url}
                  className={`font-sans flex items-center justify-center py-2 text-secondary text-md text-center font-semibold bg-primary/10 hover:text-blue-600 min-w-52 mt-3 border-2 border-secondary rounded-lg uppercase`}
                >
                  {/* <FaLink className="mr-3" />{" "} */}
                  <span className="mr-3" aria-hidden="true">
                    {service.link}
                  </span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
