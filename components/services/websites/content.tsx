import { sectionSubHeadings } from "@/app/ui/customTailwindClasses";

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
    icon: FaGoogle,
    title: "SEO Optimisation",
    description:
      "Get found on Google with SEO-friendly websites that help your business attract more visitors and customers.",
  },
  {
    icon: FaMobileScreen,
    title: "Responsive Design",
    description:
      "Your website will look great and work smoothly on any device — desktop, tablet, or mobile.",
  },
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

export default function ContentSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 leading-normal md:py-20">
      <div className="mb-16">
        <p className="mb-4 font-medium text-blue-600">Everything you need</p>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          No Website? No problem.
        </h2>
        <p className={` ${sectionSubHeadings} mb-8 max-w-2xl`}>
          From design to launch, we handle it all. Get a modern, mobile-friendly
          website that helps your business attract more customers..
        </p>
      </div>

      <div className="grid gap-9 px-2 md:grid-cols-2 md:px-0 lg:grid-cols-3">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <IconComponent className="h-8 w-8 text-primary" />
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
    </section>
  );
}
