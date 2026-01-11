import type React from "react";
import { GoRocket } from "react-icons/go";

import { montserrat } from "@/app/ui/fonts";
import {
  sectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import { IconType } from "react-icons";

export default function OurValues() {
  return (
    <div className="x-padding relative isolate mx-auto max-w-6xl pb-28 pt-20">
      <div
        aria-hidden="true"
        className="sm:right-1/9 hidden sm:absolute sm:-top-28 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#277074] to-[#478a90] opacity-20"
        />
      </div>
      <div className="mb-6 flex items-center justify-center">
        <h2 className={` ${sectionHeadings} max-w-6xl`}>Our Values</h2>
      </div>

      <p
        className={` ${sectionSubHeadings} mx-auto max-w-4xl text-center text-gray-600`}
      >
        We value inclusivity and clear communication, listen to our clients,
        focus on practical solutions, and continuously improve our work.{" "}
      </p>

      <div className="mx-auto mt-20 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <ValueCard
          title="Quality Work"
          description="Our commitment to excellence ensures outstanding service and high standards."
          background="valueCard1"
          svg={GoRocket}
        />

        <ValueCard
          title="Innovation"
          description="We invest in innovation to ensure clients receive the best solutions."
          background="valueCard2"
          svg={GoRocket}
        />
        <ValueCard
          title="Customer Success"
          description="We build long-term partnerships to ensure success and support online growth."
          background="valueCard2"
          svg={GoRocket}
        />

        <ValueCard
          title="Build for Africa"
          description="Local collaboration drives digital solutions for Africa’s challenges."
          background="valueCard4"
          svg={GoRocket}
        />
      </div>
    </div>
  );
}

interface ValueCardProps {
  title: string;
  description: string;
  background?: string;
  svg?: IconType;
}

function ValueCard({ title, description, background, svg }: ValueCardProps) {
  const Icon = svg;
  return (
    <div className="flex flex-col rounded-2xl border border-gray-500 bg-neutral-100 p-7 shadow-md">
      <div className={`mb-2 h-10 w-10 rounded-lg bg-gray-800 p-2 shadow-md`}>
        {Icon && <Icon className="h-full w-full text-white" />}
      </div>
      <h3
        className={` ${montserrat.className} mt-2 text-xl font-semibold text-gray-800`}
      >
        {title}
      </h3>

      <div className="mt-1">
        <p className="font-sans text-md text-gray-600 md:w-full">
          {description}
        </p>
      </div>
    </div>
  );
}
