import { primaryButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

export default function Personal() {
  return (
    <div className="x-padding mx-auto px-4 py-12 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
        <div className="space-y-4">
          <h2
            className={` ${montserrat.className} text-4xl font-medium tracking-tight text-gray-900 md:text-5xl lg:text-6xl`}
          >
            <span className="block">Honest.</span>
            <span className="block">Reliable.</span>
            <span className="block md:text-primary">Personal.</span>
          </h2>
        </div>
        <div className="space-y-8 border-l border-gray-400 pl-8 md:pl-12">
          <h3
            className={` ${montserrat.className} text-2xl font-semibold tracking-tight text-primary md:text-3xl md:text-gray-800`}
          >
            Doing things differently since day one.
          </h3>
          <div className="space-y-4 font-sans text-base leading-relaxed text-gray-600">
            <p>
              The web is our playground — we&apos;re endlessly curious about how
              it works and excited by what it can become. Our love for the
              internet and the technologies behind it fuels every project we
              take on. We build with purpose, driven by creativity and care, not
              by profit.
            </p>

            <p>
              Our clients choose us because they can feel that passion in every
              interaction — in the way we code, communicate, and support. We
              believe in doing things right, not rushed. That means high-quality
              work, honest advice, and reliable service built on genuine
              enthusiasm for modern web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
