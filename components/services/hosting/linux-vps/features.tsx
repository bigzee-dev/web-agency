import { FaCheck } from "react-icons/fa6";
import ServerStatusIndicator from "./statusdots";
import { BsFillNutFill } from "react-icons/bs";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

const features = [
  {
    label: (
      <>
        Virtualisation: <span className="font-medium">KVM</span>
      </>
    ),
  },
  { label: "1 IPv4 included" },
  { label: "1 Free Backup Slot" },
  {
    label: (
      <>
        Port: <span className="font-medium">1 GBit/s</span>
      </>
    ),
  },
  { label: "NVME SSD" },
  { label: "SSH & Root Access" },
  { label: "Modern Control Panel" },
  { label: "Instantly Deployed" },
  { label: "24/7 Support" },
];

export default function VpsFeatures() {
  return (
    <div className="pb-20 pt-16">
      <div className="relative mx-auto mb-10 flex max-w-6xl items-center justify-center bg-gradient-to-r from-slate-800 to-slate-700 px-3 py-2.5 text-neutral-100 shadow-md">
        <span className="absolute left-5 mr-2 text-slate-400">
          <BsFillNutFill size="1.4em" className="text-slate-300/95" />
        </span>
        <div className="rounded-sm border border-gray-500 bg-slate-600/20">
          <h3
            className={` ${montserrat.className} loading-text px-4 py-1.5 text-center text-xl font-bold shadow-md`}
          >
            All our VPS Servers include the following Features
          </h3>
        </div>
        <span className="absolute right-32 ml-2 text-slate-400">
          <ServerStatusIndicator size="sm" speed="slow" />
        </span>

        <span className="absolute right-5 ml-2 text-slate-400">
          <BsFillNutFill size="1.4em" className="text-slate-300/95" />
        </span>
        <div className="absolute -bottom-1.5 left-1/2 -z-10 flex h-3 w-3 -translate-x-1/2 rotate-45 items-center justify-center bg-slate-700 shadow-md"></div>
      </div>
      <div className="mx-auto grid h-96 max-w-5xl grid-cols-12 gap-x-12">
        <div className="relative col-span-6">
          <Image
            src="/img/linux-vps/welcome-banner.png"
            alt="Hosting Stack"
            fill
          />
        </div>
        <ul className="col-span-6 mx-auto grid w-full max-w-xl list-inside grid-cols-2 gap-x-1 gap-y-0 font-sans text-md font-medium text-secondary md:gap-x-0">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>
                <FaCheck className="h-auto w-3.5 text-blue-600" />
              </span>
              {feature.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
