import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

export default function Inspire() {
  return (
    <section className="x-padding w-full py-12 md:py-16 lg:py-20 lg:pb-20 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-y-7">
            <h1
              className={` ${montserrat.className} text-3xl md:text-4xl font-bold  text-secondary leading-tight`}
            >
              We Aim To Inspire Entrepreneurs, Fostering A Collective Effort.
            </h1>
            <div className="font-sans text-md text-gray-700 space-y-4 ">
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
            <Link href="/contact-us" className={` ${btnDimensions} mt-2`}>
              Contact us
            </Link>
          </div>
          <div className="relative h-[400px] md:h-[500px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/img/digital.png"
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
