import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";
import { whiteButton } from "@/app/ui/customTailwindClasses";
import { FaCheck } from "react-icons/fa";

export default function Websites() {
  return (
    <div className="relative w-full h-[35rem] overflow-hidden">
      {/* Background image */}
      <Image
        src="/img/websites/male-phone-hq.jpg"
        alt="Background image of person using mobile device"
        fill
        className="object-cover object-right"
        priority
      />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/30 grid grid-cols-2">
        <div className="col-span-1 bg-secondary"></div>
        <div className="col-span-1 bg-transparent"></div>
      </div>
      <div className="absolute inset-0 w-full max-w-7xl mx-auto py-12">
        <div className="w-[50%] pr-12">
          {/* Websites badge */}
          <div className="inline-block">
            <span className="font-semibold text-neutral-300 tracking-widest">
              WEBSITES
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={` ${montserrat.className} max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 leading-tight mt-3`}
          >
            We Develop Websites that Deliver Results
          </h1>
          <p className=" flex items-center gap-3 font-sans text-neutral-400 text-md mb-2 mt-6">
            <span>
              <FaCheck size="0.9em" className="text-blue-400" />
            </span>
            We develop modern websites tailored to your needs
          </p>
          <p className=" flex items-center gap-3 font-sans text-neutral-400 text-md  mb-2">
            <span>
              <FaCheck size="0.9em" className="text-blue-400" />
            </span>
            Whether it&apos;s a business site, a content hub, or an
            informational platform, we build it.
          </p>
          <p className=" flex items-center gap-3 font-sans text-neutral-400 text-md ">
            <span>
              <FaCheck size="0.9em" className="text-blue-400" />
            </span>
            From design to deployment, we make sure your site looks great and
            works flawlessly across all devices.
          </p>
          <button className={` ${whiteButton} mt-10 `}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
