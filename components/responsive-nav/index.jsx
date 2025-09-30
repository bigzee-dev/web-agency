"use client";

import { cairo, montserrat } from "@/app/ui/fonts";
import { NavChevron } from "./chevron";
import useResponsiveNav from "@/app/hooks/useResponsiveNav";
import {
  WebsiteIcon,
  WebAppIcon,
  ShoppingBagIcon,
  EmailIcon,
  WebMailIcon,
  MouseClickIcon,
  LinuxIcon,
  WindowsIcon,
  ServerStackIcon,
  CloudUploadIcon,
  DomainIcon,
  ClipboardCopyIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  InfoIcon,
  BookIcon,
  ListIcon,
  LoginIcon,
  RegisterIcon,
  DashboardIcon,
  OpenTicketIcon,
  TicketsIcon,
  KnowledgebaseIcon,
  ChatIcon,
} from "../nav-icons";
import Link from "next/link";

export default function ResponsiveNav() {
  useResponsiveNav(); // <-- This runs the nav javascript

  return (
    <nav className="x-padding navbar border-b border-gray-300/70">
      <div className="navbar-container">
        <Link className="logo-container text-neutral-800 lg:mr-6" href="/">
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
                      <MouseClickIcon size="size-5" />
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
              <div
                className={` ${montserrat.className} nav-link nav-link-with-dropdown`}
              >
                {/* Changed to Link */}
                Email
                <span className="chevron text-neutral-700">
                  <NavChevron />
                </span>
              </div>
              <div className="dropdown-menu">
                <Link href="/emails" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <EmailIcon size="size-5" />
                    </span>
                    Business Email
                  </div>{" "}
                </Link>
                <Link
                  href="https://webmail.bigzee.app"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="dropdown-item-link">
                    <span>
                      <WebMailIcon size="size-5" />
                    </span>
                    DeltaMail Login
                  </div>{" "}
                </Link>
              </div>
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
                <Link href="/linux-vps" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <LinuxIcon size="size-5" />
                    </span>
                    Linux Cloud VPS
                  </div>
                </Link>
                <Link href="/linux-vps" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <WindowsIcon size="size-5" />
                    </span>
                    Windows VPS
                  </div>
                </Link>
                <Link href="/web-hosting" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <ServerStackIcon size="size-5" />
                    </span>
                    Web Hosting
                  </div>
                </Link>
                <Link href="/web-hosting" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <CloudUploadIcon size="size-5" />
                    </span>
                    Cloud Storage
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
                      <DomainIcon size="size-5" />
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
                {/* <a
                  href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/cart/domain/renew`}
                  className="dropdown-item"
                >
                  <div className="dropdown-item-link">
                    <span>
                      <ArrowPathIcon size="size-5" />
                    </span>
                    Renew Domain
                  </div>
                </a> */}
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
                  <div className="dropdown-item-link">
                    <span>
                      <InfoIcon size="size-5" />
                    </span>
                    About Us
                  </div>
                </Link>
                <Link href="/blog-posts" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <BookIcon size="size-5" />
                    </span>
                    Blog
                  </div>
                </Link>
                <Link href="/terms-conditions" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <ListIcon size="size-5" />
                    </span>
                    Terms & Conditions
                  </div>
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
                <a
                  href="https://domains.bigzee.app/clientarea.php"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="dropdown-item-link">
                    <span>
                      <LoginIcon size="size-5" />
                    </span>
                    Login
                  </div>
                </a>
                <Link href="/contact-us" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <RegisterIcon size="size-5" />
                    </span>
                    Register
                  </div>
                </Link>
                <a
                  href="https://domains.bigzee.app/clientarea.php"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="dropdown-item-link">
                    <span>
                      <DashboardIcon size="size-5" />
                    </span>
                    Dashboard
                  </div>
                </a>
                <Link href="/support/open-ticket" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <OpenTicketIcon size="size-5" />
                    </span>
                    Open Ticket
                  </div>
                </Link>
                <Link href="/support/tickets" className="dropdown-item">
                  <div className="dropdown-item-link">
                    <span>
                      <TicketsIcon size="size-5" />
                    </span>
                    Tickets
                  </div>
                </Link>
                <a
                  href="https://domains.bigzee.app/clientarea.php"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="dropdown-item-link">
                    <span>
                      <KnowledgebaseIcon size="size-5" />
                    </span>
                    Knowledgebase
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item block lg:hidden">
              <div className="nav-link nav-buttons">
                <Link
                  href=""
                  className="box-border flex items-center justify-center gap-x-1.5 rounded-[10px] border-2 border-gray-800 bg-neutral-100 px-[12px] py-[8px] text-xs font-medium uppercase text-gray-800"
                >
                  <ChatIcon size="size-5" />
                  Contact us
                </Link>
                <div className="smlscreen-client-login box-border border-2 border-transparent bg-primary text-white">
                  <a
                    href="https://domains.bigzee.app/clientarea.php"
                    className={` ${montserrat.className} flex items-center justify-center gap-x-1.5 text-xs font-medium`}
                  >
                    <LoginIcon size="size-5" />
                    CLIENT ZONE
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden items-center justify-between text-gray-800 lg:flex">
          <Link
            href=""
            className="box-border flex items-center justify-center gap-x-1 rounded-[10px] border-2 border-gray-800 bg-neutral-100 px-[10px] py-[8px] text-xs font-medium uppercase text-gray-800"
          >
            <ChatIcon size="size-5" />
            Contact us
          </Link>
          <div className="client-login box-border border-2 border-transparent bg-primary text-white">
            <a
              href="https://domains.bigzee.app/clientarea.php"
              className={` ${montserrat.className} flex items-center justify-center gap-x-1 text-xs font-medium`}
            >
              <LoginIcon size="size-5" />
              CLIENT ZONE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
