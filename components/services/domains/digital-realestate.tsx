import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

const stats = [
  {
    value: "73%",
    description: "of consumers judge credibility based on domain quality",
  },
  {
    value: "2.5x",
    description: "higher click-through rates with branded domains",
  },
  {
    value: "46%",
    description: "increase in brand recall with memorable domains",
  },
];

export default function DigitalRealEstate() {
  return (
    <div className="mx-auto mb-4 mt-28 grid max-w-7xl grid-cols-1 rounded-none border border-gray-300 bg-gradient-to-r from-primary/5 to-primary/10 md:grid-cols-12 md:rounded-2xl">
      <div className="relative col-span-1 h-56 md:col-span-4 md:h-full">
        <Image
          src="/img/domains/laptop-domains.jpg"
          alt="img"
          fill
          className="rounded-none object-cover md:rounded-l-2xl"
        />
      </div>
      <div className="col-span-1 p-14 text-center md:col-span-8">
        <h3
          className={`${montserrat.className} mb-14 text-2xl font-bold text-gray-800 md:text-4xl`}
        >
          Your Domain is your <br />
          Digital Real Estate
        </h3>

        <div className="grid gap-8 text-center md:grid-cols-3">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="mb-3 text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <p className="font-sans text-sm text-gray-700">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
