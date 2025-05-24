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
      <div className="relative isolate overflow-hidden inset-0 w-full bg-gradient-to-r from-gray-900 via-slate-700 to-blue-400/60 py-12 pb-8">
        <div className="grid grid-cols-12 gap-12 max-w-7xl mx-auto">
          <div className="col-span-6">
            {/* Shared hosting badge */}
            <div className="inline-block">
              <span className="font-semibold text-neutral-300 tracking-widest">
                SHARED WEB HOSTING
              </span>
            </div>
            {/* Main heading */}
            <h1
              className={` ${montserrat.className} max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mt-3 leading-tight`}
            >
              Top quality web hosting plans
            </h1>

            <div className="mt-6">
              {/* <p
                className={` ${montserrat.className} text-xl font-bold text-slate-400 tracking-wide`}
              >
                Every hosting plan offers
              </p> */}
              <div className="grid grid-cols-2 gap-y-5  mt-3">
                {offers.map((offer) => (
                  <div className="flex flex-col gap-1.5 " key={offer.title}>
                    <h6 className="flex items-center gap-2 text-neutral-200/90 tracking-wide font-medium">
                      <div
                        className={` text-blue-400 p-2  bg-white/5 rounded-lg mr-0.5 outline outline-1 outline-gray-500/50`}
                      >
                        {offer.icon}
                      </div>

                      <span>{offer.title}</span>
                    </h6>
                    <p className="font-sans text-sm text-neutral-300/80 leading-relaxed ml-1">
                      {offer.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className={` ${whiteButton} mt-7`}>Compare Plans</button>

              <div className="flex items-center font-sans text-neutral-400  font-medium text-sm mt-5">
                <span className="mr-2">
                  <IoShieldCheckmarkSharp size="1.5em" className="" />
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
              className="object-contain -mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
