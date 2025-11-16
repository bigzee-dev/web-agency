import React from "react";
// import { montserrat } from "@/app/ui/fonts";
import { longSectionHeadings } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

import { HiServerStack } from "react-icons/hi2";
// import { FaCloudDownloadAlt } from "react-icons/fa";
// import { IoBarChartSharp } from "react-icons/io5";

const services = [
  {
    title: "Cloud Compute",
    icon: HiServerStack,
  },
  {
    title: "Backup & Storage",
    icon: HiServerStack,
  },
  {
    title: "Web Development",
    icon: HiServerStack,
  },
  {
    title: "Emails",
    icon: HiServerStack,
  },
  {
    title: "Hosting",
    icon: HiServerStack,
  },
  {
    title: "Domains",
    icon: HiServerStack,
  },
];

export default function ServicesWeOffer() {
  return (
    <section className="x-padding mx-auto max-w-6xl space-y-12 py-12 pb-20">
      <h2 className={`${longSectionHeadings} text-center`}>
        Services We Offer
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="flex flex-col items-center rounded-2xl border border-gray-200/60 bg-gradient-to-tr from-gray-800 via-secondary to-primary p-4 py-5 shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-white/85 text-neutral-50">
                <Icon className="size-7 text-primary" />
              </div>
              <div className="mb-2 text-xl font-semibold text-neutral-200">
                {s.title}
              </div>
              <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
                <div className="text-right">
                  <Link href="" className="text-xs text-gray-400">
                    Linux VPS
                  </Link>
                </div>

                <div className="mx-2 text-center text-xs text-gray-400">|</div>

                <div className="text-left">
                  <Link href="" className="text-xs text-gray-400">
                    Windows VPS
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
