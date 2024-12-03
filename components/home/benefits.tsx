import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function Benefits({
  backgroundImage = "/img/fullwidth.jpg?height=1400&width=6997",
}: {
  backgroundImage?: string;
}) {
  return (
    <div className="relative w-full max-w-[1800px] mx-auto px-2 bg-gray-950">
      <div className="w-full h-full flex items-center justify-center py-12 lg:py-20 min-h-[300px]">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 ">
          <div className="flex items-center justify-center lg:col-span-5">
            <Image
              src="/img/two-ladies.png"
              alt="image"
              width={500}
              height={500}
              className="md:h-[80%] md:w-[80%] object-contain"
            />
          </div>
          <div className="lg:col-span-7 px-2 md:px-10">
            <h3
              className={`${montserrat.className} text-4xl font-bold text-neutral-200 tracking-wide`}
            >
              How can you <span className="text-cyan-500">benefit</span> from
              our services
            </h3>
            <div className="mt-8">
              <p className="font-sans text-md text-neutral-300">
                Your website needs to rank on page one of Google - this is
                called Search Engine Optimisation (SEO) and its when Google
                sends you all your customer enquiries and leads for free!
              </p>
              <p className="font-sans text-md text-neutral-300">
                Websites need to SELL for you and get you more customers.
              </p>
            </div>
            <div className="mt-6">
              <h4 className="font-sans text-2xl font-semibold text-neutral-400">
                This is a test header. Checking if it works.
              </h4>
              <ul className="text-md list-disc pl-6 text-neutral-300 mt-4 space-y-4">
                <li className="font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li className="font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li className="font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
              </ul>
              <div className="w-full flex justify-center">
                <button
                  className={`${btnDimensions} mt-8 bg-neutral-200 text-secondary mx-auto`}
                >
                  Work with Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
