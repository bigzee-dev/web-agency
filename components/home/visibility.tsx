import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { title } from "process";
import { TbWorldWww } from "react-icons/tb";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TbMailCheck } from "react-icons/tb";
import { TbAt } from "react-icons/tb";
import { TbTrendingUp } from "react-icons/tb";

const iconProps = {
  size: "1.65em",
  strokeWidth: 1.6,
  className: "text-neutral-400",
};

const cards = [
  {
    title: "SEO",
    description:
      "Your website needs to rank on page one of Google - this is called Search Engine Optimisation (SEO) and its when Google sends you!",
    icon: <HiOutlineServerStack {...iconProps} />,
  },
  {
    title: "Websites",
    description:
      "Websites need to SELL for you and get you more customers - this is called Search Engine Optimisation ",
    icon: <TbMailCheck {...iconProps} />,
  },
  {
    title: "Social Media",
    description:
      "Social Media is a great way to reach out to your customers - this is called Search Engine Optimisation ",
    icon: <TbAt {...iconProps} />,
  },
];

export default function Visibility() {
  return (
    <main className="relative isolate overflow-hidden x-padding w-full h-full flex flex-col items-center justify-center gap-y-24 py-4 md:pt-12 md:pb-16  bg-gray-900 shadow-lg">
      {/* blur component */}
      <div
        aria-hidden="true"
        className="absolute left-1/4 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[900/678] w-[100rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-15"
        />
      </div>
      <div className="flex flex-col items-center gap-y-12 w-full px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-base/7 font-smedium text-neutral-300/80">
            Increase Your Visibility
          </h2>
          <p
            className={` ${montserrat.className} max-w-lg mx-auto mt-2 text-center text-neutral-100 text-3xl font-semibold leading-9 tracking-tight`}
          >
            Everything you need to elevate your online presence.
          </p>
        </div>
        {/* cards */}
        <div className="grid md:grid-cols-3 gap-x-12 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 md:gap-y-4 max-w-[360px] px-6 pt-6 pb-4 bg-gray-800/40 outline outline-1 outline-gray-600/60 rounded-xl"
            >
              <div className="flex items-center justify-center w-12 h-12  bg-neutral-300/10  outline outline-1 outline-offset-1 outline-white/30 rounded-lg">
                {card.icon}
              </div>
              <div>
                <h4 className="font-sans text-2xl font-semibold text-blue-400 mb-3">
                  {card.title}
                </h4>
                <p className="font-sans text-md text-neutral-300/80">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
