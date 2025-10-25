import { FaCheck } from "react-icons/fa6";

import { BsDot } from "react-icons/bs";
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
  { label: "1 IPv4 & 1 IPv6" },
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
  { label: "Scalable Resources" },
];

export default function VpsFeatures() {
  return (
    <div className="pb-12">
      <div className="mx-auto grid h-[27rem] max-w-6xl grid-cols-12 gap-x-14 border border-gray-400 p-8">
        <div className="relative col-span-6">
          <Image
            src="/img/linux-vps/welcome-banner.png"
            alt="Hosting Stack"
            fill
          />
        </div>
        <div className="col-span-6 flex flex-col justify-center gap-y-7">
          <h3
            className={` ${montserrat.className} pt-2 text-3xl font-semibold text-gray-800`}
          >
            All our VPS Servers include the following features.
          </h3>
          <ul className="mx-auto grid h-48 w-[90%] list-inside grid-cols-2 gap-x-1 gap-y-1 self-center font-sans text-md text-gray-700 md:gap-x-0">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <span>
                  <BsDot className="h-auto w-3.5 text-gray-600" />
                </span>
                {feature.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
