"use client";

import { cairo, montserrat } from "@/app/ui/fonts";
import { NavChevron } from "./chevron";
import useResponsiveNav from "@/app/hooks/useResponsiveNav";
import {
  WebsiteIcon,
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

  return (
    <nav className="x-padding navbar border-b border-gray-300/70">
      <div className="navbar-container">
        <Link className="logo-container mr-6" href="/">
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
                  <div className="dropdown-item-link">
                    <span>
                      <WebsiteIcon />
                    </span>
                    Website Development
                  </div>{" "}
                </Link>
                <Link href="/ecommerce" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <WebAppIcon />
                    </span>
                    Web Applications
                  </div>{" "}
                </Link>
                <Link href="/ecommerce" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
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
                  <div className="dropdown-item-link">
                    <span>
                      <ServerStackIcon size="size-5" />
                    </span>
                    Web Hosting
                  </div>
                </Link>
                <Link href="/managed-hosting" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
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
                  <div className="dropdown-item-link">
                    <span>
                      <AtSymbolIcon size="size-5" />
                    </span>
                    Domain Names
                  </div>
                </Link>
                <a
                  href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/cart.php?a=add&domain=register`}
                  className="dropdown-item"
                >
                  <div className="dropdown-item-link">
                    <span>
                      <ClipboardCopyIcon size="size-5" />
                    </span>
                    Register Domain
                  </div>
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/cart.php?a=add&domain=register`}
                  className="dropdown-item"
                >
                  <div className="dropdown-item-link">
                    <span>
                      <DocumentTextIcon size="size-5" />
                    </span>
                    My Domains
                  </div>
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/cart/domain/renew`}
                  className="dropdown-item"
                >
                  <div className="dropdown-item-link">
                    <span>
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
        <div className="hidden items-center justify-between lg:flex">
          <Link
            href=""
            className="box-border flex items-center justify-center gap-x-1 rounded-[10px] border-2 border-gray-800 bg-neutral-100 px-[10px] py-[8px] text-xs font-medium uppercase text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Contact us
          </Link>
          <div className="client-login box-border border-2 border-transparent bg-primary text-white">
            <a
              href="https://domains.bigzee.app/clientarea.php"
              className={` ${montserrat.className} flex items-center justify-center gap-x-1 text-xs font-medium`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              CLIENT ZONE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
