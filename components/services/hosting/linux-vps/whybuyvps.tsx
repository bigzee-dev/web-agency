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
      "Deltaworx’s KVM VPS offers production-grade performance with none of the complexity.",
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
      "Our Botswana-based support team is available 24/7 whenever you need help.",
  },
  {
    icon: FaCreditCard,
    title: "Convenient Payment Options:",
    description:
      "Pay using popular methods in Botswana, including Credit/Debit cards, Mobile money, Bank transfer/EFT.",
  },
];

export default function WhyBuyVps() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 leading-normal">
      <div className="md:mb-12">
        <p className="mb-2 max-w-max rounded-3xl border border-blue-600 bg-blue-600/15 px-2 py-0.5 text-xs font-medium text-blue-600">
          Virtual Private Server
        </p>
        <h2 className={` ${longSectionHeadings} mb-2`}>
          Why Our VPS Stands Out
        </h2>
        <p
          className={` ${sectionSubHeadings} max-w-2xl text-md text-gray-600 md:mb-8`}
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
                  <p className="flex flex-col gap-y-0.5 leading-normal text-foreground">
                    <span className="font-semibold text-gray-800">
                      {feature.title}
                    </span>{" "}
                    <span className="font-sans text-md text-gray-600">
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
