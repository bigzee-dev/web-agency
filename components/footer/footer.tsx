import Link from "next/link";
import { footerLinks } from "./links";
import CompanyInfo from "./companyInfo";

const linkHeading = "text-md text-gray-900 font-semibold tracking-wider";
const singleLink = "font-sans text-sm text-gray-600";

export default function Footer() {
  return (
    <footer className="mx-auto px-2">
      <div className="max-w-5xl mx-auto py-20 grid grid-cols-2 gap-8 md:grid-cols-3">
        <CompanyInfo />
        <div className="col-span-2 grid grid-cols-3">
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
      <div className="text-sm text-gray-600 font-medium text-center pt-5 pb-16 border-t border-gray-400">
        <p>&copy; Zimaman Enterprises. 2024</p>
      </div>
    </footer>
  );
}
