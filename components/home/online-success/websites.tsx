import { Badge } from "@/components/ui/badge";
import { ChevronRight, Lock } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { montserrat, notoSans } from "@/app/ui/fonts";
console.log("Imported font object:", notoSans);

const features = [
  "Visually stunning, secure websites",
  "Mobile Responsiveness, works flawlessly on all devices",
  "AI Integration, SEO Optimization, Site Analytics ",
];

export default function Websites() {
  return (
    <div className="relative isolate w-full overflow-hidden rounded-3xl bg-gray-800 p-4 pt-5 text-white sm:p-5 md:p-8 md:px-12">
      {/* Blur component */}
      <div
        aria-hidden="true"
        className="absolute left-1/4 top-0 -z-10 -translate-x-1/2 overflow-hidden blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#89a6fc] opacity-15"
        />
      </div>
      <Badge className="absolute left-12 top-12 hidden bg-[#6558F5] text-white hover:bg-[#6558F5] lg:block">
        FREE WEBSITE MIGRATION
      </Badge>

      <div className="absolute right-12 top-10 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-[#2D1576] lg:flex">
        <Lock className="h-4 w-4" />
        <span className="text-sm font-medium">SSL certificate</span>
        <Badge
          variant="secondary"
          className="bg-[#E3F9E5] text-[#14532D] hover:bg-[#E3F9E5] hover:text-[#14532D]"
        >
          ACTIVE
        </Badge>
      </div>
      {/* <div className="block w-full rounded-lg border border-gray-500/30 bg-white/10 p-4 text-center md:hidden">
        <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-3xl font-semibold text-transparent">
          Websites
        </span>{" "}
      </div> */}
      <Badge
        variant="secondary"
        className={`block max-w-max bg-background/95 text-center font-semibold text-secondary lg:hidden`}
      >
        WEBSITES
      </Badge>
      <div className="mt-4 grid grid-cols-1 items-center gap-x-8 gap-y-8 lg:mt-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2
            className={`mb-4 text-3xl font-bold text-neutral-300 md:mb-6 md:text-4xl`}
          >
            Professional, high-converting websites built to grow your business
          </h2>
          <p className="font-sans text-md leading-relaxed text-neutral-300">
            We develop fast, secure websites designed to turn visitors into
            customers — and support your long-term growth.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-300/85">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-x-3 font-sans text-md"
              >
                <FaCheck
                  aria-hidden="true"
                  className="h-auto w-2.5 flex-none text-gray-400"
                />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/websites"
            className={` ${montserrat.className} mx-auto mt-6 flex w-max items-center text-center text-xl font-semibold text-blue-400 md:text-2xl lg:ml-0 lg:mr-auto lg:mt-8 lg:text-start`}
          >
            Let&apos;s Build Your Website{" "}
            <ChevronRight
              aria-hidden="true"
              className="flex-none font-medium text-blue-400 lg:pl-2"
              size="1.35em"
            />
          </Link>
        </div>
        <div className="mt-auto rounded-lg border border-gray-700 lg:col-span-5">
          <img
            src="/svg/home/websites-cms.svg"
            alt="Website"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
