import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";

const list = "font-sans text-gray-600 font-medium";

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
          className="relative left-1/12 -z-20 aspect-[750/678] w-[14rem] max-w-none -translate-x-1/10 rotate-[30deg] bg-gradient-to-tr from-[#80eaff] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      {/* main content */}

      <main className="max-w-7xl mx-auto w-full h-full grid grid-cols-12">
        {/* heading and cta */}
        <section className="flex flex-col gap-y-4 lg:pr-4 col-span-6">
          <div>
            <Link
              href="/emails"
              className="flex justify-center items-center gap-x-3 w-max bg-primary/5 py-1 pl-3 pr-1 mb-2.5 border border-gray-500/70 rounded-3xl hover:bg-primary/10"
            >
              <p className="text-sm text-gray-600 font-medium">
                Business Email
              </p>

              <span className="text-gray-500">|</span>
              <p className="text-gray-600 font-medium text-md">
                P25<span className="text-gray-500 text-sm"> /month</span>
              </p>
              <span>
                <IoArrowForwardCircle className="text-primary" size="1.6em" />
              </span>
            </Link>
            <p
              className={` ${montserrat.className} text-6xl font-bold text-gray-800 tracking-tight`}
              style={{ lineHeight: "1.13" }}
            >
              Building Modern and Reliable Web Solutions
            </p>
          </div>

          {/* <div className="flex text-yellow-600 ">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div> */}
          <div className="font-sans text-md  text-gray-600 md:w-[90%] leading-6">
            <p>
              At <strong>BigZee</strong>, we provide individuals and companies
              with online services designed to build a strong online presence,
              attract more customers, and increase revenue.
            </p>

            <div className="w-full flex justify-start mt-6 ">
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-16 gap-y-4">
                <a
                  href="#our-services"
                  className={` ${btnDimensions} bg-primary text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400`}
                >
                  Our Services
                </a>
                <a
                  href="#"
                  className="font-sans text-md font-medium leading-6 text-gray-600"
                >
                  About Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600 font-medium mt-4">
              <span className="mr-2">
                <IoShieldCheckmarkSharp
                  size="1.45em"
                  className="text-gray-800"
                />
              </span>
              7 day - money back - guarantee
            </div>
          </div>
        </section>

        {/* image */}
        <section className="h-full flex justify-end items-center col-span-5 col-start-7">
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
