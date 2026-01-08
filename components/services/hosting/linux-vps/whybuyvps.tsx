import {
  longSectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import Image from "next/image";

import { FaRobot, FaUsers, FaCreditCard } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";

const features = [
  {
    icon: FaUsers,
    title: "High Performance Compute:",
    description:
      "Deltaworx's virtual private server is built on full KVM virtualization, giving you production-grade performance without the complexity",
  },
  {
    icon: FaRobot,
    title: "We operate our own Servers:",
    description:
      "We fully control the hardware and software used to provision our VPS. We do not resell other companies VPS.",
  },

  {
    icon: MdSecurity,
    title: "24/7 Technical Support:",
    description:
      "Our friendly, Botswana-based support team is available around the clock. Whether day or night, we’re just a phone call away whenever you need assistance.",
  },
  {
    icon: FaCreditCard,
    title: "Convenient Payment Options:",
    description:
      "Pay in BWP. You can pay using popular methods in Botswana, including Credit/Debit cards, Mobile money, Bank transfer/EFT.",
  },
];

export default function WhyBuyVps() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 leading-normal">
      <div className="md:mb-10">
        <p className="mb-2 font-medium text-blue-600">Virtual Private Server</p>
        <h2 className={` ${longSectionHeadings} mb-2`}>
          Why Our VPS Stands Out
        </h2>
        <p
          className={` ${sectionSubHeadings} max-w-2xl text-md text-secondary md:mb-8`}
        >
          High-Performance VPS, Fair Prices – That’s Deltaworx.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-2 gap-y-8 md:grid-cols-12">
        <div className="col-span-1 md:col-span-6">
          <div className="relative h-[24rem] w-full md:h-full">
            <Image
              src="/img/linux-vps/hostiko-img.png"
              alt="linux-vps"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-1 grid gap-x-6 gap-y-10 md:col-span-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-gray-800" />
                </div>
                <div>
                  <p className="leading-normal text-foreground">
                    <span className="font-semibold text-secondary">
                      {feature.title}
                    </span>{" "}
                    <span className="font-sans text-gray-700">
                      {feature.description}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
