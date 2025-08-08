import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import React from "react";
import { Badge } from "@/components/ui/domains-slider/badge";

interface DomainTLD {
  extension: string;
  price: number;
  dotColor?: string; // Optional property for color customization
  badge?: "HOT" | "NEW"; // Optional badge for special TLDs
}

const availableTLDs: DomainTLD[] = [
  { extension: "com", price: 260, dotColor: "text-slate-600", badge: "HOT" },
  { extension: "co.bw", price: 120, dotColor: "text-white", badge: "NEW" },
  { extension: "co.za", price: 120, dotColor: "text-white" },
  {
    extension: "africa",
    price: 8.95,
    dotColor: "text-green-500",
    badge: "NEW",
  },
  { extension: "org.bw", price: 120, dotColor: "text-white", badge: "HOT" },
  { extension: "app", price: 260, dotColor: "text-slate-600", badge: "NEW" },
  { extension: "online", price: 260, dotColor: "text-green-500" },
  { extension: "net", price: 260, dotColor: "text-yellow-400" },
];

export default function TldSlider() {
  return (
    <section className="overflow-hidden">
      <div className="group relative m-auto max-w-7xl">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:pr-6">
            <p className="text-center font-sans text-xs font-semibold uppercase text-blue-400">
              Powering the best Teams
            </p>
          </div>
          <div className="relative border-l border-gray-500/50 pb-5 pt-1 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={30} gap={100}>
              {availableTLDs.map((tld) => (
                <div key={tld.extension} className="relative">
                  <div className="flex items-baseline text-base font-semibold text-slate-300">
                    {/* Dots and extension */}
                    <span
                      className={`${tld.dotColor ?? "text-blue-400"} text-4xl`}
                    >
                      .
                    </span>
                    {tld.extension.split(".").map((part, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && (
                          <span className={`text-4xl text-yellow-400`}>.</span>
                        )}
                        <span>{part}</span>
                      </React.Fragment>
                    ))}
                    {/* Badge */}
                    {tld.badge && (
                      <Badge
                        className={`ml-3 h-5 px-1 py-1 text-[0.65rem] font-bold ${
                          tld.badge === "HOT"
                            ? "bg-red-600 text-neutral-100"
                            : "bg-cyan-600 text-white"
                        }`}
                      >
                        {tld.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="font-sans text-md text-neutral-300/90">
                    P{tld.price}/year
                  </div>
                </div>
              ))}
            </InfiniteSlider>

            <div className="bg-linear-to-r absolute inset-y-0 left-0 w-20 from-background"></div>
            <div className="bg-linear-to-l absolute inset-y-0 right-0 w-20 from-background"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
