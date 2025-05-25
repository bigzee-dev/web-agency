"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const legalLinks = [
  {
    href: "/legal/terms-of-service",
    name: "Terms of Service",
  },
  {
    href: "/legal/privacy-policy",
    name: "Privacy Policy",
  },
  {
    href: "/legal/acceptable-use-policy",
    name: "Acceptable Use Policy",
  },
];

export default function SideNav() {
  const pathname = usePathname();
  return (
    <nav className="w-full md:w-full  p-3 rounded-lg">
      <ul className="space-y-4">
        {legalLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 text-gray-800 font-medium rounded-md p-3 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-gray-300 text-blue-400": isActive, // Active link styles
                  "hover:text-blue-600 ": !isActive, // Hover only for non-active links
                }
              )}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
