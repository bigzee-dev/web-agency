import Link from "next/link";
import { footerLinks } from "./links";
import CompanyInfo from "./companyInfo";

const linkHeading =
  "text-md text-neutral-300 font-semibold tracking-wider mb-3";
const singleLink = "font-sans text-sm text-neutral-300/75";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-800">
      <div className="w-full px-8">
        <div className="mx-auto grid max-w-5xl gap-x-4 gap-y-14 pb-14 pt-20 md:grid-cols-12">
          <div className="order-2 md:order-1 md:col-span-5">
            <CompanyInfo />
          </div>
          <div className="order-1 grid grid-cols-2 gap-x-12 gap-y-8 pr-6 md:order-2 md:col-span-7 md:flex md:flex-wrap md:justify-between md:gap-x-0 md:gap-y-0 md:pr-0">
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <h4 className={linkHeading}>{group.heading}</h4>

                <ul className="mt-4 space-y-3.5">
                  {group.links.map((link) =>
                    link.type === "external" ? (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={singleLink}
                        >
                          {link.title}
                        </a>
                      </li>
                    ) : (
                      <li key={link.title}>
                        <Link href={link.href} className={singleLink}>
                          {link.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>

      <div className="w-full border-t border-gray-600 px-8">
        <div className="mx-auto flex max-w-5xl justify-between pb-16 pt-5 text-center font-sans text-sm font-light text-neutral-400">
          <p>
            <span className="text-neutral-300">&copy;</span>&nbsp;Deltaworx{" "}
            {currentYear}
          </p>
          <div className="flex items-center font-sans text-sm">
            <Link
              href="/legal/privacy-policy"
              className="text-neutral-400 hover:text-neutral-300"
            >
              Privacy Policy
            </Link>
            <span className="mx-1 md:mx-2">|</span>
            <Link
              href="/legal/acceptable-use-policy"
              className="text-neutral-400 hover:text-neutral-300"
            >
              Acceptable Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
