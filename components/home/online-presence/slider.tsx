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

export default function TldSlider() {
  return (
    <section className="mt-5 overflow-hidden md:mt-5">
      <div className="group relative w-full">
        <div className="">
          <div className="relative pt-0">
            <InfiniteSlider speedOnHover={10} speed={15} gap={60}>
              {availableTLDs.map((tld) => (
                <div key={tld.extension} className=" ">
                  <div className="text-sm font-semibold text-slate-300">
                    .{tld.extension}
                  </div>
                  <div className="font-sans text-sm text-neutral-300/80">
                    P{tld.price}/year
                  </div>
                </div>
              ))}
            </InfiniteSlider>

            <div className="bg-linear-to-r absolute inset-y-0 left-0 w-12 from-background md:w-20"></div>
            <div className="bg-linear-to-l absolute inset-y-0 right-0 w-12 from-background md:w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 lg:block"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 hidden h-full w-16 lg:block"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
