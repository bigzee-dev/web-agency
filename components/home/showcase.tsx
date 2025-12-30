import Image from "next/image";
import Link from "next/link";

import {
  grayButton,
  lightBgButton,
  pageHeadings,
  primaryButton,
  transparentButton,
} from "@/app/ui/customTailwindClasses";
import { IoArrowForwardCircle } from "react-icons/io5";
import { cairo } from "@/app/ui/fonts";
import { FaCheck } from "react-icons/fa6";

const features = [
  { label: "Scalable Cloud Infrastructure" },
  { label: "Enterprise Grade Applications" },
  { label: "High Performance Compute" },
  { label: "Storage & Backup" },
  { label: "Virtual Private Servers" },
  { label: "Domains & Email" },
];

export default function Showcase() {
  return (
    <div className="x-padding relative isolate w-full overflow-hidden pb-8 pt-20 md:overflow-visible md:pb-12">
      {/* blur component */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[70rem] bg-gradient-to-tr from-[rgb(125,218,235)] to-[#899cfc] opacity-35 md:w-[72.1875rem]"
        />
      </div>

      {/* main content */}
      <main className="mx-auto flex h-full w-full max-w-7xl flex-col items-center gap-y-24">
        {/* heading and cta */}
        <section className="flex w-full flex-col items-center gap-y-6">
          <div className="mb-3 flex w-full justify-center">
            {/* Business Email Link */}
            <Link
              href="/emails"
              className="flex w-max items-center justify-center gap-x-3 rounded-lg border border-gray-400 bg-primary/10 py-1 pl-1 pr-1.5 shadow-md hover:bg-primary/15"
            >
              <p
                className={` ${cairo.className} rounded-lg bg-slate-700 px-2 py-0.5 text-md font-semibold tracking-wide text-neutral-100`}
              >
                New
              </p>

              <span
                className={` ${cairo.className} text-md font-semibold text-gray-700`}
              >
                Business Email
              </span>
              <p className="text-base font-semibold text-gray-700">P40</p>
              <span className="text-gray-400">|</span>
              <span>
                <IoArrowForwardCircle className="text-slate-700" size="1.6em" />
              </span>
            </Link>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <h1 className={` ${pageHeadings} md:text-center`}>
              Providing Modern and Reliable Web Solutions
            </h1>
            <p className="text-center font-sans text-base leading-6 text-gray-700">
              Deltaworx is a technology company based in Botswana. We specialize
              in web solutions that empower developers and businesses to grow
              online. From fully featured web apps to custom digital services
              such as domains, email and cloud computing, we help you build a
              digital presence that delivers real results.
            </p>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center gap-x-3 gap-y-6 sm:flex-row lg:mt-8 lg:justify-start">
            <Link href="#our-services" className={` ${primaryButton} `}>
              Our Services
            </Link>
            <Link href="/about-us" className={` ${lightBgButton} `}>
              About Us {/* <span aria-hidden="true"> →</span> */}
            </Link>
          </div>
        </section>

        {/* image */}
        <section className="mx-auto grid h-full max-w-6xl grid-cols-1 items-center justify-center gap-y-12 md:grid-cols-12">
          <div className="order-last col-span-1 md:order-first md:col-span-5">
            <ul className="grid max-w-max list-inside grid-cols-1 gap-y-1.5 self-center border-b-[1rem] border-neutral-800 pb-4 pr-8 font-sans text-lg font-medium text-gray-700 md:gap-x-0">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-x-3">
                  <span className="flex items-center">
                    <FaCheck className="h-auto w-3 text-gray-600" />
                  </span>
                  {feature.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-first col-span-1 md:order-last md:col-span-7">
            <Image
              src="/img/home/home-hero-section.png"
              alt="image"
              width={940}
              height={788}
              className="mx-auto rounded-br-2xl rounded-tl-2xl object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
