import { longSectionHeadings } from "@/app/ui/customTailwindClasses";
import React from "react";
import { Monitor, Settings, Activity } from "lucide-react";

const processSteps = [
  {
    number: "/ 01",
    title: "Select",
    description:
      "Choose your Windows VPS plan based on your application requirements and complete the ordering process.",
    icon: Settings,
  },
  {
    number: "/ 02",
    title: "Connect",
    description:
      "Connect to your Windows Server via Remote Desktop (RDP) and configure your environment with full administrator access.",
    icon: Monitor,
  },
  {
    number: "/ 03",
    title: "Monitor",
    description:
      "Track server performance, manage resources, and scale your VPS as your business grows through our control panel.",
    icon: Activity,
  },
];

export default function GetStartedVps() {
  return (
    <div className="w-full bg-gradient-to-tr from-gray-900 via-gray-900 to-primary">
      <section className="mx-auto flex w-full max-w-7xl items-center gap-x-12 px-6 pb-10 pt-12">
        <div className="flex flex-1 flex-col gap-y-6 md:gap-y-0">
          <div className="flex items-center gap-x-4">
            <h2
              className={` ${longSectionHeadings} text-pretty text-neutral-100 md:mb-7`}
            >
              Quick Windows VPS Setup
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-8 font-sans md:grid-cols-3">
            {processSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-blue-700/40 bg-blue-400/10 px-8 py-6 md:px-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-lg font-light text-blue-300">
                      {step.number}
                    </div>
                    <IconComponent className="h-6 w-6 text-blue-300" />
                  </div>
                  <div className="mt-2">
                    <h3 className="mb-2 text-lg font-bold text-neutral-100">
                      {step.title}
                    </h3>
                    <p className="font-sans text-md leading-relaxed text-neutral-200/90">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
