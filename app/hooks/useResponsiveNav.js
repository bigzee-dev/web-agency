import { useEffect } from "react";

export default function useResponsiveNav() {
  useEffect(() => {
    // Helper function to query elements and ensure they exist
    const query = (selector) => document.querySelector(selector);
    const queryAll = (selector) => document.querySelectorAll(selector);

    // Elements
    const logo = query(".logo");
    const hamburger = query(".hamburger");
    const closeMenu = query(".close-menu");
    const contactusbtn = query(".contact-us-btn");
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

    const handleLogoClick = () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      closeMenu.classList.remove("active");
      closeAllDropdowns();
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
      e.stopPropagation();
      const chevron = link.querySelector(".chevron");
      const currentDropdownMenu = dropdownMenus[index];

      if (!currentDropdownMenu) return;

      // Only close others, not the current one
      if (currentDropdownMenu.classList.contains("show")) {
        currentDropdownMenu.classList.remove("show");
        if (chevron) chevron.style.transform = "rotate(0)";
      } else {
        // Close all except the current one
        dropdownMenus.forEach((menu, idx) => {
          if (menu !== currentDropdownMenu) menu.classList.remove("show");
          if (navLinksWithDropdown[idx]) {
            const chev = navLinksWithDropdown[idx].querySelector(".chevron");
            if (chev) chev.style.transform = "rotate(0)";
          }
        });
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
      // e.stopPropagation();
      if (navMenu.classList.contains("active")) {
        handleCloseMenuClick(); // Close mobile menu
      }
      // On desktop, dropdowns might need explicit closing if not handled by link navigation
      if (window.innerWidth > 768) {
        setTimeout(closeAllDropdowns, 70); // Small delay for link navigation
      }
    };

    const handleContactUsClick = () => {
      // e.stopPropagation();
      if (navMenu.classList.contains("active")) {
        handleCloseMenuClick(); // Close mobile menu
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
              listener.mouseleave,
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
              listener.mouseleave,
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
    logo.addEventListener("click", handleLogoClick);
    hamburger.addEventListener("click", handleHamburgerClick);
    closeMenu.addEventListener("click", handleCloseMenuClick);
    contactusbtn.addEventListener("click", handleContactUsClick);
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial call to handleResize to set correct listeners based on initial window size
    handleResize();

    // --- Cleanup Function ---
    return () => {
      logo.removeEventListener("click", handleLogoClick);
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
            listener.mouseleave,
          );
      });

      dropdownItems.forEach((item) => {
        item.removeEventListener("click", handleDropdownItemClick);
      });
    };
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount.
}
