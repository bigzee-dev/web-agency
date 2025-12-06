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
    <div className="relative isolate w-full overflow-hidden rounded-3xl bg-gray-800 p-4 pt-5 text-white sm:p-5 md:p-8 md:px-14">
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
      <Badge className="absolute left-12 top-12 hidden bg-[#6558F5] uppercase text-white hover:bg-[#6558F5] lg:block">
        FREE WEBSITE MIGRATION
      </Badge>

      <div className="absolute right-12 top-10 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-[#2D1576] lg:flex">
        <Lock className="h-4 w-4" />
        <span className="text-sm font-medium">SSL certificate</span>
        <Badge
          variant="secondary"
          className="upppercase hover:text-[#14532D]6 bg-[#E3F9E5] text-[#14532D] hover:bg-[#E3F9E5]"
        >
          ACTIVE
        </Badge>
      </div>

      <Badge
        className={`flex max-w-max items-center gap-1.5 bg-neutral-100 text-center font-semibold text-slate-800 lg:hidden`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-4"
        >
          <path d="M16.555 5.412a8.028 8.028 0 0 0-3.503-2.81 14.899 14.899 0 0 1 1.663 4.472 8.547 8.547 0 0 0 1.84-1.662ZM13.326 7.825a13.43 13.43 0 0 0-2.413-5.773 8.087 8.087 0 0 0-1.826 0 13.43 13.43 0 0 0-2.413 5.773A8.473 8.473 0 0 0 10 8.5c1.18 0 2.304-.24 3.326-.675ZM6.514 9.376A9.98 9.98 0 0 0 10 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 0 1-.351 3.759A13.54 13.54 0 0 1 10 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 0 1-.352-3.758ZM5.285 7.074a14.9 14.9 0 0 1 1.663-4.471 8.028 8.028 0 0 0-3.503 2.81c.529.638 1.149 1.199 1.84 1.66ZM17.334 6.798a7.973 7.973 0 0 1 .614 4.115 13.47 13.47 0 0 1-3.178 1.72 15.093 15.093 0 0 0 .174-3.939 10.043 10.043 0 0 0 2.39-1.896ZM2.666 6.798a10.042 10.042 0 0 0 2.39 1.896 15.196 15.196 0 0 0 .174 3.94 13.472 13.472 0 0 1-3.178-1.72 7.973 7.973 0 0 1 .615-4.115ZM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 0 1-1.72 3.178 8.099 8.099 0 0 1-1.826 0 13.47 13.47 0 0 1-1.72-3.178c.855.151 1.735.23 2.633.23ZM14.357 14.357a14.912 14.912 0 0 1-1.305 3.04 8.027 8.027 0 0 0 4.345-4.345c-.953.542-1.971.981-3.04 1.305ZM6.948 17.397a8.027 8.027 0 0 1-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 0 0 1.305 3.04Z" />
        </svg>
        WEBSITES
      </Badge>
      <div className="mt-4 grid grid-cols-1 items-start gap-x-8 gap-y-8 lg:mt-20 lg:grid-cols-12">
        <div className="pt-1 lg:col-span-7">
          <h2
            className={`mb-4 text-3xl font-bold text-neutral-300 md:mb-6 md:text-4xl`}
          >
            Professional, high-converting websites built to grow your business
          </h2>
          <p className="hidden font-sans text-base leading-relaxed text-neutral-300 md:block">
            We develop fast, secure websites designed to turn visitors into
            customers — and support your long-term growth.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-300/90">
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
            className={` ${montserrat.className} mx-auto mt-6 flex w-max items-center text-center text-xl font-semibold text-blue-400 md:text-2xl lg:ml-0 lg:mr-auto lg:mt-10 lg:text-start`}
          >
            Let&apos;s Build Your Website{" "}
            <ChevronRight
              aria-hidden="true"
              className="flex-none font-medium text-blue-400 lg:pl-2"
              size="1.35em"
            />
          </Link>
        </div>
        <div className="relative rounded-2xl border border-gray-600 bg-white/5 lg:col-span-5">
          <img
            src="/img/home/landing-websites.png"
            alt="Website"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
