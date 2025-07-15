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
    <div className="x-padding relative mx-auto max-w-7xl pb-24 pt-20">
      <div className="mb-6 flex items-center justify-center">
        <h2 className={` ${sectionHeadings} max-w-6xl`}>Our Values</h2>
      </div>

      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-600">
        Our brand&apos;s heart is a solid commitment to inclusivity and a
        client-centric ethos. We prioritise our clients needs while staying
        dedicated to constant progress.{" "}
        <strong>Our core values include:</strong>
      </p>

      <div className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
    <div className="flex h-[12rem] flex-col items-center justify-center gap-y-4">
      <div className={` ${background} mb-2 h-16 w-16 rounded-lg p-3 shadow-md`}>
        <img src={svg} alt="svg"></img>
      </div>
      <h3
        className={` ${notoSans.className} text-2xl font-medium text-gray-900`}
      >
        {title}
      </h3>

      <div className="px-4 pb-5 text-center">
        <p className="font-sans text-md text-gray-700 md:w-full">
          {description}
        </p>
      </div>
    </div>
  );
}
