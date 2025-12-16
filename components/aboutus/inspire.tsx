import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";

const points = [
  "The online world is constantly evolving and having a reliable digital agency that delivers results is essential.",
  "At Deltaworx, technology and the internet aren’t just what we do, they’re what we live for.",

  "We work on projects that make a positive impact and that we truly believe in.",
  "Our team is driven by curiosity and a love for learning, from coding and system maintenance to server management.",
  "The web never stops evolving and neither do we.",
];

export default function Inspire() {
  return (
    <section className="x-padding w-full pb-10 pt-6 md:py-20 md:pb-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-6 gap-y-12 lg:grid-cols-2 lg:gap-x-14">
          <div className="order-2 flex flex-col gap-y-7 md:order-1">
            <h1
              className={` ${montserrat.className} text-3xl font-semibold leading-tight text-secondary md:text-4xl`}
            >
              Deltaworx is your technology partner for forward-thinking and
              impactful online solutions.
            </h1>
            <ul className="list-disc space-y-2 pl-6 font-sans text-base text-gray-700">
              {points.map((point, idx) => (
                <li key={idx} className="leading-normal">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-1 h-[400px] overflow-hidden rounded-xl md:order-2 md:h-[450px] lg:h-[450px]">
            <Image
              src="/img/about-us/coding.jpg"
              alt="Team of entrepreneurs working together in a modern office space"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
