import { montserrat } from "@/app/ui/fonts";
import { TiMessages } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { grayButton, primaryButton } from "@/app/ui/customTailwindClasses";

export default function ContactUs() {
  return (
    <div className="w-full border-t border-gray-300 bg-neutral-200/30 pb-20 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <Badge className="mb-4 bg-primary/20 text-sm text-blue-600 hover:bg-primary/20">
          Talk to us
        </Badge>
        <p
          className={` ${montserrat.className} mx-auto mt-2 max-w-2xl text-pretty text-center text-3xl font-medium tracking-tight text-gray-800 md:text-3xl`}
        >
          Are you looking for a company that specialises in Web Development,
          Hosting, Cloud services and other web related technology
        </p>
        <div className="mx-auto mt-12 flex max-w-lg flex-col items-center justify-center gap-4 text-neutral-200 md:flex-row md:gap-3">
          <Link
            className={` ${primaryButton} inline-flex cursor-pointer justify-center gap-x-2`}
            href="/"
          >
            <TiMessages size="1.5em" />
            <span className="text-md font-semibold">Contact us</span>
          </Link>
          <div
            className={` ${grayButton} inline-flex cursor-pointer items-center justify-center gap-x-2`}
          >
            <FaWhatsapp size="1.35em" />
            <span className="text-md font-semibold">Whatsapp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
