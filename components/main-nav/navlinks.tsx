import Link from "next/link";
import { NavChevron } from "./chevron";
import { montserrat } from "@/app/ui/fonts";

export default function NavLinks() {
  return (
    <ul className="cst-nav-nav-links">
      <li className="cst-nav-nav-item">
        <a
          href="#"
          className={` ${montserrat.className} cst-nav-nav-link cst-nav-dropdown-toggle`}
        >
          About Us
          <NavChevron />
        </a>
        <div
          className={` ${montserrat.className} font-medium text-md cst-nav-dropdown `}
        >
          <Link href="/about-us" className="cst-nav-dropdown-item">
            About Us
          </Link>
          <Link href="/blog-posts" className="cst-nav-dropdown-item">
            Blog
          </Link>
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
        <div
          className={` ${montserrat.className} font-medium text-md cst-nav-dropdown `}
        >
          <a href="#" className="cst-nav-dropdown-item">
            Website Development
          </a>
          <a href="#" className="cst-nav-dropdown-item">
            Ecommerce
          </a>
        </div>
      </li>
      <li className="cst-nav-nav-item">
        <a href="#" className={` ${montserrat.className} cst-nav-nav-link `}>
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
        <div
          className={` ${montserrat.className} font-medium text-md cst-nav-dropdown `}
        >
          <Link href="/domains" className="cst-nav-dropdown-item">
            Domain Names
          </Link>
          <a
            href="https://domains.bigzee.app/cart.php?a=add&domain=register"
            className="cst-nav-dropdown-item"
          >
            Register a Domain
          </a>
          <a href="#" className="cst-nav-dropdown-item">
            My Domains
          </a>
          <a href="#" className="cst-nav-dropdown-item">
            Renew Domains
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
        <div
          className={` ${montserrat.className} font-medium text-md cst-nav-dropdown `}
        >
          <a href="#" className="cst-nav-dropdown-item">
            Managed Hosting
          </a>
          <a href="#" className="cst-nav-dropdown-item">
            Shared Hosting
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
        <div
          className={` ${montserrat.className} font-medium text-md cst-nav-dropdown `}
        >
          <a href="#" className="cst-nav-dropdown-item">
            Contact Us
          </a>
          <a href="#" className="cst-nav-dropdown-item">
            Tickets
          </a>
          <a href="#" className="cst-nav-dropdown-item">
            Open ticket
          </a>
        </div>
      </li>
    </ul>
  );
}
