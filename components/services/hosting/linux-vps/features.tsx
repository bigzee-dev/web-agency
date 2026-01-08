import { BsDot } from "react-icons/bs";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

const features = [
  {
    label: (
      <>
        Virtualisation:<span className="font-medium">KVM</span>
      </>
    ),
  },
  { label: "1 IPv4 & 1 IPv6" },
  { label: "1 Free Backup Slot" },
  {
    label: (
      <>
        Port:<span className="font-medium">1 GBit/s</span>
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
      <div className="mx-auto grid h-auto max-w-6xl grid-cols-1 items-center gap-x-14 gap-y-6 border border-gray-400 bg-[#faf9f5] p-6 md:h-[27rem] md:grid-cols-12">
        <div className="relative order-2 col-span-1 hidden h-[20rem] md:order-1 md:col-span-6 md:block md:h-full">
          <Image
            src="/img/linux-vps/welcome-banner.png"
            alt="Hosting Stack"
            fill
            className="w-full object-contain"
          />
        </div>
        <div className="order-1 col-span-1 flex flex-col justify-center gap-y-7 md:order-2 md:col-span-6">
          <h3
            className={` ${montserrat.className} pt-2 text-3xl font-semibold text-gray-800`}
          >
            All our VPS Servers include the following features.
          </h3>
          <ul className="mx-auto grid h-48 w-[98%] list-inside grid-cols-2 gap-x-1 gap-y-1 self-center font-sans text-base text-gray-800 md:w-[90%] md:gap-x-0">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
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
