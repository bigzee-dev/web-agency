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

      <p className="text-center text-gray-600 mb-10 max-w-4xl mx-auto">
        Our brand&apos;s heart is a solid commitment to inclusivity and a
        client-centric ethos. We prioritise our clients needs while staying
        dedicated to constant progress. Our core values include:
      </p>

      <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
        <ValueCard
          icon={<TransparencyIcon />}
          title="Transparency"
          description="A clear path to success through expert direction"
          background="valueCard1"
        />

        <ValueCard
          icon={<CreativityIcon />}
          title="Creativity"
          description="Innovative ideas powered by the most gifted minds in the industry"
          background="valueCard2"
        />

        <ValueCard
          icon={<GrowthIcon />}
          title="Growth"
          description="Committed to creating progressive outcomes for our clients"
          background="valueCard2"
        />

        <ValueCard
          icon={<SuccessIcon />}
          title="Success"
          description="Result driven activities in a constant state of refinement"
          background="valueCard4"
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
}

function ValueCard({ icon, title, description, background }: ValueCardProps) {
  return (
    <div
      className={` ${background} relative p-6 border border-gray-400 rounded-lg shadow-md`}
    >
      <h3
        className={` ${notoSans.className} absolute top-4 left-5 text-xl font-medium mb-2 text-white `}
      >
        {title}
      </h3>
      <div className="flex flex-col items-center text-center mt-10">
        <div className="mb-5">{icon}</div>

        <p className="font-sans text-white text-md md:w-[90%]">{description}</p>
      </div>
    </div>
  );
}
