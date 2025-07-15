// import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

const features = [
  "Customer portals, Enterprise systems, SaaS products",
  "Database-driven web applications",
  "AI Integrations",
];

const headingStyles =
  "text-xs text-neutral-300 font-semibold bg-thatgreen/25 w-max py-1.5 px-3 rounded-2xl mb-7 uppercase tracking-wide";

const subheadingStyles = ` text-neutral-300 text-4xl font-bold mb-6 tracking-normal`;

export default function Hosting() {
  return (
    <div className="relative isolate grid h-auto grid-cols-12 gap-x-20 overflow-hidden rounded-3xl bg-gray-900 text-white md:px-12 md:pb-12 md:pt-12">
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
      <div className="col-span-7">
        <h2 className={headingStyles}>Web Applications</h2>

        <h3 className={subheadingStyles}>
          Smart Web Applications for Modern Business Needs
        </h3>
        <p className="font-sans text-base leading-relaxed text-neutral-300">
          Whether you are launching something new or improving what you already
          have, we’re here to make it happen. From simple booking apps to
          full-featured apps for enterprises, we&apos;ve helped all kinds of
          businesses create better digital experiences for their teams and
          clients.
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
          className={` ${montserrat.className} mt-8 flex w-max items-center text-center text-2xl font-semibold text-blue-400`}
        >
          Learn More{" "}
          <ChevronRight
            aria-hidden="true"
            className="flex-none pl-2 font-medium text-blue-400"
            size="1.35em"
          />
        </Link>
      </div>
      <div className="col-span-5 mt-auto rounded-lg border border-gray-700">
        <Image
          src="/img/home/globe-tech.jpg"
          alt="Web Apps"
          width={584}
          height={1024}
          className="h-[28rem] w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
