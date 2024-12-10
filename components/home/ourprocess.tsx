import Link from "next/link";
import Image from "next/image";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function OurProcess() {
  return (
    <div className="bg-gradient-to-r from-indigo-500/30 via-indigo-700/30 to-primary/30 px-2 py-4 lg:p-4 ">
      <div className="w-full h-full font-sans py-20 px-4 bg-neutral-100/90 rounded-xl">
        <div className="md:max-w-6xl max-w-lg mx-auto">
          <div className="grid md:grid-cols-12 gap-20">
            <div className="md:col-span-5">
              <h2 className={homePageheadings}>Our Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-12 mt-10">
                <div>
                  <div className="font-light text-lg text-gray-500">/ 01</div>
                  <div className="mt-2">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      Discover
                    </h3>
                    <p className="text-gray-600 text-md">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum reprehenderit in voluptate velit esse cillum
                      dolore...
                    </p>
                  </div>
                </div>

                <div>
                  <div className="font-light text-lg text-gray-500">/ 02</div>
                  <div className="mt-2">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      Build
                    </h3>
                    <p className="text-gray-600 text-md">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum reprehenderit in voluptate velit esse cillum
                      dolore...
                    </p>
                  </div>
                </div>

                <div>
                  <div className="font-light text-lg text-gray-500">/ 03</div>
                  <div className="mt-2">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      Deliver
                    </h3>
                    <p className="text-gray-600 text-md">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum reprehenderit in voluptate velit esse cillum
                      dolore...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-gray-900 md:col-span-7">
              <Image
                src="/img/our-process.png"
                alt="img"
                width="563"
                height="563"
                className="w-[90%] h-[90%] object-contain"
              />
            </div>
          </div>
          {/* 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-12">
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
          </div> */}
          <div className="flex w-full">
            <button
              type="button"
              className={` ${btnDimensions} mt-16 text-white bg-secondary mx-auto`}
            >
              <Link href="our-process">Our Process</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
