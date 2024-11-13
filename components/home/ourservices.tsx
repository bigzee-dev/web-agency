import { Code, Palette, Smartphone, Globe, Mail } from "lucide-react";
import { TbWorldWww } from "react-icons/tb";
import { CiMobile4 } from "react-icons/ci";
import { CiServer } from "react-icons/ci";
import { TbServer2 } from "react-icons/tb";
import { TbMailCheck } from "react-icons/tb";
import { TbShoppingCart } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
import clsx from "clsx";

const iconProps = {
  size: "3em",
  className: "text-primary",
  // style: { stroke: "url(#blue-gradient)" },
  strokeWidth: 1.5,
};

const services = [
  {
    icon: <TbWorldWww {...iconProps} />,
    title: "Web Development",
    description: (
      <>
        Our custom built websites deliver a consistent user experience on both{" "}
        <strong>web</strong> and <strong>mobile platforms</strong>. From design
        to development, we offer expert support, building{" "}
        <strong>interactive</strong>, <strong>secure</strong>, and{" "}
        <strong>scalable solutions</strong> that reflect your brand and engage
        your audience.
      </>
    ),
    link: "Lets build your Website",
  },
  {
    icon: <CiServer {...iconProps} strokeWidth={0.5} />,
    title: "Web Hosting",
    description: (
      <>
        Our web hosting services ensure your website is <strong>fast</strong>,{" "}
        <strong>reliable</strong>, and <strong>accessible</strong>. From setup
        to maintenance, we keep your site running smoothly. Our{" "}
        <strong>secure</strong>, <strong>scalable</strong> solutions handle{" "}
        <strong>traffic growth</strong> and deliver{" "}
        <strong>consistent performance</strong> for your business needs.
      </>
    ),
    link: "Get your website Online",
  },
  {
    icon: <TbMailCheck {...iconProps} />,
    title: "Email Hosting",
    description: (
      <>
        Our email hosting solutions provide <strong>secure</strong>,{" "}
        <strong>professional</strong>, and <strong>personalised</strong> email
        addresses for your business. We manage <strong>setup</strong>,{" "}
        <strong>security</strong>, and <strong>maintenance</strong>, ensuring{" "}
        reliable, uninterrupted communication that keeps your team connected and
        operating efficiently.
      </>
    ),
    link: "Professional Email Addresses",
  },
  {
    icon: <TbShoppingCart {...iconProps} />,
    title: "Online Growth & Visibility",
    description: (
      <>
        We offer comprehensive services to enhance your online presence and
        connect with your target audience. From{" "}
        <strong>search engine optimisation</strong> to{" "}
        <strong>social media integration</strong>, we provide customised
        solutions that drive traffic, boost engagement, and expand your brand’s
        reach.
      </>
    ),
    link: "Grow your Brand",
  },
  {
    icon: <TbShoppingCart {...iconProps} />,
    title: "Online Growth & Visibility",
    description: (
      <>
        We offer comprehensive services to enhance your online presence and
        connect with your target audience. From{" "}
        <strong>search engine optimisation</strong> to{" "}
        <strong>social media integration</strong>, we provide customised
        solutions that drive traffic, boost engagement, and expand your brand’s
        reach.
      </>
    ),
    link: "Grow your Brand",
  },
];

export default function OurServices() {
  return (
    <section className="relative isolate pt-24 pb-20 bg-background border-t border-gray-300">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[80rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className={`${homePageheadings} text-center mb-6 `}>
          Our Services
        </h2>
        <p className="max-w-3xl mx-auto text-base text-center text-gray-600 font-medium">
          We are here to help you and your business integrate into the digital
          landscape. Let us transform your vision into an engaging online
          experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col gap-3 px-6 py-8 w-full bg-primary/20",
                index === 4 ? "col-span-2" : "col-span-1"
              )}
            >
              <div className="flex items-center gap-3  pb-4 border-b border-gray-500">
                <div className="flex items-center justify-center">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <h4 className="font-bold text-primary text-xl">
                  {service.title}
                </h4>
              </div>
              <div className="flex-grow">
                <p className="font-sans pl-1 mt-1 text-gray-600 text-md leading-relaxed">
                  {service.description}
                </p>
              </div>
              <Link
                className="font-sans text-center py-2.5 px-3 bg-gray-800 text-md font-medium mt-3 text-neutral-100 rounded-lg ml-auto w-max"
                href="http://209.97.177.68/cart.php?a=add&domain=register"
              >
                {service.link} <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
