// import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const features = [
  "Customer portals, Enterprise systems, SaaS products",
  "Database-driven web applications",
  "AI Integrations",
];

const headingStyles =
  "hidden lg:block text-xs text-neutral-200 font-semibold bg-blue-400/20 w-max py-1.5 px-3 rounded-2xl mb-4 md:mb-7 uppercase tracking-wide";

const subheadingStyles = ` text-neutral-300 text-3xl md:text-4xl font-bold mb-5 tracking-normal`;

export default function WebApps() {
  return (
    <div className="relative isolate gap-x-20 overflow-hidden rounded-3xl bg-gray-900 p-4 pt-6 text-white md:px-14 md:pb-12 md:pt-12 lg:grid lg:grid-cols-12">
      {/* blur component */}
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <Badge
        className={`flex max-w-max gap-1 bg-neutral-100 text-center font-semibold text-slate-800 hover:bg-neutral-100 lg:hidden`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M3.25 3A2.25 2.25 0 0 0 1 5.25v9.5A2.25 2.25 0 0 0 3.25 17h13.5A2.25 2.25 0 0 0 19 14.75v-9.5A2.25 2.25 0 0 0 16.75 3H3.25Zm.943 8.752a.75.75 0 0 1 .055-1.06L6.128 9l-1.88-1.693a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.06-.055ZM9.75 10.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
            clipRule="evenodd"
          />
        </svg>
        WEB APPLICATIONS
      </Badge>
      <div className="col-span-7 mt-4 lg:mt-0">
        <h2 className={headingStyles}>Web Applications</h2>

        <h3 className={subheadingStyles}>
          Smart Web Applications for Modern Business Needs
        </h3>
        <p className="hidden font-sans text-base leading-relaxed text-neutral-300 md:block">
          Whether you&apos;re launching something new or improving what you
          already have, we&apos;re here to make it happen. From simple booking
          apps to full-featured apps for enterprises, we&apos;ve helped all
          kinds of businesses create better digital experiences for their teams
          and clients.
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
          href="/webapps"
          className={` ${montserrat.className} mx-auto mt-6 flex w-max items-center text-center text-xl font-semibold text-blue-400 md:text-2xl lg:ml-0 lg:mr-auto lg:mt-8 lg:text-start`}
        >
          Learn More{" "}
          <ChevronRight
            aria-hidden="true"
            className="flex-none font-medium text-blue-400 md:pl-2"
            size="1.35em"
          />
        </Link>
      </div>
      <div className="col-span-5 mt-8 rounded-lg border border-gray-700 lg:mt-auto">
        <Image
          src="/img/home/coding.jpg"
          alt="Web Apps"
          width={667}
          height={1000}
          className="h-[15rem] w-full rounded-lg object-cover md:h-[24rem]"
        />
      </div>
    </div>
  );
}
