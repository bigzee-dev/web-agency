import Image from "next/image";
import Link from "next/link";

import { pageHeadings, primaryButton } from "@/app/ui/customTailwindClasses";
import { IoArrowForwardCircle } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

export default function Showcase() {
  return (
    <div className="x-padding relative isolate w-full pt-12 pb-8 md:pb-14 md:pt-20">
      {/* blur component */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -z-20 transform-gpu  blur-3xl top-10  overflow-hidden md:overflow-visible"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/12 -z-20 aspect-[1160/678] w-[14rem] max-w-none -translate-x-1/10 rotate-[30deg] bg-gradient-to-tr from-[#80eaff] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      {/* main content */}

      <main className="max-w-7xl mx-auto w-full h-full grid grid-cols-12 gap-x-4">
        {/* heading and cta */}
        <section className="flex flex-col gap-y-6 lg:pr-4 col-span-6">
          <div>
            <Link
              href="/emails"
              className="flex justify-center items-center gap-x-3 w-max bg-primary/10 py-1 pl-1 pr-1.5 mb-6  rounded-3xl border-2 border-gray-700 shadow-md hover:bg-primary/15"
            >
              <p className="text-md text-blue-400 font-semibold radial-background border border-gray-800 rounded-3xl py-1 px-3">
                Business Email
              </p>

              {/* <span className="text-gray-400">|</span> */}
              <span className="text-slate-500">
                <BsStars size="1.4em" />
              </span>
              <p className="text-primary font-semibold text-base">
                P40<span className="text-gray-500 text-sm"> /month</span>
              </p>
              <span>
                <IoArrowForwardCircle className="text-primary" size="1.6em" />
              </span>
            </Link>
            <h1 className={` ${pageHeadings} `}>
              Building Modern and Reliable Web Solutions
            </h1>
          </div>
          <div className="font-sans text-md  text-gray-700 md:w-[90%] leading-6">
            <p>
              At <strong>BigZee Digital</strong> we empower businesses and
              organisations to expand their online reach and connect with a
              wider audience. Our main objective is to help brands establish a
              successful digital presence.
            </p>
          </div>
          {/*  <span aria-hidden="true"> →</span> */}
          <div className="w-full flex justify-start mt-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4">
              <Link href="#our-services" className={` ${primaryButton} `}>
                Our Services
              </Link>
              <Link
                href="#"
                className="font-sans text-gray-700 font-medium ml-4"
              >
                About Us <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </div>
          {/* <div className="flex items-center font-sans font-medium text-sm ">
            <span className="text-secondary mr-2">
              <IoShieldCheckmarkSharp size="1.5em" className="text-gray-800" />
            </span>
            <span className="text-gray-700">
              7 day - money back - guarantee
            </span>
          </div> */}
        </section>

        {/* image */}
        <section className="h-full flex justify-end items-start col-span-5 col-start-7">
          <Image
            src="/img/home/home-hero-section.png"
            alt="image"
            width={940}
            height={788}
            className="object-cover  rounded-tl-2xl rounded-br-2xl"
          />
        </section>
      </main>
    </div>
  );
}
