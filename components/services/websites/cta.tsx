import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function CTA() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-24">
        <div className="relative isolate overflow-hidden bg-slate-800 pt-16 shadow-2xl md:rounded-3xl  md:pt-24 grid grid-cols-12 lg:gap-x-24  lg:pt-0">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#477cf0] to-[#6799e8] opacity-15"
            />
          </div>
          <div className="h-full col-span-4">
            <Image
              src="/img/tech-laptop.jpg"
              alt="img"
              width={1000}
              height={667}
              className="object-cover"
            />
          </div>
          <div className="col-span-8 max-w-xl mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold  text-white sm:text-4xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className={` ${btnDimensions} bg-white  text-secondary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white `}
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
