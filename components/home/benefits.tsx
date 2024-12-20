import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function Benefits({
  backgroundImage = "/img/fullwidth.jpg?height=1400&width=6997",
}: {
  backgroundImage?: string;
}) {
  return (
    <div className=" bg-gray-800 w-full max-w-[1800px] mx-auto px-2  ">
      <div className="w-full h-full flex items-center justify-center lg:py-10 min-h-[300px]">
        <div className="relative isolate overflow-hidden w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 pr-10 py-10 outline outline-1 outline-gray-600">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-25"
            />
          </div>
          <div className="flex items-center justify-center  lg:col-span-6 border-r border-gray-600 ">
            <Image
              src="/img/two-ladies.png"
              alt="image"
              width={500}
              height={500}
              className="md:h-[67%] md:w-[67%] object-contain"
            />
          </div>
          <div className="lg:col-span-6 py-2 px-2">
            <h3
              className={`${montserrat.className} text-4xl font-bold text-neutral-300 tracking-wide`}
            >
              How can you <span className="text-blue-600">benefit</span> from
              our services
            </h3>
            <div className="mt-8">
              <p className="font-sans text-md text-gray-400">
                Your website needs to rank on page one of Google - this is
                called Search Engine Optimisation (SEO) and its when Google
                sends you all your customer enquiries and leads for free!
              </p>
              <p className="font-sans text-md text-gray-400">
                Websites need to SELL for you and get you more customers.
              </p>
            </div>
            <div className="mt-6">
              <h4 className="font-sans text-2xl font-semibold text-gray-300">
                This is a test header. Checking if it works.
              </h4>
              <ul className="text-md list-disc pl-6 text-gray-400 mt-4 space-y-4">
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
                  className={`${btnDimensions} mt-12 bg-neutral-200 text-secondary mx-auto`}
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
