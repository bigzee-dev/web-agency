import React from "react";
import {
  btnDimensions,
  greenButton,
  longSectionHeadings,
  whiteButton,
} from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdOnDeviceTraining } from "react-icons/md";

const clientSections = [
  {
    icon: RiComputerFill,
    title: "Use a Desktop Client or Browser",
    description:
      "Whether it's Outlook or any other popular client like Thunderbird or Apple Mail, you can use it with Deltaworx.",
  },
  {
    icon: MdOnDeviceTraining,
    title: "Sync Your Mobile Phone or Tablet",
    description:
      "Access your email on the go by syncing it with your mobile devices. Compatible with iOS and Android.",
  },
];

const devices = [
  {
    icon: FaGooglePlay,
    title: "Android Play Store",
  },
  {
    icon: FaAppStoreIos,
    title: "IOS App Store",
  },
  {
    icon: FaWindows,
    title: "Windows",
  },
  {
    icon: FaApple,
    title: "MacOS",
  },
  {
    icon: FaGlobe,
    title: "Browser",
  },
];

export default function EmailClient() {
  // const icons = [Smartphone, TvMinimal, TabletSmartphone];
  return (
    <main className="relative isolate bg-gradient-to-tr from-secondary via-secondary to-primary pb-16 pt-20 text-neutral-200">
      {/* Blur component for background effect */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-10"
        />
      </div>
      {/* Client of Choice Section */}
      <section className="px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-y-16">
          <div className="space-y-8">
            <h2
              className={` ${longSectionHeadings} text-center font-medium text-neutral-100`}
            >
              {"Access your Email from different devices..."}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {clientSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-500/30 bg-neutral-100/95 px-8 py-4"
                >
                  <div className="mb-3 inline-block rounded-full border border-secondary/50 bg-neutral-300/50 p-3 text-center text-gray-800">
                    <Icon size="1.8em" />
                  </div>
                  <h2
                    className={` ${montserrat.className} mb-3 text-xl font-semibold text-gray-800`}
                  >
                    {section.title}
                  </h2>
                  <p className="font-sans text-base leading-relaxed text-gray-700">
                    {section.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="mx-auto mt-14 flex max-w-4xl justify-between">
        {devices.map((device, idx) => {
          const Icon = device.icon;
          return (
            <div
              key={idx}
              className="items- m-4 flex flex-col items-center gap-y-6 py-2"
            >
              <Icon size="3em" className="text-slate-300" />
              <span className="font-sans text-white/90">{device.title}</span>
            </div>
          );
        })}
      </section>
    </main>
  );
}
