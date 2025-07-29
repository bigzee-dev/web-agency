import { montserrat } from "@/app/ui/fonts";
import { FaCircleCheck } from "react-icons/fa6";

export default function StartToday() {
  return (
    <div className="relative isolate w-full pt-10">
      {/* blur component */}
      <div
        aria-hidden="true"
        className="absolute -top-12 left-1/4 -z-10 -translate-x-1/4 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#89a6fc] opacity-15"
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-y-10 px-4 py-4">
        <h2
          className={` ${montserrat.className} w-full bg-primary py-2 text-center text-3xl font-bold text-neutral-200 md:text-4xl`}
        >
          Start Your Online Business Today
        </h2>
        <ul className="grid max-w-3xl grid-cols-2 gap-x-5 gap-y-5">
          {[
            "Customised eCommerce Web Design",
            "Seamless API Integration",
            "Secured Payment Gateway",
            "Search Engine Optimisation",
            "Certified eCommerce Developers",
            "Supporting you beyond the project",
          ].map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 rounded-lg bg-gray-800 px-4 py-3"
            >
              <div className="">
                <FaCircleCheck className="mt-0.5 h-auto w-5 text-blue-400" />
              </div>
              <span className="font-sans text-md text-neutral-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* <span className="z-20 mb-3 ml-3 rotate-90">
        <img
          src="/svg/contact-animated-arrow.svg"
          alt=""
          className="max-h-32"
        />
      </span> */}
    </div>
  );
}
