"use client";
import { pageHeadings, smallTextHeadings } from "../ui/customTailwindClasses";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  let heading;

  switch (pathname) {
    case "/legal/privacy-policy":
      heading = "Privacy Policy";
      break;
    case "/legal/terms-of-service":
      heading = "Terms of Service";
      break;
    case "/legal/acceptable-use-policy":
      heading = "Acceptable Use Policy";
      break;
    default:
      heading = "Terms and Conditions";
      break;
  }

  return (
    <div className="py-16">
      <p className={` ${smallTextHeadings} `}>Legal</p>
      <h1 className={`${pageHeadings} w-full pt-3 text-center`}>{heading}</h1>
    </div>
  );
}
