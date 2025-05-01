"use client";

import { useEffect } from "react";
import { NavChevron } from "./chevron";
import { montserrat } from "@/app/ui/fonts";
import { cairo } from "@/app/ui/fonts";
import Image from "next/image";

export default function MainNav() {
  useEffect(() => {
    // Mobile menu toggle
    const menuToggle = document.querySelector(".cst-nav-menu-toggle");
    const navLinks = document.querySelector(".cst-nav-nav-links");
    const navbar = document.querySelector(".cst-nav-navbar");

    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Mobile dropdown toggles
    const dropdownToggles = document.querySelectorAll(
      ".cst-nav-dropdown-toggle"
    );

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        // Only handle clicks on mobile
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const navItem = toggle.parentElement;
          navItem.classList.toggle("active");
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        const isNavbarClick = e.target.closest(".cst-nav-navbar-container");
        if (!isNavbarClick && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          menuToggle.classList.remove("active");

          // Close any open dropdowns
          document
            .querySelectorAll(".cst-nav-nav-item.active")
            .forEach((item) => {
              item.classList.remove("active");
            });
        }
      }
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        // Reset mobile menu state when returning to desktop
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        document.querySelectorAll(".nav-item.active").forEach((item) => {
          item.classList.remove("active");
        });
      }
    });

    // Add scrolled class to navbar when scrolling
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  return (
    <nav className="cst-nav-navbar">
      <div className="cst-nav-navbar-container">
        <a className="cst-logo-container" href="http://localhost:3000">
          <img src="/img/just-logo.png" alt="svg" />
          <h4
            className={` ${cairo.className} text-3xl text-gray-700 font-semibold ml-2`}
          >
            Big
            <span className="bg-gradient-to-r from-primary via-blue-700 to-cyan-600 text-transparent bg-clip-text">
              Zee
            </span>{" "}
            Digital
          </h4>
        </a>
        {/*--The mobile menu hamburger--*/}
        <button className="cst-nav-menu-toggle" aria-label="Toggle menu">
          {/*-- Hamburger Icon --*/}
          <svg
            className="cst-nav-hamburger-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>

          <svg
            className="cst-nav-close-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {/*--Navigation links-- */}
        <ul className="cst-nav-nav-links">
          <li className="cst-nav-nav-item">
            <a
              href="#"
              className={` ${montserrat.className} cst-nav-nav-link cst-nav-dropdown-toggle`}
            >
              About Us
              <NavChevron />
            </a>
            <div className="cst-nav-dropdown">
              <a href="#" className="cst-nav-dropdown-item">
                Web Development
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Mobile Apps
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                UI/UX Design
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Consulting
              </a>
            </div>
          </li>
          <li className="cst-nav-nav-item">
            <a
              href="#"
              className={` ${montserrat.className} cst-nav-nav-link cst-nav-dropdown-toggle `}
            >
              Websites
              <NavChevron />
            </a>
            <div className="cst-nav-dropdown">
              <a href="#" className="cst-nav-dropdown-item">
                Web Development
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Mobile Apps
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                UI/UX Design
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Consulting
              </a>
            </div>
          </li>
          <li className="cst-nav-nav-item">
            <a
              href="#"
              className={` ${montserrat.className} cst-nav-nav-link `}
            >
              Email
            </a>
          </li>
          <li className="cst-nav-nav-item">
            <a
              href="#"
              className={` ${montserrat.className} cst-nav-nav-link cst-nav-dropdown-toggle `}
            >
              Domains
              <NavChevron />
            </a>
            <div className="cst-nav-dropdown">
              <a href="#" className="cst-nav-dropdown-item">
                Software
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Templates
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Plugins
              </a>
            </div>
          </li>
          <li className="cst-nav-nav-item">
            <a
              href="#"
              className={` ${montserrat.className} cst-nav-nav-link cst-nav-dropdown-toggle `}
            >
              Hosting
              <NavChevron />
            </a>
            <div className="cst-nav-dropdown">
              <a href="#" className="cst-nav-dropdown-item">
                Web Development
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Mobile Apps
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                UI/UX Design
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Consulting
              </a>
            </div>
          </li>

          <li className="cst-nav-nav-item">
            <a
              href="#"
              className={` ${montserrat.className} cst-nav-nav-link cst-nav-dropdown-toggle `}
            >
              Help Center
              <NavChevron />
            </a>
            <div className="cst-nav-dropdown">
              <a href="#" className="cst-nav-dropdown-item">
                Software
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Templates
              </a>
              <a href="#" className="cst-nav-dropdown-item">
                Plugins
              </a>
            </div>
          </li>
          <li className="cst-nav-nav-item">
            <a
              href="#"
              className={` ${montserrat.className} cst-nav-nav-link cst-client-login `}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
