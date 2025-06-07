import { montserrat } from "@/app/ui/fonts";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TbMailCheck } from "react-icons/tb";
import { TbAt } from "react-icons/tb";
import Link from "next/link";

// components
import DomainSearch from "./searchdomain";
import Slider from "./slider";
import Cards from "./cards";

const iconProps = {
  size: "1.25em",
  strokeWidth: 1.6,
};

const cards = [
  {
    title: "Web Development",
    className: "text-blue-400 ",
    description:
      "Whether you need a Website or a full-featured Web Application, our team has the skills and experience to build it from the ground up—tailored exactly to your needs.",
    icon: <HiOutlineServerStack {...iconProps} />,
    linkOne: "Websites",
    linkTwo: "Web Apps",
  },
  {
    title: "Robust Backend & Security",
    className: "text-rose-300/70",
    description:
      "Once deployed, your application is protected using industry best practices. Our robust backend keeps it reliable, secure, and always available to users.",
    icon: <TbMailCheck {...iconProps} />,
    linkOne: "Managed Hosting",
    linkTwo: "Server Management",
  },
  {
    title: "Marketing Integration",
    className: "text-thatgreen",
    description:
      "We know effective marketing is key to business success. That’s why every project we deliver includes built-in social media integration. We also offer reliable email solutions to keep you connected with clients.",
    icon: <TbAt {...iconProps} />,
    linkOne: "Emails",
  },
];

const cardButtons =
  "text-blue-400 font-sans text-sm font-medium bg-gray-800 py-1 px-1 border border-blue-400/50 rounded-lg hover:text-blue-500 transition duration-300 ease-in-out";

export default function Visibility() {
  return (
    <main className="x-padding relative isolate overflow-hidden  w-full py-4 md:pt-16 md:pb-12 bg-gray-900 shadow-lg">
      {/* blur component */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
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
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#73304c] to-[#776fff] opacity-20"
        />
      </div>

      <div className="flex flex-col  w-full">
        {/* Heading */}
        <div className="mx-auto max-w-lg">
          {/* <h2 className="text-center text-base/7 font-smedium text-neutral-300/80">
            Increase Your Visibility
          </h2> */}
          <p
            className={` ${montserrat.className} text-center text-neutral-300 text-4xl font-semibold leading-9 tracking-tight`}
          >
            We have everything you need to elevate your online presence.
          </p>
        </div>

        {/* cards */}
        <div className=" grid grid-cols-2 w-full max-w-7xl mx-auto mt-20">
          {/* <div className="grid md:grid-cols-3 gap-x-14 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col gap-4 md:gap-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className={` ${card.className} flex items-center justify-center w-8 h-8  bg-neutral-300/10  outline outline-1 outline-offset-1 outline-white/30 rounded-lg`}
                  >
                    {card.icon}
                  </div>
                  <h4 className="font-sans text-2xl font-medium text-neutral-300">
                    {card.title}
                  </h4>
                </div>

                <div>
                  <p className="font-sans text-md text-neutral-300/80">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm mt-auto">
                  <Link href="/" className={`${cardButtons} `}>
                    {card.linkOne}
                  </Link>
                  {card.linkTwo && (
                    <Link href="/" className={`${cardButtons} `}>
                      {card.linkTwo}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div> */}
          {/* Search Domain */}
          <div className="col-span-1 flex flex-col px-16 py-9  bg-neutral-300/10 border-r border-gray-500/50">
            <DomainSearch />
            <Slider />
          </div>
          <Cards />
        </div>
      </div>
    </main>
  );
}
