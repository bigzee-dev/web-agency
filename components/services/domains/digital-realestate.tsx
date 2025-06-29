import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

export default function DigitalRealEstate() {
  return (
    <div className="mx-auto mb-20 mt-16 grid max-w-7xl grid-cols-12 rounded-2xl border border-gray-300 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="relative col-span-4 h-full">
        <Image
          src="/img/home/globe-tech.jpg"
          alt="img"
          fill
          className="rounded-l-2xl object-cover"
        />
      </div>
      <div className="col-span-8 p-12 text-center">
        <h3
          className={`${montserrat.className} mb-12 text-2xl font-bold text-gray-800 md:text-4xl`}
        >
          Your Domain is your <br />
          Digital Real Estate
        </h3>

        <div className="grid gap-8 text-center md:grid-cols-3">
          <div>
            <div className="mb-2 text-5xl font-bold text-primary">73%</div>
            <p className="text-sm text-muted-foreground">
              of consumers judge credibility based on domain quality
            </p>
          </div>
          <div>
            <div className="mb-2 text-5xl font-bold text-primary">2.5x</div>
            <p className="text-sm text-muted-foreground">
              higher click-through rates with branded domains
            </p>
          </div>
          <div>
            <div className="mb-2 text-5xl font-bold text-primary">46%</div>
            <p className="text-sm text-muted-foreground">
              increase in brand recall with memorable domains
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
