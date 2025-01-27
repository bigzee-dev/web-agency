import Link from "next/link";
import Image from "next/image";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function OurProcess() {
  return (
    <div className="bg-gradient-to-r from-indigo-500/20 via-indigo-700/20 to-primary/20 py-0">
      <div className="x-padding w-full h-full py-12 md:py-20 px-4 bg-gradient-to-b from-neutral-100 to-transparent ">
        <div className="md:max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto flex items-center justify-center">
            <div className="">
              <h2 className={` text-center ${homePageheadings} mb-5`}>
                Our Process
              </h2>
              <p className="text-base text-center text-gray-700">
                We are here to help you and your business integrate into the
                digital landscape. Let us transform your vision into an engaging
                online experience.
              </p>
              <div className="flex justify-center items-center px-8 md:px-0 overflow-clip">
                <Image
                  src="/svg/process-numbers.svg"
                  alt="img"
                  width="500"
                  height="500"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="font-sans grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-16 px-4">
            <div>
              <div className="font-light text-lg text-gray-500">/ 01</div>
              <div className="mt-2">
                <h3 className="text-lg font-bold text-primary mb-2">
                  Discover
                </h3>
                <p className="text-gray-600 text-md leading-relaxed ">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum reprehenderit in voluptate velit esse cillum dolore...
                </p>
              </div>
            </div>

            <div>
              <div className="font-light text-lg text-gray-500">/ 02</div>
              <div className="mt-2">
                <h3 className="text-lg font-bold text-primary mb-2">Build</h3>
                <p className="text-gray-600 text-md leading-relaxed ">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum reprehenderit in voluptate velit esse cillum dolore...
                </p>
              </div>
            </div>

            <div>
              <div className="font-light text-lg text-gray-500">/ 03</div>
              <div className="mt-2">
                <h3 className="text-lg font-bold text-primary mb-2">Deliver</h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum reprehenderit in voluptate velit esse cillum dolore...
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-3">
            <button
              type="button"
              className={` ${btnDimensions} mt-8 md:mt-16 text-white bg-secondary mx-auto`}
            >
              <Link href="our-process">Our Process</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
