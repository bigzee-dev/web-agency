import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

export default function Benefits() {
  return (
    <div className="w-full  bg-gradient-to-b from-background to-gray-100">
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
