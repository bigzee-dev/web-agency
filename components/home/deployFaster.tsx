import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import EverythingCarousel from "./everything-need.tsx";

export default function DeployFaster() {
  return (
    <div className="relative w-full bg-gradient-to-b from-white via-neutral-300 to-neutral-200 pt-20 pb-24">
      <Image
        src="/svg/star-pattern.svg"
        height={500}
        width={750}
        alt="svg"
        className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-10 fade-out"
      />

      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 z-10">
        <h2 className="text-center text-base/7 font-semibold text-blue-600">
          Increase Your Visibility
        </h2>
        <p
          className={` ${montserrat.className} mx-auto mt-2 max-w-lg text-center text-gray-700 text-3xl font-semibold leading-10  sm:text-5xl `}
        >
          Everything you need to elevate your online presence.
        </p>
      </div>
      <EverythingCarousel />
    </div>
  );
}
