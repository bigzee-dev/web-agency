import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

export default function Benefits() {
  return (
    <div className="w-full  bg-gradient-to-b from-background to-gray-200">
      <div className="max-w-6xl mx-auto h-auto grid grid-cols-1 md:grid-cols-12 gap-y-8 pt-16 pb-6">
        {/* text content */}
        <section className="col-span-1 lg:col-span-6 flex flex-col space-y-8 md:px-2 ">
          <h3
            className={`${montserrat.className} text-4xl font-bold text-gray-800 tracking-wide`}
          >
            How can you <span className="text-primary">benefit</span> from our
            services
          </h3>

          <div className="mt-6">
            <h4 className="font-sans text-2xl font-semibold text-gray-700">
              This is a test header. Checking if it works.
            </h4>
            <ul className="text-md list-disc pl-6 text-gray-600 mt-4 space-y-4">
              <li className="font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
          </div>
          <div className="w-full">
            <button className={`${btnDimensions}  bg-primary text-white mt-4`}>
              Work with Us
            </button>
          </div>
        </section>
        {/* Image */}
        <section className="flex justify-end lg:col-span-6">
          <Image
            src="/img/two-ladies.png"
            alt="image"
            width={500}
            height={500}
            className="md:h-[80%] md:w-[80%] object-contain"
          />
        </section>
      </div>
    </div>
  );
}
