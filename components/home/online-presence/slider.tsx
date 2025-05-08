import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";

interface DomainTLD {
  extension: string;
  price: number;
}

const availableTLDs: DomainTLD[] = [
  { extension: "com", price: 18.95 },
  { extension: "co.zw", price: 5.0 },
  { extension: "co.za", price: 6.88 },
  { extension: "africa", price: 8.95 },
  { extension: "co.bw", price: 18.95 },
  { extension: "app", price: 5.0 },
  { extension: "online", price: 6.88 },
  { extension: "net", price: 8.95 },
];

export default function Slider() {
  return (
    <section className="overflow-hidden flex-1  pl-2">
      <div className="group relative m-auto max-w-7xl">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:border-gray-400/70 md:pr-6">
            {/* <p className="text-end text-sm text-slate-400">
              Powering the best teams
            </p> */}
          </div>
          <div className="relative py-6 md:w-[calc(100%-1rem)] border-l border-gray-500/50">
            <InfiniteSlider speedOnHover={20} speed={30} gap={112}>
              {availableTLDs.map((tld) => (
                <div key={tld.extension} className=" ">
                  <div className="text-slate-300 font-semibold">
                    .{tld.extension}
                  </div>
                  <div className="font-sans text-neutral-300/80 text-md">
                    P{tld.price}/year
                  </div>
                </div>
              ))}
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
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
