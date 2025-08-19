import Image from "next/image";
import Link from "next/link";

import { pageHeadings, primaryButton } from "@/app/ui/customTailwindClasses";
import { IoArrowForwardCircle } from "react-icons/io5";
import { cairo } from "@/app/ui/fonts";

export default function Showcase() {
  return (
    <div className="x-padding relative isolate w-full overflow-hidden pb-8 pt-16 md:overflow-visible md:pb-12">
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
      <main className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-y-12 md:gap-x-6 lg:grid-cols-12">
        {/* heading and cta */}
        <section className="flex flex-col gap-y-6 md:col-span-6 lg:pr-4">
          <div className="mb-3 flex w-full justify-center lg:justify-start">
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
              <p className="text-base font-semibold text-gray-700">
                P40<span className="text-sm text-gray-500"> /month</span>
              </p>
              <span className="text-gray-400">|</span>
              <span>
                <IoArrowForwardCircle className="text-slate-700" size="1.6em" />
              </span>
            </Link>
          </div>

          <div className="mx-auto max-w-xl space-y-6 lg:ml-0 lg:mr-auto">
            <h1 className={` ${pageHeadings} `}>
              Building Modern and Reliable Web Solutions
            </h1>
            <p className="w-[90%] text-center font-sans text-base leading-6 text-gray-700 lg:text-start">
              Deltaworx is a web technology company based in Botswana. We
              specialise in web technologies that empower businesses and
              organisations to grow online. From websites to fully featured web
              apps and custom eCommerce solutions, we help you build a digital
              presence that delivers real results.
            </p>
          </div>

          <div className="mt-3 flex flex-col items-center justify-center gap-x-8 gap-y-6 sm:flex-row lg:mt-1.5 lg:justify-start">
            <Link href="#our-services" className={` ${primaryButton} `}>
              Our Services
            </Link>
            <Link
              href="#"
              className="ml-4 font-sans text-base font-semibold tracking-wide text-gray-800 md:text-[1.01rem]"
            >
              About Us <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </section>

        {/* image */}
        <section className="flex h-full items-start justify-end lg:col-span-6">
          <Image
            src="/img/home/home-hero-section.png"
            alt="image"
            width={940}
            height={788}
            className="mx-auto rounded-br-2xl rounded-tl-2xl object-cover sm:max-w-xl md:max-w-2xl"
          />
        </section>
      </main>
    </div>
  );
}
