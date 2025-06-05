// import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
// import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";

type contentProps = {
  heading: string;
  subheading: string;
  text: string;
  link: string;
};

const headingStyles =
  "text-sm text-thatgreen font-semibold bg-thatgreen/20 w-max py-1 px-3 rounded-2xl mb-7 uppercase";

const subheadingStyles = `${montserrat.className} text-neutral-100 text-3xl font-semibold mb-4`;

export default function WebApps() {
  return (
    <div className="relative isolate overflow-hidden  bg-gray-900 text-white h-auto  rounded-3xl px-6">
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
      <div className="md:pt-20 md:pb-12">
        <h2 className={headingStyles}>
          Results-driven and evidence-based web app development.
        </h2>
        <h3 className={subheadingStyles}>
          From simple booking platforms to comprehensive web app solutions for
          large enterprises, we’ve done it all.
        </h3>
        <p>
          Ensure your web app stays secure, reliable, and up-to-date with our
          comprehensive support and maintenance services.
        </p>
        <Link
          href="/webapps"
          className="w-max flex items-center mt-8 text-center text-xl font-semibold text-blue-400"
        >
          Start now{" "}
          <ChevronRight
            aria-hidden="true"
            className="flex-none text-blue-400 font-medium pl-2"
            size="1.35em"
          />
        </Link>
      </div>
    </div>
  );
}
