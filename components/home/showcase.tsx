import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { IoStarSharp } from "react-icons/io5";

const list = "font-sans text-gray-600 font-medium";

export default function Showcase() {
  return (
    <div className="x-padding isolate w-full pt-12 pb-8 md:py-16">
      {/* blur component */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu  blur-3xl sm:top-[-20rem]  overflow-hidden md:overflow-visible"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80eaff] to-[#9089fc] opacity-40 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      {/* main content */}

      <main className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-full h-full">
        {/* heading and cta */}
        <section className="w-[100%] lg:w-[60%] lg:pr-4">
          <div className="flex mb-7 ">
            <div className="relative bg-gray-400/10  text-sm text-gray-600 text-center rounded-full px-3 py-1 leading-6 ring-1 ring-gray-500 hover:bg-secondary/10">
              Announcing our new Whatsapp integration.{" "}
              <a href="#" className="text-gray-600 font-medium leading-6 ">
                <span
                  aria-hidden="true"
                  className="font-sans absolute inset-0"
                />
                Read More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <p
              className={` ${montserrat.className} text-5xl font-bold text-gray-800 tracking-tight`}
              style={{ lineHeight: "1.1" }}
            >
              Building Modern and Reliable Web Solutions
            </p>
            <div className="flex text-yellow-600 ">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <div className="font-sans text-md  text-gray-600 md:w-[90%] leading-6">
              <p>
                At <strong>bigZee</strong>, we specialize in developing
                user-friendly websites and providing secure hosting. We also
                deliver professional email services. We also deliver
                professional email services.
              </p>

              <div className="w-full flex justify-center mt-12 ">
                <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4">
                  <a
                    href="#"
                    className={` ${btnDimensions} bg-primary text-neutral-200 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400`}
                  >
                    Start Your Project
                  </a>
                  <a
                    href="#"
                    className="font-sans text-md font-medium leading-6 text-secondary"
                  >
                    About Us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* image */}
        <section className="w-[100%] sm:max-w-[500px] lg:w-[40%] h-full flex justify-center items-center">
          <Image
            src="/img/showcase-frame.png"
            alt="image"
            width={750}
            height={750}
            className="self-end"
            // style={{ transformOrigin: "bottom right" }}
          />
        </section>
      </main>
    </div>
  );
}
