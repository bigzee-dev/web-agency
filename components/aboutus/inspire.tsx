import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";

export default function Inspire() {
  return (
    <section className="x-padding w-full py-12 md:py-16 lg:py-20 lg:pb-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-x-14">
          <div className="flex flex-col gap-y-7">
            <h1
              className={` ${montserrat.className} text-3xl font-bold leading-tight text-secondary md:text-4xl`}
            >
              Deltaworx is your technology partner for innovative and impactful
              online solutions.
            </h1>
            <div className="space-y-4 font-sans text-base text-gray-700">
              <p>
                In a rapidly evolving online world filled with challenges,
                having a reliable digital agency that delivers results is
                essential.
              </p>
              <p>
                Our agency is committed to turbocharging economic growth by
                igniting the entrepreneurial spirit. With a strong passion for
                high-growth businesses and a focus on nurturing entrepreneurs,
                we strive to make a meaningful difference and create
                extraordinary outcomes.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl md:h-[450px] lg:h-[450px]">
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
