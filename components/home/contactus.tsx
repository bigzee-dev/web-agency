import { montserrat } from "@/app/ui/fonts";
import { TiMessages } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="w-full border-t border-gray-400 bg-primary/5 pb-20 pt-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-base/7 font-semibold text-blue-600">
          Talk to us
        </h2>
        <p
          className={` ${montserrat.className} mx-auto mt-2 max-w-2xl text-pretty text-center text-3xl font-medium tracking-tight text-gray-700 md:text-3xl`}
        >
          Are you looking for a company that specialises in Web Development,
          Hosting, Cloud services and other web related technology
        </p>
        <div className="mx-auto mt-12 flex max-w-lg flex-col items-center justify-center gap-4 text-neutral-200 md:flex-row md:gap-3">
          <Link
            className="flex min-w-52 items-center justify-center gap-2 rounded-lg bg-primary p-2"
            href="/"
          >
            <TiMessages size="1.6em" />
            <span className="text-sm font-semibold">Contact us</span>
          </Link>
          <div className="flex min-w-52 cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-50 p-2 text-gray-800 ring-1 ring-gray-400">
            <FaWhatsapp size="1.5em" />
            <span className="text-sm font-semibold">Whatsapp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
