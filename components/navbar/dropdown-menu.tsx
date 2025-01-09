"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { IoChevronDown } from "react-icons/io5";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { TbWorldWww } from "react-icons/tb";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TbMailCheck } from "react-icons/tb";
import { TbAt } from "react-icons/tb";
import { TbTrendingUp } from "react-icons/tb";
import { expletus } from "@/app/ui/fonts";

const components: {
  title: string;
  icon: React.ReactNode;
  href: string;
  description: string;
}[] = [
  {
    title: "Websites",
    icon: <TbWorldWww size="1.8em" className="text-blue-600" />,
    href: "/websites",
    description:
      "A modal dialog that interrupts the user with important content and.",
  },
  {
    title: "Hosting",
    icon: <HiOutlineServerStack size="1.8em" className="text-red-600" />,
    href: "/hosting",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Emails",
    icon: <TbMailCheck size="1.8em" className="text-yellow-600" />,
    href: "/emails",
    description: "Displays an indicator showing the completion progress of a.",
  },
  {
    title: "Domains",
    icon: <TbAt size="1.8em" className="text-cyan-700" />,
    href: "https://domains.bigzee.app/cart.php?a=add&domain=register",
    description: "Visually or semantically separates content.",
  },
  {
    title: "SEO & Marketing",
    icon: <TbTrendingUp size="1.8em" className="text-indigo-700" />,
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—",
  },
];

export function DropdownMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col items-center justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img
                      src="svg/bigZee-logo.svg"
                      alt="svg"
                      width={100}
                      height={100}
                    />
                    {/* // <IoChevronDown className="h-6 w-6" /> */}
                    <div
                      className={` ${expletus.className} tracking-wider font-extrabold text-gray-900 text text-2xl`}
                    >
                      bigZee
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-8 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  icon={component.icon}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  icon: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            href={props.href || "#"}
            {...props}
          >
            <div className="flex items-center  text-gray-800 text-md font-medium leading-none">
              {icon && <span className="mr-2">{icon}</span>}
              {title}
            </div>
            <p className="font-sans text-gray-700 text-md leading-relaxed">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
