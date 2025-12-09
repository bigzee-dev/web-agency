import { longSectionHeadings } from "@/app/ui/customTailwindClasses";
import React from "react";

const processSteps = [
  {
    number: "/ 01",
    title: "Discover",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...",
  },
  {
    number: "/ 02",
    title: "Build",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...",
  },
  {
    number: "/ 03",
    title: "Deliver",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...",
  },
];

export default function GetStartedVps() {
  return (
    <div className="w-full bg-gradient-to-tr from-gray-900 via-gray-900 to-primary">
      <section className="mx-auto flex w-full max-w-7xl items-center gap-x-12 pb-8 pt-6">
        <div className="hidden w-[13rem] md:block">
          <img
            src="/svg/linux-vps/kvm-tower.svg"
            alt="Get Started Illustration"
            className="h-fit w-auto"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-x-4">
            <img
              src="/svg/linux-vps/kvm-tower.svg"
              alt="Get Started Illustration"
              className="h-fit w-[12rem] md:hidden"
            />
            <h2
              className={` ${longSectionHeadings} mb-14 text-pretty text-neutral-300`}
            >
              VPS Setup Made Simple
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-8 font-sans md:grid-cols-3">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="border border-gray-700 px-8 py-4 md:px-6"
              >
                <div className="text-lg font-light text-gray-500">
                  {step.number}
                </div>
                <div className="mt-2">
                  <h3 className="mb-2 text-lg font-bold text-blue-400">
                    {step.title}
                  </h3>
                  <p className="font-sans text-md leading-relaxed text-neutral-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
