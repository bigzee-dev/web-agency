import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

const list = "text-gray-200 font-semibold";

export default function Showcase() {
  return (
    <div className="px-6 lg:py-10 lg:px-8 bg-gradient-to-br from-gray-900 to-primary">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-12 mx-auto max-w-6xl pt-10 pb-12 lg:pt-18 lg:pb-12">
        {/* <div className="mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-300 ring-1 ring-neutral-300/50 hover:ring-neutral-200/70">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold leading-6 text-gray-300">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div> */}
        <div className="w-[50%] flex justify-center items-center bg-cyan-500 bg-opacity-30 p-4 ">
          <Image src="/img/digital.png" alt="image" width={800} height={500} />
        </div>
        <div className="w-[50%] space-y-14 lg:pr-2">
          <div className=" space-y-9">
            <h1
              className={` ${montserrat.className} text-5xl lg:text-6xl font-semibold text-gray-200 leading-loose`}
            >
              Building Modern and Reliable Web Solutions
            </h1>
            <div className="text-base leading-6 text-gray-300">
              At{" "}
              <span className="text-lg font-semibold text-gray-200">
                bigZee
              </span>
              , we specialise in:
              <ul className="list-disc pl-5 space-y-2 my-2">
                <li className={list}>Developing user-friendly Websites</li>
                <li className={list}>Providing secure hosting</li>
                <li className={list}>Delivering Professional Email services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-x-6">
          <a
            href="#"
            className={` ${btnDimensions} bg-neutral-200 text-secondary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400`}
          >
            Start Your Project
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-neutral-50"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
