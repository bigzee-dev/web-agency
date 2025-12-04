import React from "react";
// import { montserrat } from "@/app/ui/fonts";
import {
  longSectionHeadings,
  sectionHeadings,
} from "@/app/ui/customTailwindClasses";
import Link from "next/link";

import { HiServer } from "react-icons/hi";
import { TiCloudStorage } from "react-icons/ti";
import { LiaGlobeAfricaSolid } from "react-icons/lia";
import { MdMarkEmailRead } from "react-icons/md";
import { HiServerStack } from "react-icons/hi2";
import { HiGlobeAlt } from "react-icons/hi2";
import { montserrat } from "@/app/ui/fonts";
// import { FaCloudDownloadAlt } from "react-icons/fa";
// import { IoBarChartSharp } from "react-icons/io5";

const services = [
  {
    title: "Cloud Compute",
    icon: HiServer,
    links: [
      { name: "Linux VPS", href: "/linux-vps" },
      { name: "Windows VPS", href: "/windows-vps" },
    ],
  },
  {
    title: "Backup & Storage",
    icon: TiCloudStorage,
    links: [{ name: "Storage Box", href: "/cloud-storage" }],
  },
  {
    title: "Web Development",
    icon: LiaGlobeAfricaSolid,
    links: [
      { name: "Web Design", href: "/websites" },
      { name: "Ecommerce", href: "/ecommerce" },
    ],
  },
  {
    title: "Emails",
    icon: MdMarkEmailRead,
    links: [{ name: "Business Email", href: "/emails" }],
  },
  {
    title: "Hosting",
    icon: HiServerStack,
    links: [{ name: "Web Hosting", href: "/web-hosting" }],
  },
  {
    title: "Domains",
    icon: HiGlobeAlt,
    links: [{ name: "Domain Registration", href: "/domains" }],
  },
];

export default function ServicesWeOffer() {
  return (
    <section className="x-padding mx-auto max-w-6xl space-y-12 py-12 pb-20">
      <h2 className={`${sectionHeadings} text-center`}>Services We Offer</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="flex flex-col items-center rounded-2xl border border-gray-200/60 bg-gradient-to-tr from-gray-800 to-primary p-4 py-5 shadow-lg"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md text-neutral-50">
                <Icon className="size-12 text-slate-300" />
              </div>
              <div
                className={` ${montserrat.className} mb-2 text-xl font-semibold text-slate-300`}
              >
                {s.title}
              </div>
              <div className="flex w-full items-center justify-center space-x-2 text-center text-blue-300">
                {s.links
                  .map((link) => (
                    // 1. Map the link objects to JSX Link elements
                    // Use the link's name as the key (assuming names are unique)
                    <div key={link.name} className="text-center">
                      <Link href={link.href} className="text-xs">
                        {link.name}
                      </Link>
                    </div>
                  ))
                  .flatMap(
                    (element, index, array) =>
                      // 2. Conditionally insert the separator after each element
                      // except the last one (index < array.length - 1)
                      index < array.length - 1
                        ? [
                            element,
                            <div
                              key={`sep-${index}`}
                              className="text-center text-xs"
                            >
                              |
                            </div>,
                          ]
                        : [element], // The last element is returned without a separator
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
