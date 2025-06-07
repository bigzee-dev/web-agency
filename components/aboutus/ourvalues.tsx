import type React from "react";
import {
  TransparencyIcon,
  CreativityIcon,
  GrowthIcon,
  SuccessIcon,
} from "./customicons";
import { montserrat } from "@/app/ui/fonts";
import { notoSans } from "@/app/ui/fonts";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";

export default function OurValues() {
  return (
    <div className="x-padding relative mx-auto pb-24 pt-20 max-w-7xl">
      <div className="flex items-center justify-center mb-6">
        <h2 className={` ${sectionHeadings} max-w-6xl`}>Our Values</h2>
      </div>

      <p className="text-lg text-center text-gray-600 mb-10 max-w-4xl mx-auto">
        Our brand&apos;s heart is a solid commitment to inclusivity and a
        client-centric ethos. We prioritise our clients needs while staying
        dedicated to constant progress.{" "}
        <strong>Our core values include:</strong>
      </p>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        <ValueCard
          icon={<TransparencyIcon />}
          title="Transparency"
          description="A clear path to success through expert direction"
          background="valueCard1"
          svg="/svg/about-us/checked.svg"
        />

        <ValueCard
          icon={<CreativityIcon />}
          title="Creativity"
          description="Innovative ideas powered by the most gifted minds in the industry"
          background="valueCard2"
          svg="/svg/about-us/creativity.svg"
        />
        <ValueCard
          icon={<SuccessIcon />}
          title="Success"
          description="Result driven activities in a constant state of refinement"
          background="valueCard4"
          svg="/svg/about-us/growth.svg"
        />

        <ValueCard
          icon={<GrowthIcon />}
          title="Growth"
          description="Committed to creating progressive outcomes for our clients"
          background="valueCard2"
          svg="/svg/about-us/rocket.svg"
        />
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  background?: string;
  svg?: string;
}

function ValueCard({
  icon,
  title,
  description,
  background,
  svg,
}: ValueCardProps) {
  return (
    <div className="relative h-[16rem] flex flex-col items-center justify-center bg-gray-200 border border-gray-300 ">
      <h3
        className={` ${notoSans.className} absolute top-5 left-5 text-2xl font-medium text-secondary `}
      >
        {title}
      </h3>
      <div
        className={` ${background} w-20 h-20  p-3 mb-2  rounded-lg shadow-md`}
      >
        <img src={svg} alt="svg"></img>
      </div>
      <div className="absolute bottom-0 left-0 pb-5 px-4 text-center ">
        <p className="font-sans text-gray-700 text-md md:w-full">
          {description}
        </p>
      </div>
    </div>
  );
}
