import { TbWorldWww } from "react-icons/tb";

import { HiOutlineServerStack } from "react-icons/hi2";
import { TbMailCheck } from "react-icons/tb";

import { TbAt } from "react-icons/tb";
import { TbTrendingUp } from "react-icons/tb";

const iconProps = {
  size: "2em",
  strokeWidth: 1.2,
};

const listStyles = "list-disc pl-4 space-y-1.5 w-[90%]";

export const services = [
  {
    icon: <TbWorldWww {...iconProps} />,
    iconBackground: "bg-blue-700 bg-opacity-20",
    color: "text-blue-500",
    bottomIcon: <TbWorldWww size="10em" />,
    title: "Web Development",

    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Lets build your Website",
  },
  {
    icon: <HiOutlineServerStack {...iconProps} />,
    iconBackground: "bg-purple-700 bg-opacity-20",
    bottomIcon: <HiOutlineServerStack size="10em" />,
    color: "text-purple-400",
    title: "Web Hosting",

    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Get your Website Online",
  },
  {
    icon: <TbMailCheck {...iconProps} />,
    title: "Email Hosting",
    iconBackground: "bg-pink-600 bg-opacity-20",
    bottomIcon: <TbMailCheck size="10em" />,
    color: "text-pink-400",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Professional Email Addresses",
  },
  {
    icon: <TbTrendingUp {...iconProps} />,
    title: "Online Growth & Visibility",
    iconBackground: "bg-indigo-600 bg-opacity-20",
    bottomIcon: <TbTrendingUp size="10em" />,
    color: "text-indigo-400",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Grow your Brand",
  },
  {
    icon: <TbAt {...iconProps} />,
    title: "Register Domain",
    iconBackground: "bg-cyan-600 bg-opacity-20",
    bottomIcon: <TbAt size="10em" />,
    color: "text-cyan-400",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Buy a Domain",
  },
];
