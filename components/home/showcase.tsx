import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";

export default function Showcase() {
  return (
    <div className="px-6 lg:pt-10 lg:px-8 bg-gradient-to-br from-blue-600 from-40% via-indigo-500 via-80% to-indigo-800 to-95%">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-8 mx-auto max-w-5xl pt-10 pb-14 lg:pt-18 lg:pb-28">
        {/* <div className="mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-300 ring-1 ring-neutral-300/50 hover:ring-neutral-200/70">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold leading-6 text-gray-300">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div> */}
        <div className="w-[50%] flex justify-center items-center bg-indigo-700 bg-opacity-30 p-8 rounded-xl">
          <Image
            src="/img/hero-img-nice.png"
            alt="image"
            width={700}
            height={500}
          />
        </div>
        <div className="w-[50%] space-y-14 lg:pr-2">
          <div className=" space-y-9">
            <h1
              className={` ${montserrat.className} text-5xl lg:text-6xl font-semibold text-gray-200 `}
            >
              Elevate Your Online Presence
            </h1>
            <p className="text-base leading-6 text-gray-300">
              At <strong>bigZee</strong>, we specialise in developing
              user-friendly websites, providing reliable hosting, and delivering
              professional email solutions to help your business stand out in
              the digital landscape. Let us transform your vision into an
              engaging online experience.
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-neutral-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Start Your Project
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-neutral-300"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
