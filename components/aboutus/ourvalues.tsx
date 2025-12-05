import type React from "react";

import { montserrat } from "@/app/ui/fonts";
import {
  sectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";

export default function OurValues() {
  return (
    <div className="x-padding relative mx-auto max-w-6xl pb-28 pt-20">
      <div className="mb-6 flex items-center justify-center">
        <h2 className={` ${sectionHeadings} max-w-6xl`}>Our Values</h2>
      </div>

      <p
        className={` ${sectionSubHeadings} mx-auto max-w-4xl text-center text-gray-600`}
      >
        We value inclusivity, clear communication, and steady improvement. We
        listen to our clients, focus on practical solutions, and keep learning
        so we can do better work together.{" "}
      </p>

      <div className="mx-auto mt-20 grid w-full max-w-4xl grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2">
        <ValueCard
          title="Quality Work"
          description="Our commitment to excellence drives us to provide outstanding customer service while maintaining the highest standards across our infrastructure, services, and support."
          background="valueCard1"
          svg="/svg/about-us/checked.svg"
        />

        <ValueCard
          title="Innovation"
          description="We continuously invest in new technologies and forward-thinking approaches to stay ahead in the evolving digital landscape, ensuring our clients always benefit from the best solutions available."
          background="valueCard2"
          svg="/svg/about-us/creativity.svg"
        />
        <ValueCard
          title="Customer Success"
          description="We build long-term partnerships with our clients to ensure the success of their projects and broader goals. Our aim is to empower them to grow and generate income through the internet."
          background="valueCard2"
          svg="/svg/about-us/growth.svg"
        />

        <ValueCard
          title="Build for Africa"
          description="We develop solutions for Africa’s unique landscape, tackling regional challenges and unlocking new opportunities. We actively collaborate with African companies to pursue a common vision, creating digital products made by Africans, for Africans."
          background="valueCard4"
          svg="/svg/about-us/rocket.svg"
        />
      </div>
    </div>
  );
}

interface ValueCardProps {
  title: string;
  description: string;
  background?: string;
  svg?: string;
}

function ValueCard({ title, description, background, svg }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <div className={` ${background} mb-2 h-14 w-14 rounded-lg p-3 shadow-md`}>
        <img src={svg} alt="svg"></img>
      </div>
      <h3
        className={` ${montserrat.className} text-2xl font-semibold text-gray-800`}
      >
        {title}
      </h3>

      <div className="pb-5">
        <p className="font-sans text-md text-gray-600 md:w-full">
          {description}
        </p>
      </div>
    </div>
  );
}
