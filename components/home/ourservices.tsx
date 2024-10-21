import { Code, Palette, Smartphone, Globe, Mail } from "lucide-react";
import { TbWorldWww } from "react-icons/tb";
import { CiMobile4 } from "react-icons/ci";
import { CiServer } from "react-icons/ci";
import { TbServer2 } from "react-icons/tb";
import { TbMailCheck } from "react-icons/tb";
import { TbShoppingCart } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { homePageheadings } from "@/app/ui/customTailwindClasses";

const iconProps = {
  size: "1.8em",
  className: "text-purple-600",
  // style: { stroke: "url(#blue-gradient)" },
  strokeWidth: 1.5,
};

const services = [
  {
    icon: <TbWorldWww {...iconProps} />,
    title: "Web Development:",
    description:
      "Our custom built websites deliver a consistent user experience on both web and mobile platforms. From design to development, we offer expert support, building interactive, secure, and scalable solutions that reflect your brand and engage your audience.",
  },
  {
    icon: <CiServer {...iconProps} strokeWidth={0.5} />,
    title: "Web Hosting:",
    description:
      "Our web hosting services ensure your website is fast, reliable, and accessible. From setup to maintenance, we keep your site running smoothly. Our secure, scalable solutions handle traffic growth and deliver consistent performance for your business needs.",
  },
  {
    icon: <TbMailCheck {...iconProps} />,
    title: "Email Solutions",
    description: "Native and cross-platform apps for iOS and Android devices.",
  },
  {
    icon: <TbShoppingCart {...iconProps} />,
    title: "E-commerce Solutions:",
    description: "Scalable online stores with seamless payment integration.",
  },
  {
    icon: <CiMobile4 {...iconProps} strokeWidth={0.5} />,
    title: "Search Engine Optimisations",
    description: "Native and cross-platform apps for iOS and Android devices.",
  },
  {
    icon: <Globe {...iconProps} />,
    title: "E-commerce Solutions:",
    description: "Scalable online stores with seamless payment integration.",
  },
];

export default function OurServices() {
  return (
    <section className="py-24 bg-background border-t border-gray-300">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${homePageheadings} text-center mb-12 `}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 border-b border-gray-300 py-12 transition-all duration-300"
            >
              <div className="flex items-center justify-center p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                <div className="bg-neutral-200 p-1 rounded-lg">
                  <svg width="0" height="0">
                    <linearGradient
                      id="blue-gradient"
                      x1="100%"
                      y1="100%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop stopColor="#7a6ded" offset="0%" />
                      <stop stopColor="#591885" offset="100%" />
                    </linearGradient>
                  </svg>
                  {service.icon}
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-neutral-600 text-base leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    {service.title}
                  </span>{" "}
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
