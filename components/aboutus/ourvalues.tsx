import type React from "react";
import {
  TransparencyIcon,
  CreativityIcon,
  GrowthIcon,
  SuccessIcon,
} from "./customicons";
import { montserrat } from "@/app/ui/fonts";

export default function OurValues() {
  return (
    <div className="x-padding mx-auto pb-20 pt-20 max-w-7xl">
      <div className="flex items-center justify-center mb-6">
        <h2
          className={` ${montserrat.className} max-w-6xl text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight`}
        >
          Our Values
        </h2>
      </div>

      <p className="text-center text-gray-600 mb-10 max-w-4xl mx-auto">
        Our brand's heart is a solid commitment to inclusivity and a
        client-centric ethos. We prioritise our clients' needs while staying
        dedicated to constant progress. Our core values include:
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ValueCard
          icon={<TransparencyIcon />}
          title="Transparency"
          description="A clear path to success through expert direction"
        />

        <ValueCard
          icon={<CreativityIcon />}
          title="Creativity"
          description="Innovative ideas powered by the most gifted minds in the industry"
        />

        <ValueCard
          icon={<GrowthIcon />}
          title="Growth"
          description="Committed to creating progressive outcomes for our clients"
        />

        <ValueCard
          icon={<SuccessIcon />}
          title="Success"
          description="Result driven activities in a constant state of refinement"
        />
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="font-sans text-gray-700 text-md">{description}</p>
    </div>
  );
}
