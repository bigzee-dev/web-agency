import Image from "next/image";
import CarouselLrg from "./carousel";
import { montserrat } from "@/app/ui/fonts";

export default function EverythingYouNeed() {
  return (
    <div className="x-padding relative w-full bg-gradient-to-b from-white via-neutral-200 to-neutral-200 py-12">
      <Image
        src="/svg/star-pattern.svg"
        height={500}
        width={750}
        alt="svg"
        className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-5 fade-out transform scale-x-[-1]"
      />

      <div className="mx-auto max-w-2xl lg:max-w-7xl z-10">
        <h2 className="text-center text-base/7 font-semibold text-blue-600">
          Increase Your Visibility
        </h2>
        <p
          className={` ${montserrat.className} max-w-lg mx-auto mt-2 text-center text-gray-800 text-3xl font-semibold leading-8 tracking-tight`}
        >
          Everything you need to elevate your online presence.
        </p>
      </div>
      <CarouselLrg />
    </div>
  );
}
