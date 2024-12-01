import { services } from "./services";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import clsx from "clsx";
import DomainSearch from "./searchdomain";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function OurServices() {
  return (
    <section className="relative isolate pt-24 pb-20 bg-background border-t border-gray-300">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[80rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className={`${homePageheadings} text-center mb-6 `}>
          Our Services
        </h2>
        <p className="max-w-3xl mx-auto text-base text-center text-gray-600 font-medium">
          We are here to help you and your business integrate into the digital
          landscape. Let us transform your vision into an engaging online
          experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col gap-3 px-6 py-7 w-full bg-gradient-to-b from-gray-800 to-primary border border-gray-400/70 rounded-2xl",
                index === 4
                  ? "text-neutral-100 col-span-1 md:col-span-2 "
                  : "col-span-1 "
              )}
            >
              <div className="flex items-center gap-3  pb-4 border-b border-gray-500">
                <div className="flex items-center justify-center p-2 bg-cyan-500/30 radial-gradient rounded-full">
                  <div className="text-neutral-300">{service.icon}</div>
                </div>
                <h4 className="font-bold text-xl text-neutral-300">
                  {service.title}
                </h4>
              </div>
              <div className="flex-grow">
                {index === 4 ? (
                  <DomainSearch />
                ) : (
                  <p className="font-sans pl-1 mt-1 text-gray-300 text-md leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
              {index !== 4 ? (
                <Link
                  href="http://209.97.177.68/cart.php?a=add&domain=register"
                  className={` ${btnDimensions} text-neutral-50 mt-3 mx-auto bg-secondary ring-1 ring-inset ring-neutral-300`}
                >
                  {service.link} <span aria-hidden="true">→</span>
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
