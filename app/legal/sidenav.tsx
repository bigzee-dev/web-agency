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
    href: "/legal/fair-usage-policy",
    name: "Fair Usage Policy",
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
                "flex h-[48px] grow items-center justify-center gap-2 text-secondary font-medium rounded-md p-3 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-gray-800/90 text-white": isActive, // Active link styles
                  "hover:text-primary hover:bg-gray-200": !isActive, // Hover only for non-active links
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
