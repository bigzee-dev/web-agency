import { TbWorldWww } from "react-icons/tb";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TbMailCheck } from "react-icons/tb";
import { TbAt } from "react-icons/tb";
import { TbTrendingUp } from "react-icons/tb";

const iconProps = {
  size: "2em",
  strokeWidth: 1.4,
};

const listStyles = "list-disc pl-4 space-y-1.5 w-[90%]";

export const services = [
  {
    title: "Websites",
    icon: <TbWorldWww {...iconProps} />,
    color: "text-blue-700",
    backgroundColor: "bg-blue-300",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Lets build your Website",
    url: "/websites",
  },
  {
    title: "Hosting",
    icon: <HiOutlineServerStack {...iconProps} />,
    color: "#009de6",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Get your Website Online",
    url: "/hosting",
  },
  {
    title: "Emails",
    icon: <TbMailCheck {...iconProps} />,
    color: "text-yellow-600",
    backgroundColor: "bg-yellow-300",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Email Services",
    url: "/emails",
  },
  {
    title: "Online Growth",
    icon: <TbTrendingUp {...iconProps} />,
    color: "#783bff",
    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Grow your Brand",
    url: "#",
  },
  {
    title: "Register Domain",
    icon: <TbAt {...iconProps} />,
    color: "#009de6",

    description: (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    ),
    link: "Buy a Domain",
    url: "https://domains.bigzee.app/cart.php?a=add&domain=register",
  },
];
