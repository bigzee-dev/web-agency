"use client";

import { useEffect } from "react";
import { cairo, montserrat } from "@/app/ui/fonts";
import { NavChevron } from "./chevron"; // Assuming this is correct path
import Link from "next/link";

export default function ClaudeNav() {
  useEffect(() => {
    // Helper function to query elements and ensure they exist
    const query = (selector) => document.querySelector(selector);
    const queryAll = (selector) => document.querySelectorAll(selector);

    // Elements
    const hamburger = query(".hamburger");
    const closeMenu = query(".close-menu");
    const navMenu = query(".nav-menu");
    const navbar = query(".navbar");
    const navLinksWithDropdown = queryAll(".nav-link-with-dropdown");
    const dropdownMenus = queryAll(".dropdown-menu");
    const dropdownItems = queryAll(".dropdown-item");

    // Ensure essential elements are present before proceeding
    if (!hamburger || !closeMenu || !navMenu || !navbar) {
      console.warn("ClaudeNav: Essential navigation elements not found.");
      return; // Exit useEffect if core elements are missing
    }

    // --- Handler Functions ---

    const closeAllDropdowns = () => {
      dropdownMenus.forEach((menu) => {
        menu.classList.remove("show");
      });
      queryAll(".chevron").forEach((chevron) => {
        if (chevron) chevron.style.transform = "rotate(0)";
      });
    };

    const handleHamburgerClick = () => {
      navMenu.classList.add("active");
      hamburger.classList.add("active");
      closeMenu.classList.add("active");
    };

    const handleCloseMenuClick = () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      closeMenu.classList.remove("active");
      closeAllDropdowns();
    };

    // Click handler for nav links with dropdowns
    const createNavLinkClickHandler = (link, index) => (e) => {
      e.preventDefault();
      const chevron = link.querySelector(".chevron");
      const currentDropdownMenu = dropdownMenus[index];

      if (!currentDropdownMenu) return;

      if (currentDropdownMenu.classList.contains("show")) {
        currentDropdownMenu.classList.remove("show");
        if (chevron) chevron.style.transform = "rotate(0)";
      } else {
        closeAllDropdowns(); // Close others before opening current
        currentDropdownMenu.classList.add("show");
        if (chevron) chevron.style.transform = "rotate(180deg)";
      }
    };

    // Store listeners for nav links to manage them on resize/cleanup
    const navLinkListeners = [];

    navLinksWithDropdown.forEach((link, index) => {
      const chevron = link.querySelector(".chevron");
      const parentNavItem = link.parentElement; // Assuming link is child of nav-item

      const clickHandler = createNavLinkClickHandler(link, index);
      link.addEventListener("click", clickHandler);

      const mouseEnterHandler = () => {
        if (window.innerWidth > 768) {
          closeAllDropdowns();
          if (dropdownMenus[index]) dropdownMenus[index].classList.add("show");
          if (chevron) chevron.style.transform = "rotate(180deg)";
        }
      };

      const mouseLeaveHandler = () => {
        if (window.innerWidth > 768) {
          if (dropdownMenus[index])
            dropdownMenus[index].classList.remove("show");
          if (chevron) chevron.style.transform = "rotate(0)";
        }
      };

      // Add listeners based on current screen width (handled better by resize)
      if (window.innerWidth > 768) {
        link.addEventListener("mouseenter", mouseEnterHandler);
        if (parentNavItem)
          parentNavItem.addEventListener("mouseleave", mouseLeaveHandler);
      }

      navLinkListeners.push({
        link,
        click: clickHandler,
        mouseenter: mouseEnterHandler,
        mouseleave: mouseLeaveHandler,
        parentElement: parentNavItem,
      });
    });

    const handleDocumentClick = (e) => {
      // Close dropdown if click is outside any nav-item
      // And also if the click is not on the hamburger menu itself
      if (!e.target.closest(".nav-item") && !e.target.closest(".hamburger")) {
        closeAllDropdowns();
      }
    };

    const handleDropdownItemClick = () => {
      if (navMenu.classList.contains("active")) {
        handleCloseMenuClick(); // Close mobile menu
      }
      // On desktop, dropdowns might need explicit closing if not handled by link navigation
      if (window.innerWidth > 768) {
        setTimeout(closeAllDropdowns, 50); // Small delay for link navigation
      }
    };

    dropdownItems.forEach((item) => {
      item.addEventListener("click", handleDropdownItemClick);
    });

    const handleResize = () => {
      closeAllDropdowns(); // Close all dropdowns on resize

      if (window.innerWidth > 768) {
        // Desktop mode
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        closeMenu.classList.remove("active");

        // Ensure desktop hover listeners are attached
        navLinkListeners.forEach((listener) => {
          listener.link.addEventListener("mouseenter", listener.mouseenter);
          if (listener.parentElement)
            listener.parentElement.addEventListener(
              "mouseleave",
              listener.mouseleave
            );
        });
      } else {
        // Mobile mode
        // Ensure desktop hover listeners are removed
        navLinkListeners.forEach((listener) => {
          listener.link.removeEventListener("mouseenter", listener.mouseenter);
          if (listener.parentElement)
            listener.parentElement.removeEventListener(
              "mouseleave",
              listener.mouseleave
            );
        });
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    // --- Add Event Listeners ---
    hamburger.addEventListener("click", handleHamburgerClick);
    closeMenu.addEventListener("click", handleCloseMenuClick);
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial call to handleResize to set correct listeners based on initial window size
    handleResize();

    // --- Cleanup Function ---
    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      closeMenu.removeEventListener("click", handleCloseMenuClick);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

      navLinkListeners.forEach((listener) => {
        listener.link.removeEventListener("click", listener.click);
        listener.link.removeEventListener("mouseenter", listener.mouseenter);
        if (listener.parentElement)
          listener.parentElement.removeEventListener(
            "mouseleave",
            listener.mouseleave
          );
      });

      dropdownItems.forEach((item) => {
        item.removeEventListener("click", handleDropdownItemClick);
      });
    };
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount.

  return (
    <nav className="x-padding border-b border-gray-300/70 navbar">
      <div className="navbar-container">
        <Link className="logo-container" href="/">
          {" "}
          {/* Updated href to be relative */}
          <img src="/img/just-logo.png" alt="BigZee Digital Logo" />{" "}
          {/* Added alt text */}
          <h4
            className={` ${cairo.className} font-light text-gray-700 ml-2 nav-logo mb-1`}
          >
            delta<span className="font-semibold text-gray-800">worx</span>
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
        <ul className={` ${montserrat.className} nav-menu `}>
          <li className="nav-item">
            <div
              className={` ${montserrat.className} nav-link nav-link-with-dropdown `}
            >
              Websites{" "}
              <span className="chevron">
                <NavChevron />
              </span>
            </div>
            <div className="dropdown-menu">
              <Link href="/websites" className="dropdown-item">
                Website Development
              </Link>
              <Link href="/ecommerce" className="dropdown-item">
                Ecommerce Stores
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
              href="/emails"
              className={` ${montserrat.className} nav-link `}
            >
              {/* Changed to Link */}
              Email
            </Link>
          </li>
          <li className="nav-item">
            <div
              className={` ${montserrat.className} nav-link nav-link-with-dropdown `}
            >
              Hosting{" "}
              <span className="chevron">
                <NavChevron />
              </span>
            </div>
            <div className="dropdown-menu">
              <Link href="/managed-hosting" className="dropdown-item">
                {" "}
                {/* Changed to Link if internal */}
                Managed Hosting
              </Link>
              <Link href="/hosting" className="dropdown-item">
                Web Hosting
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div
              className={` ${montserrat.className} nav-link nav-link-with-dropdown `}
            >
              Domains{" "}
              <span className="chevron">
                <NavChevron />
              </span>
            </div>
            <div className="dropdown-menu">
              <Link href="/domains" className="dropdown-item">
                Domains
              </Link>
              <a
                href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/cart.php?a=add&domain=register`}
                className="dropdown-item"
              >
                Register Domain
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/cart/domain/renew`}
                className="dropdown-item"
              >
                Renew Domain
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div
              className={` ${montserrat.className} nav-link nav-link-with-dropdown `}
            >
              About Us{" "}
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
              className={` ${montserrat.className} nav-link nav-link-with-dropdown `}
            >
              Help Center{" "}
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
        </ul>
        <div className="client-login">
          <a
            href="https://domains.bigzee.app/clientarea.php"
            className={` ${montserrat.className} text-xs font-medium `}
          >
            CLIENT ZONE
          </a>
        </div>
      </div>
    </nav>
  );
}
