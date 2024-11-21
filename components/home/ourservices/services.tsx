import { TbWorldWww } from "react-icons/tb";
import { CiServer } from "react-icons/ci";
import { TbMailCheck } from "react-icons/tb";
import { PiNetworkDuotone } from "react-icons/pi";
import { IoIosTrendingUp } from "react-icons/io";

const iconProps = {
  size: "3em",
  strokeWidth: 1.2,
};

export const services = [
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
    icon: <IoIosTrendingUp {...iconProps} />,
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
    icon: <PiNetworkDuotone size="3em" strokeWidth={0.8} />,
    title: "Register Domain",
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
    link: "Buy a Domain",
  },
];
