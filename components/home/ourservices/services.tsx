import { TbWorldWww } from "react-icons/tb";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TbMailCheck } from "react-icons/tb";
import { TbAt } from "react-icons/tb";
import { TbTrendingUp } from "react-icons/tb";

const iconProps = {
  size: "2.2em",
  strokeWidth: 1.4,
};

const listStyles = "list-disc pl-4 space-y-1.5 w-[90%]";

export const services = [
  {
    title: "Web Development",
    icon: <TbWorldWww {...iconProps} />,
    color: "text-blue-800",
    backgroundColor: "bg-blue-300",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Lets build your Website",
    url: "/websites",
  },
  {
    title: "Web Hosting",
    icon: <HiOutlineServerStack {...iconProps} />,
    color: "text-red-800",
    backgroundColor: "bg-red-300",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Get your Website Online",
    url: "/hosting",
  },
  {
    title: "Email Hosting",
    icon: <TbMailCheck {...iconProps} />,
    color: "text-yellow-700",
    backgroundColor: "bg-yellow-300",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Email Services",
    url: "/emails",
  },
  {
    title: "Online Growth & Visibility",
    icon: <TbTrendingUp {...iconProps} />,
    color: "text-indigo-800",
    backgroundColor: "bg-indigo-300",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Grow your Brand",
    url: "#",
  },
  {
    title: "Register Domain",
    icon: <TbAt {...iconProps} />,
    color: "text-cyan-800",
    backgroundColor: "bg-cyan-300",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Buy a Domain",
    url: "https://domains.bigzee.app/cart.php?a=add&domain=register",
  },
];
