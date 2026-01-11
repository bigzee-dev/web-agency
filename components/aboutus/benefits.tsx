import { btnDimensions, sectionHeadings } from "@/app/ui/customTailwindClasses";
import Image from "next/image";
import { HiServerStack } from "react-icons/hi2";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";

const missionPoints = [
  {
    id: 1,
    icon: FaCloudDownloadAlt,
    title: "Botswana Focussed",
  },
  {
    id: 2,
    icon: HiServerStack,
    title: "Reliability",
  },
  {
    id: 3,
    icon: IoBarChartSharp,
    title: "Growth & Success",
  },
];

export default function Benefits() {
  return (
    <div className="x-padding relative isolate w-full pt-6">
      <div className="mx-auto grid h-auto max-w-7xl grid-cols-1 gap-y-16 pb-16 pt-16 md:grid-cols-12 md:pb-20">
        {/* Image */}
        <section className="order-2 col-span-1 flex justify-center md:order-1 lg:col-span-6">
          <Image
            src="/img/about-us/business-ladies.png"
            alt="image"
            width={705}
            height={591}
            className="object-contain md:w-[80%]"
          />
        </section>
        {/* text content */}
        <section className="order-1 col-span-1 flex flex-col space-y-8 md:order-2 md:px-2 lg:col-span-6">
          <h3 className={`${sectionHeadings} `}>Our Mission</h3>

          <div>
            <div className="rounded-2xl border-l-4 border-primary pl-8">
              <p className="font-sans text-xl italic leading-relaxed text-gray-700">
                Our mission is to deliver a reliable, accessible, and scalable
                digital infrastructure that supports the growth and success of
                businesses and developers in Botswana.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-x-6">
              {missionPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.id}
                    className="mt-8 flex flex-col items-center"
                  >
                    <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                      <Icon size={28} />
                    </div>
                    <h4 className="text-center font-semibold text-gray-800">
                      {point.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button className={`${btnDimensions} mt-4 bg-primary text-white`}>
              Work with Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
