import Link from "next/link";
import { footerLinks } from "./links";
import CompanyInfo from "./companyInfo";

const linkHeading = "text-md text-gray-900 font-semibold tracking-wider";
const singleLink = "text-sm text-gray-600";

export default function Footer() {
  return (
    <footer className="mx-auto px-2">
      <div className="max-w-5xl mx-auto py-20 grid grid-cols-2 gap-8 md:grid-cols-4">
        <CompanyInfo />
        {footerLinks.map((link, i) => (
          <div>
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
            </ul>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-600 font-medium text-center py-5 border-t border-gray-400">
        <p>&copy; Zimaman Enterprises. 2024</p>
      </div>
    </footer>
  );
}
