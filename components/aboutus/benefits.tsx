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
    <div className="relative isolate w-full pt-6">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-28 sm:right-1/3 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2b2774] to-[#4a4790] opacity-20"
        />
      </div>
      <div className="mx-auto grid h-auto max-w-7xl grid-cols-1 gap-y-8 pb-20 pt-16 md:grid-cols-12">
        {/* Image */}
        <section className="flex justify-center lg:col-span-6">
          <Image
            src="/img/home/two-ladies.png"
            alt="image"
            width={823}
            height={690}
            className="object-contain md:w-[80%]"
          />
        </section>
        {/* text content */}
        <section className="col-span-1 flex flex-col space-y-8 md:px-2 lg:col-span-6">
          <h3 className={`${sectionHeadings} `}>Our Mission</h3>

          <div>
            {/* <ul className="text-base list-disc pl-6 text-gray-700 mt-4 space-y-4">
              <li className="font-sans">
                Boost Business Credibility. Having a website that consumers are
                able to find gives your business a greater level of credibility.
              </li>
              <li className="font-sans">
                Our tailored solutions, client-focused approach, and expertise
                in modern frameworks empower businesses to achieve their digital
                transformation goals.
              </li>
              <li className="font-sans">
                We work with you to create frictionless digital experiences for
                your users that deliver better results for your business.
              </li>
              <li className="font-sans">
                We build long term partnerships with our clients to ensure that
                their project - and their broader digital marketing - works.
              </li>
            </ul> */}
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
                    <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                      <Icon size={32} />
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
