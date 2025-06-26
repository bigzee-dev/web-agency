import Image from "next/image";
import Link from "next/link";

import { pageHeadings, primaryButton } from "@/app/ui/customTailwindClasses";
import { IoArrowForwardCircle } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { cairo } from "@/app/ui/fonts";

export default function Showcase() {
  return (
    <div className="x-padding relative isolate w-full pb-8 md:pb-12 pt-16">
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
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[rgb(125,218,235)] to-[#899cfc] opacity-35"
        />
      </div>

      {/* main content */}
      <main className="max-w-7xl mx-auto w-full h-full grid grid-cols-1 items-center gap-y-12 md:gap-x-6 lg:grid-cols-12">
        {/* heading and cta */}
        <section className="flex flex-col gap-y-6 lg:pr-4 md:col-span-6">
          <div className="w-full flex justify-center mb-2 lg:justify-start">
            {/* Business Email Link */}
            <Link
              href="/emails"
              className="flex justify-center items-center gap-x-3 w-max bg-primary/10 py-1 pl-1 pr-1.5   rounded-lg border border-gray-400 shadow-md hover:bg-primary/15"
            >
              <p
                className={` ${cairo.className} text-md text-neutral-100 font-semibold bg-slate-700 rounded-lg py-0.5 px-2 tracking-wide `}
              >
                New
              </p>

              <span
                className={` ${cairo.className} text-md text-gray-700 font-semibold `}
              >
                Business Email
              </span>
              <p className="text-gray-700 font-semibold text-base">
                P40<span className="text-gray-500 text-sm"> /month</span>
              </p>
              <span className="text-gray-400">|</span>
              <span>
                <IoArrowForwardCircle className="text-slate-700" size="1.6em" />
              </span>
            </Link>
          </div>

          <div className="max-w-xl mx-auto space-y-6 lg:mr-auto lg:ml-0">
            <h1 className={` ${pageHeadings} `}>
              Building Modern and Reliable Web Solutions
            </h1>
            <p className="font-sans text-base text-gray-700 text-center leading-6 w-[90%] lg:text-start">
              Deltaworx is a web technology company based in Botswana. We
              specialise in web technologies that empower businesses and
              organisations to grow online. From websites to fully featured web
              apps and custom eCommerce solutions, we help you build a digital
              presence that delivers real results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-5 mt-2 lg:justify-start lg:mt-2.5">
            <Link href="#our-services" className={` ${primaryButton} `}>
              Our Services
            </Link>
            <Link
              href="#"
              className="font-sans text-gray-800 font-semibold ml-4"
            >
              About Us <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </section>

        {/* image */}
        <section className="h-full flex justify-end items-start lg:col-span-6 ">
          <Image
            src="/img/home/home-hero-section.png"
            alt="image"
            width={940}
            height={788}
            className="mx-auto object-cover rounded-tl-2xl rounded-br-2xl sm:max-w-xl md:max-w-2xl "
          />
        </section>
      </main>
    </div>
  );
}
