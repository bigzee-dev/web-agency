import { TbWorldWww } from "react-icons/tb";

import { HiOutlineServerStack } from "react-icons/hi2";
import { TbMailCheck } from "react-icons/tb";

import { TbAt } from "react-icons/tb";
import { TbTrendingUp } from "react-icons/tb";

const iconProps = {
  size: "2.2em",
  strokeWidth: 1.2,
};

export const services = [
  {
    icon: <TbWorldWww {...iconProps} />,
    title: "Web Development",
    subTitle: (
      <p>
        Building modern, user-friendly websites designed to elevate your online
        presence.
      </p>
    ),
    description: (
      <ul className="list-disc pl-5">
        <li>Responsive and suitable for web and mobile platforms</li>
        <li>Interactive, secure, and highly scalable</li>
        <li>Built to target your brand and engage your audience</li>
      </ul>
    ),
    link: "Lets build your Website",
  },
  {
    icon: <HiOutlineServerStack {...iconProps} />,
    title: "Web Hosting",
    subTitle: (
      <p>
        Reliable and secure hosting solutions tailored to keep your website
        online effortlessly.
      </p>
    ),
    description: (
      <ul className="list-disc pl-5">
        <li>
          Our hosting services ensure your website is fast, reliable, and
          accessible
        </li>
        <li>From setup to maintenance, we keep your site running smoothly</li>
        <li>
          Our secure servers handle traffic growth and deliver consistent
          performance
        </li>
      </ul>
    ),
    link: "Get your Website Online",
  },
  {
    icon: <TbMailCheck {...iconProps} />,
    title: "Email Hosting",
    subTitle: (
      <p>
        Professional email services to enhance communication with reliability
        and style.
      </p>
    ),
    description: (
      <ul className="list-disc pl-5">
        <li>We provide personalised email addresses</li>
        <li>We manage setup, security, and maintenance</li>
        <li>keeps your team connected and operating efficiently</li>
      </ul>
    ),
    link: "Professional Email Addresses",
  },
  {
    icon: <TbTrendingUp {...iconProps} />,
    title: "Online Growth & Visibility",
    subTitle: (
      <p>
        Boost your online presence with strategies tailored to drive growth and
        engagement.
      </p>
    ),
    description: (
      <ul className="list-disc pl-5">
        <li>Search Engine Optimisation</li>
        <li>Social media integration and Whatsapp Chatbots</li>
        <li>Customised solutions that drive traffic, boost engagement</li>
      </ul>
    ),
    link: "Grow your Brand",
  },
  {
    icon: <TbAt {...iconProps} />,
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
