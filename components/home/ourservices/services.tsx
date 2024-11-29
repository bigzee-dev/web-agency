import { TbWorldWww } from "react-icons/tb";

import { HiOutlineServerStack } from "react-icons/hi2";
import { TbMailCheck } from "react-icons/tb";
import { PiNetwork } from "react-icons/pi";
import { FaNetworkWired } from "react-icons/fa6";
import { IoIosTrendingUp } from "react-icons/io";

const iconProps = {
  size: "2.4em",
  strokeWidth: 1,
};

export const services = [
  {
    icon: <TbWorldWww {...iconProps} />,
    title: "Web Development",
    description: (
      <>
        Our custom built websites deliver a consistent user experience on both{" "}
        web and mobile platforms. From design to development, we offer expert
        support, building interactive, secure, and scalable solutions that
        reflect your brand and engage your audience.
      </>
    ),
    link: "Lets build your Website",
  },
  {
    icon: <HiOutlineServerStack {...iconProps} />,
    title: "Web Hosting",
    description: (
      <>
        Our web hosting services ensure your website is fast, reliable, and
        accessible. From setup to maintenance, we keep your site running
        smoothly. Our secure, scalable solutions handle traffic growth and
        deliver consistent performance for your business needs.
      </>
    ),
    link: "Get your website Online",
  },
  {
    icon: <TbMailCheck {...iconProps} />,
    title: "Email Hosting",
    description: (
      <>
        Our email hosting solutions provide secure, professional, and
        personalised email addresses for your business. We manage setup,{" "}
        security, and maintenance, ensuring reliable, uninterrupted
        communication that keeps your team connected and operating efficiently.
      </>
    ),
    link: "Professional Email Addresses",
  },
  {
    icon: <IoIosTrendingUp {...iconProps} />,
    title: "Online Growth & Visibility",
    description: (
      <>
        We offer comprehensive services to enhance your online presence and
        connect with your target audience. From search engine optimisation to{" "}
        social media integration, we provide customised solutions that drive
        traffic, boost engagement, and expand your brand’s reach.
      </>
    ),
    link: "Grow your Brand",
  },
  {
    icon: <PiNetwork {...iconProps} />,
    title: "Register Domain",
    description: (
      <>
        We offer comprehensive services to enhance your online presence and
        connect with your target audience. From search engine optimisation to{" "}
        social media integration, we provide customised solutions that drive
        traffic, boost engagement, and expand your brand’s reach.
      </>
    ),
    link: "Buy a Domain",
  },
];
