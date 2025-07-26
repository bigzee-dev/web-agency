import { montserrat } from "@/app/ui/fonts";
import { MdOutlineDashboard } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
import Image from "next/image";
import { whiteButton } from "@/app/ui/customTailwindClasses";

const iconProps = {
  size: "1.2em",
};

const offers = [
  {
    icon: <MdOutlineDashboard {...iconProps} />,
    title: "Control Panel",
    description: "Use industry-standard Cpanel.",
    color: "text-rose-400",
  },
  {
    icon: <FaServer {...iconProps} />,
    title: "Powerfull Servers",
    description: "High-performance NVMe servers",
    color: "text-yellow-400",
  },
  {
    icon: <IoShieldCheckmarkSharp {...iconProps} />,
    title: "Guarantee",
    description: "99.9% uptime every month",
    color: "text-thatgreen",
  },
  {
    icon: <BsLightningChargeFill {...iconProps} />,
    title: "Lightspeed Cache",
    description: "Fast and Responsive sites",
    color: "text-yellow-400",
  },
];

export default function Header() {
  return (
    <div className="relative w-full bg-slate-700">
      <div className="relative inset-0 isolate w-full overflow-hidden bg-gradient-to-r from-gray-900 via-slate-700 to-blue-400/60 py-12 pb-10">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-12">
          <div className="col-span-6">
            {/* Shared hosting badge */}
            <div className="inline-block">
              <span className="font-semibold tracking-widest text-neutral-300">
                SHARED WEB HOSTING
              </span>
            </div>
            {/* Main heading */}
            <h1
              className={` ${montserrat.className} mt-3 max-w-4xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
            >
              Top quality web hosting plans
            </h1>

            <div className="mt-6">
              {/* <p
                className={` ${montserrat.className} text-xl font-bold text-slate-400 tracking-wide`}
              >
                Every hosting plan offers
              </p> */}
              <div className="mt-4 grid grid-cols-2 gap-y-5">
                {offers.map((offer) => (
                  <div className="flex flex-col gap-1.5" key={offer.title}>
                    <h6 className="flex items-center gap-2 font-medium tracking-wide text-neutral-200/90">
                      <div
                        className={`mr-0.5 rounded-lg bg-white/5 p-2 text-blue-400 outline outline-1 outline-gray-500/50`}
                      >
                        {offer.icon}
                      </div>

                      <span>{offer.title}</span>
                    </h6>
                    <p className="ml-1 font-sans text-sm leading-relaxed text-neutral-300/80">
                      {offer.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className={` ${whiteButton} mt-8`}>Compare Plans</button>

              <div className="mt-5 flex items-center font-sans text-sm font-medium text-neutral-300">
                <span className="mr-2">
                  <IoShieldCheckmarkSharp
                    size="1.5em"
                    className="text-neutral-100/50"
                  />
                </span>
                <span className="">7 day - money back - guarantee</span>
              </div>
            </div>
          </div>

          <div className="col-span-5 col-start-8 flex items-center justify-center">
            {" "}
            <Image
              src="/svg/hosting/hosting-servers.svg"
              alt="Logo"
              width={1000}
              height={1000}
              className="-mt-4 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
