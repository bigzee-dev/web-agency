import Link from "next/link";
import Image from "next/image";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function OurProcess() {
  return (
    <div className="x-padding h-full w-full px-4 py-12 md:py-20">
      <div className="mx-auto md:max-w-6xl">
        <div className="max-full mx-auto flex flex-col items-center justify-center md:flex-row">
          <div className="flex-1">
            <h2 className={`text-gray-900 ${sectionHeadings} mb-3`}>
              Our Process
            </h2>
            <h5 className="font-sans text-2xl font-medium text-secondary md:text-3xl">
              From idea to launch, our process gets your website online — fast
              and flawlessly.
            </h5>
          </div>

          <div className="flex flex-1 items-center justify-center overflow-clip px-2 py-6 md:px-0 md:py-0">
            <Image
              src="/img/process-numbers.png"
              alt="img"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 font-sans md:grid-cols-3">
          <div>
            <div className="text-lg font-light text-gray-500">/ 01</div>
            <div className="mt-2">
              <h3 className="mb-2 text-lg font-bold text-primary">Discover</h3>
              <p className="text-md leading-relaxed text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum reprehenderit in voluptate velit esse cillum dolore...
              </p>
            </div>
          </div>

          <div>
            <div className="text-lg font-light text-gray-500">/ 02</div>
            <div className="mt-2">
              <h3 className="mb-2 text-lg font-bold text-primary">Build</h3>
              <p className="text-md leading-relaxed text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum reprehenderit in voluptate velit esse cillum dolore...
              </p>
            </div>
          </div>

          <div>
            <div className="text-lg font-light text-gray-500">/ 03</div>
            <div className="mt-2">
              <h3 className="mb-2 text-lg font-bold text-primary">Deliver</h3>
              <p className="text-md leading-relaxed text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum reprehenderit in voluptate velit esse cillum dolore...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
