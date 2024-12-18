import { services } from "./services";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import clsx from "clsx";
import DomainSearch from "./searchdomain";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function OurServices() {
  return (
    <section className="relative isolate pt-20 pb-20 px-1 bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[80rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className={`${homePageheadings} text-center mb-6 `}>
          Our Services
        </h2>
        <p className="max-w-3xl mx-auto text-base text-center text-gray-600">
          We are here to help you and your business integrate into the digital
          landscape. Let us transform your vision into an engaging online
          experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col gap-3 px-6 py-7 w-full bg-neutral-50 border-2 border-secondary/25 rounded-2xl shadow-2xl",
                index === 4
                  ? "text-neutral-100 col-span-1 md:col-span-2  bg-gradient-to-br from-gray-900 to-primary"
                  : "col-span-1 "
              )}
            >
              <div
                className={clsx(
                  "flex items-center gap-3  pb-4",
                  index === 4
                    ? "border-b border-gray-500"
                    : " border-b border-gray-400"
                )}
              >
                <div className="flex items-center justify-center p-2  bg-secondary rounded-full">
                  <div className="text-neutral-300">{service.icon}</div>
                </div>
                <h4
                  className={clsx(
                    "text-xl font-semibold",
                    index === 4 ? "text-neutral-400" : "text-gray-800"
                  )}
                >
                  {service.title}
                </h4>
              </div>
              <div>
                {index === 4 ? (
                  <DomainSearch />
                ) : (
                  <div className="font-sans pl-1 mt-auto text-gray-700 text-md leading-relaxed">
                    <div>{service.subTitle}</div>
                    <p className="text-gray-800 font-medium mt-1">Features</p>
                    <div className="mt-0.5">{service.description}</div>
                  </div>
                )}
              </div>
              {index !== 4 ? (
                <Link
                  href="http://209.97.177.68/cart.php?a=add&domain=register"
                  className={`text-base font-semibold text-gray-800 pl-1 mt-auto`}
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
