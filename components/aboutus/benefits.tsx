import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

export default function Benefits() {
  return (
    <div className="relative isolate w-full ">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-28 sm:right-1/3 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2b2774] to-[#4a4790] opacity-25"
        />
      </div>
      <div className="max-w-7xl mx-auto h-auto grid grid-cols-1 md:grid-cols-12 gap-y-8 pt-16 pb-20">
        {/* Image */}
        <section className="flex justify-center lg:col-span-6">
          <Image
            src="/img/home/two-ladies.png"
            alt="image"
            width={823}
            height={690}
            className="md:w-[80%] object-contain"
          />
        </section>
        {/* text content */}
        <section className="col-span-1 lg:col-span-6 flex flex-col space-y-6 md:px-2 ">
          <h3
            className={`${montserrat.className} text-4xl font-bold text-gray-800 tracking-wide`}
          >
            How can you <span className="text-primary">benefit</span> from our
            services
          </h3>

          <div>
            <ul className="text-md list-disc pl-6 text-gray-600 mt-4 space-y-4">
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
            </ul>
          </div>
          <div className="w-full">
            <button className={`${btnDimensions}  bg-primary text-white mt-4`}>
              Work with Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
