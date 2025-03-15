import Link from "next/link";
import { footerLinks } from "./links";
import CompanyInfo from "./companyInfo";

const linkHeading = "text-md text-neutral-300 font-semibold tracking-wider";
const singleLink = "font-sans text-sm text-neutral-300/75";

export default function Footer() {
  return (
    <footer className=" bg-gray-800">
      <div className="x-padding max-w-5xl mx-auto py-20 grid md:grid-cols-12 gap-x-8 gap-y-8">
        <div className="md:col-span-5">
          <CompanyInfo />
        </div>
        <div className="md:col-span-7 grid grid-cols-2 md:flex md:justify-between md:flex-wrap gap-x-8 md:gap-x-0 gap-y-6 md:gap-y-0 pr-6 md:pr-0">
          {footerLinks.map((link, i) => (
            <div key={i}>
              <h3 className={linkHeading}>{link.heading}</h3>
              <ul className="mt-4 space-y-3">
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
                  <Link href="#" className={singleLink}>
                    {link.thirdLink.title}
                  </Link>
                </li>
                <li>
                  <Link href="#" className={singleLink}>
                    {link.fourthLink?.title || null}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="x-padding text-sm text-neutral-400 font-medium text-center pt-5 pb-16 border-t border-gray-600">
        <p>&copy; Zimaman Enterprises. 2024</p>
      </div>
    </footer>
  );
}
