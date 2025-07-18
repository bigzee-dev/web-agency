import Link from "next/link";
import { footerLinks } from "./links";
import CompanyInfo from "./companyInfo";

const linkHeading = "text-md text-neutral-300 font-semibold tracking-wider";
const singleLink = "font-sans text-sm text-neutral-300/75";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800">
      <div className="w-full px-8">
        <div className="mx-auto grid max-w-5xl gap-x-4 gap-y-14 pb-14 pt-16 md:grid-cols-12">
          <div className="order-2 md:order-1 md:col-span-5">
            <CompanyInfo />
          </div>
          <div className="order-1 grid grid-cols-2 gap-x-12 gap-y-8 pr-6 md:order-2 md:col-span-7 md:flex md:flex-wrap md:justify-between md:gap-x-0 md:gap-y-0 md:pr-0">
            {footerLinks.map((link, i) => (
              <div key={i}>
                <h3 className={linkHeading}>{link.heading}</h3>
                <ul className="mb-4 mt-4 flex flex-col gap-y-3">
                  <li>
                    <Link href="#" className={singleLink}>
                      {link.firstLink.title}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={singleLink}>
                      {link.secondLink.title}
                    </Link>
                  </li>
                  <li>
                    {link.thirdLink?.title && (
                      <Link href="#" className={singleLink}>
                        {link.thirdLink.title || null}
                      </Link>
                    )}
                  </li>

                  {link.fourthLink?.title && (
                    <li>
                      <Link href="#" className={`${singleLink} `}>
                        {link.fourthLink.title || null}
                      </Link>
                    </li>
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
            <span className="text-neutral-300">&copy;</span>&nbsp;Deltaworx 2024
          </p>
          <div className="flex items-center font-sans text-sm">
            <Link
              href="/privacy-policy"
              className="text-neutral-400 hover:text-neutral-300"
            >
              Privacy Policy
            </Link>
            <span className="mx-1 md:mx-2">|</span>
            <Link
              href="/acceptable-use"
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
