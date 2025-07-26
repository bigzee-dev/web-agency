import { montserrat } from "@/app/ui/fonts";
import { FaCheck } from "react-icons/fa";

export default function StartToday() {
  return (
    <div className="relative isolate w-full">
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
      <div className="mx-auto flex max-w-6xl flex-col gap-y-8 px-4 pt-12">
        <h2
          className={` ${montserrat.className} w-full text-left text-3xl font-bold text-gray-900 md:text-4xl`}
        >
          Start Your{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-primary to-blue-600 bg-clip-text text-transparent">
            Online Business
          </span>{" "}
          Today
        </h2>
        <ul className="grid max-w-5xl grid-cols-2 gap-x-4 gap-y-4">
          {[
            "Customised eCommerce Web Design and Development",
            "Seamless API integration",
            "Secured Payment Gateway",
            "Search Engine Optimisation",
            "Certified eCommerce Developers",
            "Supporting you beyond the project",
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="">
                <FaCheck className="h-auto w-2.5 text-gray-500" />
              </div>
              <span className="font-sans text-base text-gray-600">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
