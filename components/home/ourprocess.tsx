import Link from "next/link";
import Image from "next/image";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function OurProcess() {
  return (
    <div className="bg-gradient-to-r from-cyan-500/20 via-cyan-700/20 to-primary/20 p-4">
      <div className="w-full h-full font-sans py-20 px-4 bg-neutral-100/70 rounded-xl">
        <div className="md:max-w-5xl max-w-lg mx-auto">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="col-span-5">
              <h2 className={homePageheadings}>Our Process</h2>
              <h2
                className={`${montserrat.className} text-gray-700 text-3xl font-semibold mt-12 leading-10`}
              >
                Innovative Solutions for Modern Challenges, Your Success, Our
                Commitment
              </h2>
            </div>
            <div className="col-span-7">
              <Image
                src="/img/our-process.png"
                alt="img"
                width="800"
                height="500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div>
              <div className="font-light text-lg text-gray-500">/ 01</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-primary mb-2">
                  Discover
                </h3>
                <p className="text-gray-600 text-md">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum reprehenderit in voluptate velit esse cillum dolore...
                </p>
              </div>
            </div>

            <div>
              <div className="font-light text-lg text-gray-500">/ 02</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-primary mb-2">Build</h3>
                <p className="text-gray-600 text-md">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum reprehenderit in voluptate velit esse cillum dolore...
                </p>
              </div>
            </div>

            <div>
              <div className="font-light text-lg text-gray-500">/ 03</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-primary mb-2">Deliver</h3>
                <p className="text-gray-600 text-md">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum reprehenderit in voluptate velit esse cillum dolore...
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className={` ${btnDimensions} mt-16 text-white bg-secondary `}
          >
            <Link href="our-process">Our Process</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
