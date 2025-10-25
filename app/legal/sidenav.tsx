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
    <nav className="w-full rounded-lg p-3 md:w-full">
      <ul className="space-y-4">
        {legalLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-md font-medium md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-gray-200 text-gray-600": isActive, // Active link styles
                  "text-primary hover:text-blue-600": !isActive, // Hover only for non-active links
                },
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
