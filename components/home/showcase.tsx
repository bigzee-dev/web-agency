import Image from "next/image";
import Link from "next/link";

import { pageHeadings, primaryButton } from "@/app/ui/customTailwindClasses";
import { IoArrowForwardCircle } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { cairo } from "@/app/ui/fonts";

export default function Showcase() {
  return (
    <div className="x-padding relative isolate w-full pt-12 pb-8 md:pb-12 showcase-top-padding">
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
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[rgb(125,218,235)] to-[#899cfc] opacity-30"
        />
      </div>
      {/* main content */}

      <main className="max-w-7xl mx-auto w-full h-full grid grid-cols-12 gap-x-4">
        {/* heading and cta */}
        <section className="flex flex-col gap-y-6 lg:pr-4 col-span-6">
          <div>
            <Link
              href="/emails"
              className="flex justify-center items-center gap-x-3 w-max bg-primary/10 py-1 pl-1 pr-1.5 mb-5  rounded-3xl border-2 border-gray-400 shadow-md hover:bg-primary/15"
            >
              <p
                className={` ${cairo.className} text-md text-neutral-100 font-semibold bg-slate-700 rounded-3xl py-1 px-3 tracking-wide `}
              >
                Business Email
              </p>

              {/* <span className="text-gray-400">|</span> */}
              <span className="text-yellow-600/75">
                <BsStars size="1.4em" />
              </span>
              <p className="text-gray-700 font-semibold text-base">
                P40<span className="text-gray-500 text-sm"> /month</span>
              </p>
              <span>
                <IoArrowForwardCircle className="text-slate-700" size="1.6em" />
              </span>
            </Link>
            <h1 className={` ${pageHeadings} `}>
              Building Modern and Reliable Web Solutions
            </h1>
          </div>
          <div className="font-sans text-md  text-gray-700 md:w-[90%] leading-6">
            <p className="font-medium">
              Deltaworx is a web technology company based in Botswana.
            </p>
            <p>
              We specialise in web technologies that empower businesses and
              organisations to grow online. From websites to fully featured web
              apps and custom eCommerce solutions, we help you build a digital
              presence that delivers real results.
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
                className="font-sans text-gray-800 font-medium ml-4"
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
