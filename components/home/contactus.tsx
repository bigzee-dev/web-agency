import { montserrat } from "@/app/ui/fonts";
import { TiMessages } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto py-16 bg-transparent">
      <h2 className="text-center text-base/7 font-semibold text-blue-600">
        Talk to us
      </h2>
      <p
        className={` ${montserrat.className} mx-auto mt-2 max-w-2xl text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl `}
      >
        Are you looking for a company that specialises in Web Development,
        Hosting, Cloud services and other web related technology
      </p>
      <div className="flex justify-center gap-3 max-w-lg mx-auto text-neutral-200 mt-12">
        <Link
          className="flex items-center justify-center gap-2 bg-primary p-2 min-w-52 rounded-lg"
          href="/"
        >
          <TiMessages size="1.6em" />
          <span className="text-sm font-semibold">Contact us</span>
        </Link>
        <div className="flex items-center justify-center gap-2 bg-neutral-100 border-2 border-blue-600 p-2 min-w-52 text-blue-600 rounded-lg cursor-pointer">
          <FaWhatsapp size="1.5em" />
          <span className="text-sm font-semibold  bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Chat on Whatsapp
          </span>
        </div>
      </div>
    </div>
  );
}
