import Image from "next/image";

import { montserrat } from "@/app/ui/fonts";
import { whiteButton } from "@/app/ui/customTailwindClasses";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function Websites() {
  return (
    <>
      {/* Desktop Header */}
      <div className="relative hidden h-[35rem] w-full overflow-hidden lg:block">
        {/* Background image */}
        <Image
          src="/img/websites/male-phone-hq.jpg"
          alt="Background image of person using mobile device"
          fill
          className="object-cover object-right"
          priority
        />

        {/* Content overlay */}
        <div className="absolute inset-0 grid bg-gray-900/20 lg:grid-cols-2">
          <div className="col-span-1 bg-secondary"></div>
          <div className="col-span-1 bg-transparent"></div>
        </div>
        <div className="absolute inset-0 mx-auto w-full max-w-7xl py-16">
          <div className="w-full pr-12 lg:w-[50%]">
            {/* Websites badge */}
            <div className="inline-block">
              <span className="font-semibold tracking-widest text-neutral-400">
                WEBSITES
              </span>
            </div>

            {/* Main heading */}
            <h1
              className={` ${montserrat.className} mt-3 max-w-4xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
            >
              We Develop Websites that Deliver Results
            </h1>
            <p className="mb-2 mt-7 flex items-center gap-3 font-sans text-md text-neutral-400">
              <span>
                <FaCheck size="0.8em" className="text-gray-400" />
              </span>
              We develop modern websites tailored to your needs
            </p>
            <p className="mb-2 flex items-center gap-3 font-sans text-md text-neutral-400">
              <span>
                <FaCheck size="0.8em" className="text-gray-400" />
              </span>
              Whether it&apos;s a business site, a content hub, or an
              informational platform, we build it.
            </p>
            <p className="flex items-center gap-3 font-sans text-md text-neutral-400">
              <span>
                <FaCheck size="0.8em" className="text-gray-400" />
              </span>
              From design to deployment, we make sure your site looks great and
              works flawlessly across all devices.
            </p>
            <button className={` ${whiteButton} mt-10`}>Get Started</button>
          </div>
        </div>
      </div>
      {/* Mobile Header */}
      <div className="flex h-auto w-full flex-col lg:hidden">
        {/* Content overlay */}

        <div className="x-padding h-auto bg-secondary py-8 pr-12">
          {/* Websites badge */}
          <div className="block">
            <span className="font-semibold tracking-widest text-neutral-300">
              WEBSITES
            </span>
          </div>

          {/* Main heading */}
          <div className="flex max-w-3xl flex-col">
            <h1
              className={` ${montserrat.className} mt-3 max-w-4xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
            >
              We Develop Websites that Deliver Results
            </h1>
            <p className="mb-2 mt-6 flex items-center gap-3 font-sans text-md text-neutral-400">
              <span>
                <FaCheck size="0.7em" className="text-gray-400" />
              </span>
              We develop modern websites tailored to your needs
            </p>
            <p className="mb-2 flex items-center gap-3 font-sans text-md text-neutral-400">
              <span>
                <FaCheck size="0.7em" className="text-gray-400" />
              </span>
              Whether it&apos;s a business site, a content hub, or an
              informational platform, we build it.
            </p>
            <p className="flex items-center gap-3 font-sans text-md text-neutral-400">
              <span>
                <FaCheck size="0.7em" className="text-gray-400" />
              </span>
              From design to deployment, we make sure your site looks great and
              works flawlessly across all devices.
            </p>
            <Link href="/contact-us" className={` ${whiteButton} mt-10`}>
              Get Started
            </Link>
          </div>
        </div>

        {/* Background image */}
        <div className="relative h-[400px] w-full overflow-hidden sm:h-[450px]">
          <div className="absolute left-[-500px] grayscale filter">
            <Image
              src="/img/websites/male-phone-hq.jpg"
              alt="Background image of person using mobile device"
              width={2000}
              height={801}
              className="h-[400px] w-[2000px] object-cover sm:h-[450px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
