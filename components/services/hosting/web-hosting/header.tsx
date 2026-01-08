import { montserrat } from "@/app/ui/fonts";
import { MdOutlineDashboard } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa6";
import Image from "next/image";
import { greenButton } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

const iconProps = {
  size: "1.2em",
};

const offers = [
  {
    icon: <MdOutlineDashboard {...iconProps} />,
    title: "Control Panel",
    description: "Industry Standard Cpanel",
    color: "text-rose-400",
  },
  {
    icon: <FaServer {...iconProps} />,
    title: "Servers",
    description: "High Performance NVMe",
    color: "text-yellow-400",
  },

  {
    icon: <BsLightningChargeFill {...iconProps} />,
    title: "Cache",
    description: "Fast, Responsive Sites",
    color: "text-yellow-400",
  },
  {
    icon: <IoShieldCheckmarkSharp {...iconProps} />,
    title: "Guarantee",
    description: "99.9% Uptime",
    color: "text-thatgreen",
  },
];

export default function Header() {
  return (
    <div className="relative min-h-[34rem] w-full bg-black">
      <div className="x-padding w-full">
        <div className="mx-auto grid w-full max-w-7xl gap-y-12 pb-4 pt-16 md:grid-cols-12 md:py-16">
          <div className="col-span-1 h-[26rem] md:col-span-6 md:h-auto"></div>
          {/*  image */}
          <div className="col-span-1 flex flex-col items-center justify-center md:col-span-6">
            {" "}
            <Image
              src="/img/hosting/cpu-tech1.jpg"
              alt="Logo"
              width={2534}
              height={1774}
              className="-mt-4 w-[83%]"
            />
            <div className="-mt-10 flex w-full items-center justify-center">
              <img
                src="/svg/hosting/cpanel.svg"
                alt="Cpanel Logo"
                className="h-28"
              />
            </div>
          </div>
        </div>
        <div className="x-padding absolute inset-0 bg-gradient-to-b from-blue-400/10 via-blue-400/15 to-blue-400/30 pb-12 pt-16 md:bg-gradient-to-tr md:from-transparent md:via-blue-400/15 md:to-blue-400/30 md:py-16">
          <div className="mx-auto grid h-full max-w-7xl grid-cols-1 md:grid-cols-12">
            <div className="col-span-1 md:col-span-6">
              {/* Shared hosting badge */}
              <div className="inline-block">
                <span className="font-semibold tracking-widest text-neutral-300">
                  WEB HOSTING
                </span>
              </div>
              {/* Main heading */}
              <h1
                className={` ${montserrat.className} mt-3 max-w-4xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
              >
                Top quality web hosting plans
              </h1>

              <div className="mt-9 max-w-xl">
                <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-6">
                  {offers.map((offer) => (
                    <div
                      className="flex flex-col gap-2 gap-y-2.5"
                      key={offer.title}
                    >
                      <h6 className="flex items-center gap-2 font-medium tracking-wide text-blue-300">
                        <div
                          className={`mr-0.5 rounded-lg bg-white/10 p-2 text-blue-400 outline outline-1 outline-gray-500/50`}
                        >
                          {offer.icon}
                        </div>

                        <span className="text-neutral-200">{offer.title}</span>
                      </h6>
                      <p className="ml-0.5 font-sans text-sm leading-relaxed text-neutral-300/80">
                        {offer.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex items-end gap-x-5 md:gap-x-12">
                <Link href="#pricing-plans" className={` ${greenButton} `}>
                  Compare Plans
                </Link>
                <div className="flex flex-col items-start">
                  <span className="mb-0.5 text-xs text-neutral-400">
                    Starting from
                  </span>
                  <span className="text-4xl font-semibold text-neutral-300">
                    P60
                    <span className="text-lg font-medium text-neutral-400">
                      /month
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
