import Image from "next/image";
import { longSectionHeadings } from "@/app/ui/customTailwindClasses";

import clsx from "clsx";

const stats = [
  {
    value: "100%",
    text: "Delivery Rate",
  },
  {
    value: "600",
    text: "Emails sent per hour",
  },
  {
    value: "24/7",
    text: "Local Support in Botswana",
  },
];

export default function StatsEmail() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-20">
        <div className="relative isolate grid grid-cols-1 gap-y-10 overflow-hidden bg-gray-900 pt-0 shadow-2xl md:grid-cols-12 md:rounded-3xl md:pt-24 lg:pt-0">
          {/* Blur component for background effect */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-20"
            />
          </div>
          {/* Left Section - Text Content */}
          <div className="order-2 col-span-1 pb-6 md:order-1 md:col-span-9 md:pb-0 lg:mx-0 lg:py-14">
            <div className="mx-auto flex max-w-4xl flex-col gap-y-12 px-4">
              <h2
                className={` ${longSectionHeadings} text-center text-neutral-300 md:text-5xl`}
              >
                Email Built for Business
                <br />{" "}
                <div className="mt-6 flex items-center justify-center gap-x-6">
                  <span className="text-lg font-medium uppercase tracking-wider text-slate-400">
                    Designed for You
                  </span>
                  <span className="flex items-center justify-center">
                    <img
                      src="/svg/emails/send.svg"
                      className="size-20"
                      alt="send"
                    />
                  </span>
                </div>
              </h2>
              {/* Stats Grid - Desktop (3 columns) */}
              <div className="grid gap-x-2 gap-y-2 md:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "border border-gray-600/30 bg-slate-800/90 px-8 py-6 text-center shadow-lg",
                      index === 0 && "rounded-lg",
                      index === 1 && "rounded-lg",
                      index === 2 && "rounded-lg",
                      index === 3 && "rounded-lg",
                    )}
                  >
                    <div className="mb-3 flex w-full items-center justify-center gap-x-2.5 md:justify-start">
                      <span className="text-center text-6xl font-bold text-neutral-300 md:text-start">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-center font-sans text-sm leading-relaxed text-slate-400 md:text-start lg:text-sm">
                      {stat.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Section - Image */}
          <div className="relative order-1 col-span-1 h-[20rem] md:order-2 md:col-span-3 md:block md:h-full">
            <Image
              src="/img/tech-laptop.jpg"
              alt="img"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
