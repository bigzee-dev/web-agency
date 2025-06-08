// import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

type contentProps = {
  heading: string;
  subheading: string;
  text: string;
  link: string;
};

const features = [
  "Customer portals, Enterprise systems, SaaS products",
  "Database-driven web applications",
  "AI Integrations",
];

const headingStyles =
  "text-xs text-neutral-300 font-semibold bg-thatgreen/25 w-max py-1.5 px-3 rounded-2xl mb-7 uppercase tracking-wide";

const subheadingStyles = ` text-neutral-300 text-4xl font-bold mb-6 tracking-normal`;

export default function WebApps() {
  return (
    <div className="relative isolate overflow-hidden grid grid-cols-12  gap-x-20 bg-gray-900 text-white h-auto md:pt-10 md:pb-10 px-8 rounded-3xl">
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
        <p className="font-sans text-base text-neutral-300 leading-relaxed">
          Whether you're launching something new or improving what you already
          have, we’re here to make it happen. From simple booking apps to
          full-featured apps for enterprises, we’ve helped all kinds of
          businesses create better digital experiences for their teams and
          clients.
        </p>
        <ul className="text-neutral-300/85 mt-6 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="text-md font-sans flex items-center gap-x-3"
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
          className="w-max flex items-center mt-8 text-center text-xl font-semibold text-blue-400"
        >
          Learn More{" "}
          <ChevronRight
            aria-hidden="true"
            className="flex-none text-blue-400 font-medium pl-2"
            size="1.35em"
          />
        </Link>
      </div>
      <div className="col-span-5 mt-auto border border-gray-700 rounded-lg">
        <Image
          src="/img/home/coding.jpg"
          alt="Web Apps"
          width={667}
          height={1000}
          className="w-full h-[28rem] rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
