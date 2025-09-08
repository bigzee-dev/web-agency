import { sectionSubHeadings } from "@/app/ui/customTailwindClasses";
import Image from "next/image";

import {
  FaMobileScreen,
  FaRobot,
  FaUsers,
  FaCreditCard,
} from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const features = [
  {
    icon: FaRobot,
    title: "AI Integration",
    description:
      "Enhance your website with smart tools like chatbots and automation to improve customer experience.",
  },
  {
    icon: FaUsers,
    title: "Social Media Integration",
    description:
      "Connect your website with social platforms to reach more people and grow your online presence.",
  },
  {
    icon: MdSecurity,
    title: "Security & Maintenance",
    description:
      "We keep your website safe, updated, and running smoothly — so you can focus on your business.",
  },
  {
    icon: FaCreditCard,
    title: "Payment Options",
    description:
      "Choose the plan that works for you — one-time payment or monthly subscriptions to fit your budget.",
  },
];

export default function WhyBuyVps() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 leading-normal">
      <div className="mb-16">
        <p className="mb-4 font-medium text-blue-600">Virtual Private Server</p>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Why buy a VPS from us?
        </h2>
        <p className={` ${sectionSubHeadings} mb-8 max-w-2xl`}>
          From design to launch, we handle it all. Get a modern, mobile-friendly
          website that helps your business attract more customers..
        </p>
      </div>

      <div className="grid gap-x-16 lg:grid-cols-12">
        <div className="relative col-span-4">
          <Image
            src="/img/linux-vps/cloud.jpg"
            alt="linux-vps"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="col-span-8 grid gap-9 md:grid-cols-2">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="leading-relaxed text-foreground">
                    <span className="font-semibold">{feature.title}</span>{" "}
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
