import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";
import { whiteButton } from "@/app/ui/customTailwindClasses";

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
          <p className="font-sans text-blue-400 text-md bg-white/5 p-6 mt-8 border border-gray-500/50">
            We develop modern websites tailored to your needs — whether
            it&apos;s a business site, a content hub, or an informational
            platform. From design to deployment, we make sure your site looks
            great and works flawlessly across all devices.
          </p>
          <button className={` ${whiteButton} mt-10 `}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
