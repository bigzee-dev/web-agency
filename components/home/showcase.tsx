import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { IoStarSharp } from "react-icons/io5";

const list = "font-sans text-gray-600 font-medium";

export default function Showcase() {
  return (
    <div className="isolate bg-background w-full ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu  blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80eaff] to-[#9089fc] opacity-70 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="w-full h-full px-2 py-9 lg:py-16 lg:px-8 ">
        <div className="flex flex-col lg:flex-row-reverse lg: gap-12 items-center mx-auto max-w-6xl">
          <div
            className="relative isolate w-[100%] md:w-[40%] h-full flex justify-center items-center"
            // style={{
            //   transformOrigin: "bottom right",
            // }}
          >
            <Image
              src="/img/showcase-frame.png"
              alt="image"
              width={750}
              height={750}
              className="self-end"
              // style={{ transformOrigin: "bottom right" }}
            />
          </div>
          <div className="w-[100%] md:w-[60%]  lg:pr-4">
            <div className="mb-7 flex">
              <div className="bg-gray-400/15 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-500 hover:ring-neutral-200/70">
                Announcing our new Whatsapp integration.{" "}
                <a href="#" className="font-medium leading-6 text-gray-600">
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
                className={` ${montserrat.className}  font-semibold text-gray-800`}
                style={{ fontSize: "4rem", lineHeight: "1.1" }}
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
              <div className="font-sans text-base leading-6 text-gray-600 w-[90%]">
                <p>
                  At <strong>bigZee</strong>, we specialize in developing
                  user-friendly websites and providing secure hosting. We also
                  deliver professional email services. We also deliver
                  professional email services.
                </p>

                <div className="flex justify-center mt-6 md:mt-12 w-full">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4">
                    <a
                      href="#"
                      className={` ${btnDimensions} bg-secondary text-neutral-200 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400`}
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
          </div>
        </div>
      </div>
    </div>
  );
}
