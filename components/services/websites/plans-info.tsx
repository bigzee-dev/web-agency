import { montserrat } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { FaCircleQuestion } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { Clock8 } from "lucide-react";

const features = [
  "Unlimited products",
  "Unlimited subscribers",
  "Advanced analytics",
  "Dedicated support representative",
  //   "Marketing automations",
  //   "Custom integrations",
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PlansInfo() {
  return (
    <div className="relative isolate max-w-5xl mx-auto py-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[80rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-15"
        />
      </div>
      <section>
        <h4 className="text-neutral-300 text-5xl font-extrabold  bg-gradient-to-r from-primary via-cyan-500 to-blue-700 text-transparent bg-clip-text mb-10 leading-normal">
          Pricing Plans
        </h4>
      </section>
      {/* Top Border */}
      <div className="relative">
        <div className="w-full h-px bg-gray-400/60" />
        <div className="absolute top-0 left-0 w-16 h-px bg-white" />
        <div className="absolute top-0 left-0 w-10 h-px bg-black" />
      </div>

      <article className="max-w-5xl py-16 px-0">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
          {/* Left Column - Logo and Details */}
          <div className="col-span-5 space-y-4 mb-8 lg:mb-0">
            <div className="relative isolate flex flex-col gap-0.5 w-36 h-36 radial-background rounded-full items-center justify-center">
              <h2 className="font-sans bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-400 text-transparent bg-clip-text text-2xl font-bold">
                Starter
              </h2>
              {/* <span className="text-neutral-300/80 mt-1">
                <CircleHelp size="1.5em" />
              </span> */}
            </div>
            {/* <h2 className="text-2xl font-semibold">Starter</h2> */}
            <div className="text-gray-500 text-md space-y-4">
              <div>
                <div className="text-xs text-gray-600 font-medium mb-1">
                  Approx:
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">P5000-P6000</span>
                  <span className="text-gray-800 align-middlex ml-2">
                    <FaCircleQuestion size="1.3em" />
                  </span>
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">
                  <CgNotes size="1.5em" />
                </div>
                <span className="text-gray-800">3-5 pages</span>
              </div>
              <div>
                <div className="text-gray-500 mb-1">
                  <Clock8 />
                </div>
                <span className="text-gray-800">2-3 weeks</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-7">
            <h1
              className={` ${montserrat.className} text-3xl text-gray-900 font-semibold lg:text-3xl `}
            >
              Skip the bank, borrow from those you trust
            </h1>

            <p className="mt-6 font-sans text-gray-600 text-base leading-relaxed">
              FamilyFund is a crowdfunding platform for friends and family.
              Allowing users to take personal loans from their network without a
              traditional financial institution.
            </p>

            <p className="mt-6 font-sans text-gray-600 text-base leading-relaxed">
              We developed a custom CMS to power their blog with and optimised
              their site to rank higher for the keywords "Gary Vee" and "Tony
              Robbins".
            </p>

            <Button
              variant="default"
              className={` ${btnDimensions} bg-secondary text-neutral-200  mt-8 `}
            >
              Read case study
            </Button>

            <div className="border-l border-gray-400/70 mt-12">
              <div className="pl-6 grid grid-cols-2 space-y-1">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className=" font-sans text-base text-gray-600 flex items-center gap-x-3"
                  >
                    <FaCheck
                      aria-hidden="true"
                      className={classNames("text-blue-600 h-4 w-3 flex-none")}
                    />
                    {feature}
                  </li>
                ))}
              </div>
              {/* <p className="text-gray-600 italic">
                "Working with Studio, we felt more like a partner than a
                customer. They really resonated with our mission to change the
                way people convince their parents to cash out their pensions."
              </p>
              <footer className="mt-4 font-medium">
                Debra Fiscal, CEO of FamilyFund
              </footer> */}
            </div>
          </div>
        </div>
      </article>

      {/* Top Border */}
      <div className="relative">
        <div className="w-full h-px bg-gray-400/60" />
        <div className="absolute top-0 left-0 w-16 h-px bg-white" />
        <div className="absolute top-0 left-0 w-10 h-px bg-black" />
      </div>

      <article className="max-w-5xl py-16 px-0">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
          {/* Left Column - Logo and Details */}
          <div className="col-span-5 space-y-4 mb-8 lg:mb-0">
            <div className="relative isolate flex flex-col gap-0.5 w-36 h-36 radial-secondary rounded-full items-center justify-center">
              <h2 className="font-sans text-white text-2xl font-bold">
                Business
              </h2>
              {/* <span className="text-neutral-300/80 mt-1">
                <CircleHelp size="1.5em" />
              </span> */}
            </div>
            {/* <h2 className="text-2xl font-semibold">Starter</h2> */}
            <div className="text-gray-500 text-md space-y-4">
              <div>
                <div className="text-xs text-gray-600 font-medium mb-1">
                  Approx:
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">P5000-P6000</span>
                  <span className="text-gray-800 align-middlex ml-2">
                    <FaCircleQuestion size="1.3em" />
                  </span>
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">
                  <CgNotes size="1.5em" />
                </div>
                <span className="text-gray-800">3-5 pages</span>
              </div>
              <div>
                <div className="text-gray-500 mb-1">
                  <Clock8 />
                </div>
                <span className="text-gray-800">2-3 weeks</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-7">
            <h1
              className={` ${montserrat.className} text-3xl text-gray-900 font-semibold lg:text-3xl `}
            >
              Skip the bank, borrow from those you trust
            </h1>

            <p className="mt-6 font-sans text-gray-600 text-base leading-relaxed">
              FamilyFund is a crowdfunding platform for friends and family.
              Allowing users to take personal loans from their network without a
              traditional financial institution.
            </p>

            <p className="mt-6 font-sans text-gray-600 text-base leading-relaxed">
              We developed a custom CMS to power their blog with and optimised
              their site to rank higher for the keywords "Gary Vee" and "Tony
              Robbins".
            </p>

            <Button
              variant="default"
              className={` ${btnDimensions} bg-secondary text-neutral-200  mt-8 `}
            >
              Read case study
            </Button>

            <div className="border-l border-gray-400/70 mt-12">
              <div className="pl-6 grid grid-cols-2 space-y-1">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className=" font-sans text-base text-gray-600 flex items-center gap-x-3"
                  >
                    <FaCheck
                      aria-hidden="true"
                      className={classNames("text-blue-600 h-4 w-3 flex-none")}
                    />
                    {feature}
                  </li>
                ))}
              </div>
              {/* <p className="text-gray-600 italic">
                "Working with Studio, we felt more like a partner than a
                customer. They really resonated with our mission to change the
                way people convince their parents to cash out their pensions."
              </p>
              <footer className="mt-4 font-medium">
                Debra Fiscal, CEO of FamilyFund
              </footer> */}
            </div>
          </div>
        </div>
      </article>

      {/* Top Border */}
      <div className="relative">
        <div className="w-full h-px bg-gray-400/60" />
        <div className="absolute top-0 left-0 w-16 h-px bg-white" />
        <div className="absolute top-0 left-0 w-10 h-px bg-black" />
      </div>

      <article className="max-w-5xl py-16 px-0">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
          {/* Left Column - Logo and Details */}
          <div className="col-span-5 space-y-4 mb-8 lg:mb-0">
            <div className="relative isolate flex flex-col gap-0.5 w-36 h-36 radial-secondary rounded-full items-center justify-center">
              <h2 className="font-sans text-white text-2xl font-bold">
                Business
              </h2>
              {/* <span className="text-neutral-300/80 mt-1">
                <CircleHelp size="1.5em" />
              </span> */}
            </div>
            {/* <h2 className="text-2xl font-semibold">Starter</h2> */}
            <div className="text-gray-500 text-md space-y-4">
              <div>
                <div className="text-xs text-gray-600 font-medium mb-1">
                  Approx:
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">P5000-P6000</span>
                  <span className="text-gray-800 align-middlex ml-2">
                    <FaCircleQuestion size="1.3em" />
                  </span>
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">
                  <CgNotes size="1.5em" />
                </div>
                <span className="text-gray-800">3-5 pages</span>
              </div>
              <div>
                <div className="text-gray-500 mb-1">
                  <Clock8 />
                </div>
                <span className="text-gray-800">2-3 weeks</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-7">
            <h1
              className={` ${montserrat.className} text-3xl text-gray-900 font-semibold lg:text-3xl `}
            >
              Skip the bank, borrow from those you trust
            </h1>

            <p className="mt-6 font-sans text-gray-600 text-base leading-relaxed">
              FamilyFund is a crowdfunding platform for friends and family.
              Allowing users to take personal loans from their network without a
              traditional financial institution.
            </p>

            <p className="mt-6 font-sans text-gray-600 text-base leading-relaxed">
              We developed a custom CMS to power their blog with and optimised
              their site to rank higher for the keywords "Gary Vee" and "Tony
              Robbins".
            </p>

            <Button
              variant="default"
              className={` ${btnDimensions} bg-secondary text-neutral-200  mt-8 `}
            >
              Read case study
            </Button>

            <div className="border-l border-gray-400/70 mt-12">
              <div className="pl-6 grid grid-cols-2 space-y-1">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className=" font-sans text-base text-gray-600 flex items-center gap-x-3"
                  >
                    <FaCheck
                      aria-hidden="true"
                      className={classNames("text-blue-600 h-4 w-3 flex-none")}
                    />
                    {feature}
                  </li>
                ))}
              </div>
              {/* <p className="text-gray-600 italic">
                "Working with Studio, we felt more like a partner than a
                customer. They really resonated with our mission to change the
                way people convince their parents to cash out their pensions."
              </p>
              <footer className="mt-4 font-medium">
                Debra Fiscal, CEO of FamilyFund
              </footer> */}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
