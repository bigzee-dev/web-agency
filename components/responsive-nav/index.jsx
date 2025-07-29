"use client";

import { cairo, montserrat } from "@/app/ui/fonts";
import { NavChevron } from "./chevron";
import useResponsiveNav from "@/app/hooks/useResponsiveNav";
import {
  GlobeIcon,
  ShoppingBagIcon,
  WebAppIcon,
  ServerStackIcon,
  AtSymbolIcon,
  ClipboardCopyIcon,
  ArrowPathIcon,
  DocumentTextIcon,
  MouseClickIcon,
} from "../icons";
import Link from "next/link";

export default function ResponsiveNav() {
  useResponsiveNav(); // <-- This runs the nav javascript

  const linkStyles =
    "flex items-center gap-x-2.5 whitespace-nowrap text-neutral-50 md:hover:text-neutral-400 transition-colors duration-200";
  return (
    <nav className="x-padding navbar border-b border-gray-300/70">
      <div className="navbar-container">
        <Link className="logo-container" href="/">
          {" "}
          {/* Updated href to be relative */}
          <img src="/logo/logo-500x500.png" alt="BigZee Digital Logo" />{" "}
          {/* Added alt text */}
          <h4
            className={` ${cairo.className} nav-logo mb-[0.30rem] ml-2 text-cyan-700`}
          >
            delta
            <span className="font-semibold text-gray-700">worx</span>
          </h4>
        </Link>
        <button className="hamburger" aria-label="Open menu">
          ☰
        </button>{" "}
        {/* Added aria-label */}
        <button className="close-menu" aria-label="Close menu">
          ✕
        </button>{" "}
        {/* Added aria-label */}
        <div className="nav-menu">
          <ul className={` ${montserrat.className} nav-menu-stylingcontainer`}>
            <li className="nav-item">
              <div
                className={` ${montserrat.className} nav-link nav-link-with-dropdown`}
              >
                Solutions{" "}
                <span className="chevron text-neutral-700">
                  <NavChevron />
                </span>
              </div>
              <div className="dropdown-menu">
                <Link href="/websites" className="dropdown-item">
                  <div className={linkStyles}>
                    <span className="text-neutral-300">
                      <GlobeIcon />
                    </span>
                    Website Development
                  </div>{" "}
                </Link>
                <Link href="/ecommerce" className="dropdown-item">
                  <div className={linkStyles}>
                    <span className="text-neutral-300">
                      <WebAppIcon />
                    </span>
                    Web Applications
                  </div>{" "}
                </Link>
                <Link href="/ecommerce" className="dropdown-item">
                  <div className={linkStyles}>
                    <span className="text-neutral-300">
                      <ShoppingBagIcon />
                    </span>
                    Ecommerce Stores
                  </div>{" "}
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                href="/emails"
                className={` ${montserrat.className} nav-link`}
              >
                {/* Changed to Link */}
                Email
              </Link>
            </li>
            <li className="nav-item">
              <div
                className={` ${montserrat.className} nav-link nav-link-with-dropdown`}
              >
                Hosting{" "}
                <span className="chevron">
                  <NavChevron />
                </span>
              </div>
              <div className="dropdown-menu">
                <Link href="/hosting" className="dropdown-item">
                  <div className={linkStyles}>
                    <span className="text-blue-300">
                      <ServerStackIcon size="size-5" />
                    </span>
                    Web Hosting
                  </div>
                </Link>
                <Link href="/managed-hosting" className="dropdown-item">
                  <div className={linkStyles}>
                    <span className="text-blue-300">
                      <MouseClickIcon size="size-5" />
                    </span>
                    Client Hosting
                  </div>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={` ${montserrat.className} nav-link nav-link-with-dropdown`}
              >
                Domains{" "}
                <span className="chevron">
                  <NavChevron />
                </span>
              </div>
              <div className="dropdown-menu">
                <Link href="/domains" className="dropdown-item">
                  <div className={linkStyles}>
                    <span className="text-blue-300">
                      <AtSymbolIcon size="size-5" />
                    </span>
                    Domain Names
                  </div>
                </Link>
                <a
                  href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/cart.php?a=add&domain=register`}
                  className="dropdown-item"
                >
                  <div className={linkStyles}>
                    <span className="text-blue-300">
                      <ClipboardCopyIcon size="size-5" />
                    </span>
                    Register Domain
                  </div>
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/cart.php?a=add&domain=register`}
                  className="dropdown-item"
                >
                  <div className={linkStyles}>
                    <span className="text-blue-300">
                      <DocumentTextIcon size="size-5" />
                    </span>
                    My Domains
                  </div>
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/cart/domain/renew`}
                  className="dropdown-item"
                >
                  <div className={linkStyles}>
                    <span className="text-blue-300">
                      <ArrowPathIcon size="size-5" />
                    </span>
                    Renew Domain
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={` ${montserrat.className} nav-link nav-link-with-dropdown`}
              >
                Company{" "}
                <span className="chevron">
                  <NavChevron />
                </span>
              </div>
              <div className="dropdown-menu">
                <Link href="/about-us" className="dropdown-item">
                  About Us
                </Link>
                <Link href="/blog-posts" className="dropdown-item">
                  Blog
                </Link>
                <Link href="/terms-conditions" className="dropdown-item">
                  Terms & Conditions
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={` ${montserrat.className} nav-link nav-link-with-dropdown`}
              >
                Support{" "}
                <span className="chevron">
                  <NavChevron />
                </span>
              </div>
              <div className="dropdown-menu">
                <Link href="/contact-us" className="dropdown-item">
                  Contact Us
                </Link>
                <a
                  href="https://domains.bigzee.app/clientarea.php"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {/* Assuming external */}
                  Login
                </a>
                <a
                  href="https://domains.bigzee.app/clientarea.php"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {/* Assuming external */}
                  My Services
                </a>
                <Link href="/support/open-ticket" className="dropdown-item">
                  {" "}
                  {/* Assuming internal */}
                  Open Ticket
                </Link>
                <Link href="/support/tickets" className="dropdown-item">
                  {" "}
                  {/* Assuming internal */}
                  Tickets
                </Link>
              </div>
            </li>
            <li className="nav-item block lg:hidden">
              <div className="nav-link">
                <div className="smlscreen-client-login bg-primary text-white">
                  <a
                    href="https://domains.bigzee.app/clientarea.php"
                    className={` ${montserrat.className} text-xs font-medium`}
                  >
                    CLIENT ZONE
                  </a>
                </div>
                <div className="flex items-center justify-end gap-x-8">
                  <img
                    src="/svg/facebook-nav.svg"
                    alt="BigZee Digital Logo"
                    className="h-[1.9rem] w-[1.9rem]"
                  />
                  <img
                    src="/svg/whatsapp-nav.svg"
                    alt="BigZee Digital Logo"
                    className="h-[1.76rem] w-[1.76rem]"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden items-center justify-between gap-x-1 lg:flex">
          <div className="flex items-center justify-end gap-x-8">
            <img
              src="/svg/facebook-nav.svg"
              alt="BigZee Digital Logo"
              className="hidden h-[1.6rem] w-[1.6rem] lg:block"
            />
            <img
              src="/svg/whatsapp-nav.svg"
              alt="BigZee Digital Logo"
              className="hidden h-[1.425rem] w-[1.425rem] lg:block"
            />
          </div>
          <div className="client-login bg-primary text-white">
            <a
              href="https://domains.bigzee.app/clientarea.php"
              className={` ${montserrat.className} text-xs font-medium`}
            >
              CLIENT ZONE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
