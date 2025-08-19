import { montserrat } from "@/app/ui/fonts";
import { MdOutlineDashboard } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
import Image from "next/image";
import { whiteButton } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

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
    <div className="relative bg-black">
      <div className="absolute inset-0 grid w-full grid-cols-12 overflow-hidden">
        <div className="col-span-6"></div>
        <div className="relative col-span-6 flex items-center justify-center">
          {" "}
          <Image
            src="/img/hosting/cpu-tech.jpg"
            alt="Logo"
            width={2534}
            height={1774}
            className="mb-16 h-auto w-[60%]"
          />
          <div className="absolute bottom-14 left-0 flex w-full items-center justify-center">
            <img
              src="/svg/hosting/cpanel.svg"
              alt="Cpanel Logo"
              className="h-28"
            />
          </div>
        </div>
      </div>
      <div className="inset-0 w-full">
        <div className="mx-auto grid max-w-7xl grid-cols-12 py-16">
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

            <div className="mt-9">
              <div className="mt-4 grid grid-cols-2 gap-y-5">
                {offers.map((offer) => (
                  <div className="flex flex-col gap-1.5" key={offer.title}>
                    <h6 className="flex items-center gap-2 font-medium tracking-wide text-blue-400">
                      <div
                        className={`mr-0.5 rounded-lg bg-white/10 p-2 text-blue-400 outline outline-1 outline-gray-500/50`}
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
            </div>
            <Link
              href=""
              className={` ${whiteButton} mt-10 inline-flex justify-center`}
            >
              Compare Plans
            </Link>
          </div>
          <div className="col-span-6"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-full bg-gradient-to-tr from-transparent via-blue-400/15 to-blue-400/30"></div>
    </div>
  );
}
