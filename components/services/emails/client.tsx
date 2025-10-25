import {
  btnDimensions,
  longSectionHeadings,
  sectionHeadings,
} from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import { Smartphone, TabletSmartphone, TvMinimal } from "lucide-react";

import React from "react";
import { montserrat } from "@/app/ui/fonts";

const clientSections = [
  {
    icon: TvMinimal,
    title: "Use Your Favorite Desktop Client",
    description:
      "Whether it's Outlook or any other popular client like Thunderbird or Apple Mail, you can use it with Deltaworx.",
  },
  {
    icon: TabletSmartphone,
    title: "Sync Your Mobile Phone or Tablet",
    description:
      "Access your email on the go by syncing it with your mobile devices. Compatible with iOS and Android.",
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
            {/* <div className="flex items-center justify-center gap-x-8 text-neutral-300">
              {icons.map((Icon, idx) => (
                <div
                  className="rounded-full border border-gray-700 bg-gray-800/90 p-3 text-blue-300"
                  key={idx}
                >
                  <Icon key={idx} size="1.7em" />
                </div>
              ))}
            </div> */}
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
                  className="rounded-2xl border border-gray-500/30 bg-black/30 px-8 py-6"
                >
                  <div className="mb-3 inline-block rounded-full border border-gray-700 bg-primary/20 p-3 text-center text-blue-300">
                    <Icon size="1.8em" />
                  </div>
                  <h2
                    className={` ${montserrat.className} mb-3 text-xl font-semibold text-blue-300`}
                  >
                    {section.title}
                  </h2>
                  <p className="font-sans text-base leading-relaxed text-neutral-300/75">
                    {section.description}
                  </p>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </section>

      {/* WebMail Section */}
      <section className="px-6 pt-7">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className={` ${montserrat.className} mb-6 text-3xl font-semibold text-blue-300 md:text-2xl`}
          >
            {"...And there's the Deltaworx WebMail"}
          </h2>
          <p className="font-sans text-lg leading-relaxed text-neutral-300/85">
            {
              "Forget about the webmail apps you've used before. Yes, we mean it — just play around with the Deltaworx Webmail for a day and you might even realize that you don't need a desktop client."
            }
          </p>
        </div>
        <div className="mt-2 flex w-full items-center justify-center">
          <Link
            href="https://demo.crane.email/interface/root#/login"
            target="_blank"
            rel="noopener noreferrer"
            className={` ${btnDimensions} mt-10 inline-flex items-center justify-center bg-blue-300 text-gray-950 shadow-sm hover:bg-white/10`}
          >
            Checkout Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
