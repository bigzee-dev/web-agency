import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

const list = "font-sans text-neutral-300 font-medium";

export default function Showcase() {
  return (
    <div className="w-full bg-primary">
      <div className="w-full h-full px-2 py-9 lg:py-16 lg:px-8 bg-gradient-to-br from-gray-900 to-transparent">
        <div className="flex flex-col lg:flex-row-reverse items-center mx-auto max-w-6xl">
          <div className="relative isolate w-[100%] md:w-[40%] h-full flex justify-center items-center">
            <Image
              src="/img/showcase.png"
              alt="image"
              width={447}
              height={550}
              className=""
            />
          </div>
          <div className="w-[100%] md:w-[60%]  lg:pl-4">
            <div className="mb-6 flex">
              <div className="bg-neutral-300/15 relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-300 ring-1 ring-gray-300 hover:ring-neutral-200/70">
                Announcing our new Whatsapp integration.{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-neutral-400"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <p
                className={` ${montserrat.className}  font-bold text-neutral-200`}
                style={{ fontSize: "4rem", lineHeight: "1.1" }}
              >
                Building Modern and Reliable Web Solutions
              </p>
              <div className="font-sans text-base leading-6 text-neutral-300">
                At{" "}
                <span className="text-lg font-semibold text-neutral-300">
                  bigZee
                </span>
                , we specialise in:
                <ul className="list-disc pl-6 space-y-2 my-2">
                  <li className={list}>Developing user-friendly Websites</li>
                  <li className={list}>Providing secure hosting</li>
                  <li className={list}>
                    Delivering Professional Email services
                  </li>
                </ul>
                <div className="flex justify-center mt-6 md:mt-12 w-full">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-4">
                    <a
                      href="#"
                      className={` ${btnDimensions} bg-neutral-200 text-secondary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400`}
                    >
                      Start Your Project
                    </a>
                    <a
                      href="#"
                      className="font-sans text-md font-semibold leading-6 text-neutral-300"
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
