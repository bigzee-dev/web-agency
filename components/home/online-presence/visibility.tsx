import { montserrat } from "@/app/ui/fonts";

// components
import DomainSearch from "./searchdomain";
import Cards from "./cards";

export default function Visibility() {
  return (
    <main className="relative isolate w-full overflow-hidden bg-gray-900 py-12 pb-0 shadow-lg md:pb-16 md:pt-16">
      {/* blur component */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:transform-gpu sm:blur-3xl md:block"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2b2774] to-[#4a4790] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 hidden -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu md:block"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#73304c] to-[#776fff] opacity-20"
        />
      </div>

      <div className="flex w-full flex-col">
        {/* Heading */}
        <div className="mx-auto w-[85%] max-w-lg md:w-full">
          <p
            className={` ${montserrat.className} text-center text-4xl font-semibold leading-10 tracking-tight text-neutral-300`}
          >
            We have everything you need to elevate your digital presence.
          </p>
        </div>

        {/* cards */}
        <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 md:mt-20 lg:grid-cols-2">
          {/* Search Domain */}
          <div className="col-span-1 border-r border-gray-500/50 bg-neutral-400/10">
            <DomainSearch />
          </div>
          <Cards />
        </div>
      </div>
    </main>
  );
}
