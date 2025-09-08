import {
  longSectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
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
    <section className="mx-auto flex w-full max-w-7xl gap-x-8 pb-12 pt-10">
      <div className="w-[13rem]">
        <img
          src="/svg/linux-vps/kvm-tower.svg"
          alt="Get Started Illustration"
          className="h-fit w-auto"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className={` ${longSectionHeadings} mb-6 text-pretty`}>
          VPS Setup Made Simple
        </h2>
        <p className={` ${sectionSubHeadings} mb-8 max-w-xl text-pretty`}>
          From design to launch, we handle it all. Get a modern, mobile-friendly
          website that helps your business attract more customers..
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 font-sans md:grid-cols-3">
          {processSteps.map((step, idx) => (
            <div key={idx}>
              <div className="text-lg font-light text-gray-500">
                {step.number}
              </div>
              <div className="mt-2">
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {step.title}
                </h3>
                <p className="font-sans text-md leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
