import Link from "next/link";
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoWhatsapp } from "react-icons/io";
import { cairo } from "@/app/ui/fonts";
import { Mail, MapPinCheck, Phone } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

// const iconProps = {
//   size: "1.4em",
//   strokeWidth: 1,
// };

const contactLink =
  "group flex items-center gap-3 text-neutral-400 transition-colors";
const contactBadge =
  "flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/50 text-neutral-300 transition-all group-hover:text-white";

export default function CompanyInfo() {
  return (
    <div className="flex h-full flex-col">
      <Link className="logo-container" href="/">
        <img
          src="/logo/whiteLogo-500x500.png"
          alt="BigZee Digital Logo"
          className="opacity-90"
        />

        <h4
          className={` ${cairo.className} nav-logo mb-1 ml-2 font-light text-neutral-400`}
        >
          delta<span className="font-semibold text-neutral-300">worx</span>
        </h4>
      </Link>
      <div className="mt-4 flex items-start font-sans text-sm text-neutral-400">
        <MapPinCheck size="1.6em" strokeWidth={1} />
        <div className="ml-2 flex w-max flex-col space-y-1.5 font-sans text-sm">
          <span className="">Plot 698, Old Mall</span>
          <span className="">Maun</span>
          <span className="">Botswana</span>
        </div>
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        <li>
          <a
            href="mailto:admin@deltaworx.co.bw"
            className={`${contactLink} hover:text-accent`}
            aria-label="Email us"
          >
            <span
              className={`${contactBadge} group-hover:border-accent group-hover:bg-accent`}
            >
              <Mail size={17} strokeWidth={1.75} />
            </span>
            <span className="text-sm">admin@deltaworx.co.bw</span>
          </a>
        </li>
        <li>
          <a
            href="tel:+26772537524"
            className={`${contactLink} hover:text-accent`}
            aria-label="Call us"
          >
            <span
              className={`${contactBadge} group-hover:border-accent group-hover:bg-accent`}
            >
              <Phone size={16} strokeWidth={1.75} />
            </span>
            <span className="text-sm">+267 7253 7524</span>
          </a>
        </li>
        <li>
          <a
            href="https://web.facebook.com/DeltaworxBW"
            target="_blank"
            rel="noopener noreferrer"
            className={`${contactLink} hover:text-[#1877F2]`}
            aria-label="Visit our Facebook page"
          >
            <span
              className={`${contactBadge} group-hover:border-[#1877F2] group-hover:bg-[#1877F2]`}
            >
              <FaFacebook size={17} />
            </span>
            <span className="text-sm">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/26772537524"
            target="_blank"
            rel="noopener noreferrer"
            className={`${contactLink} hover:text-[#25D366]`}
            aria-label="Chat with us on WhatsApp"
          >
            <span
              className={`${contactBadge} group-hover:border-[#25D366] group-hover:bg-[#25D366]`}
            >
              <FaWhatsapp size={18} />
            </span>
            <span className="text-sm">WhatsApp</span>
          </a>
        </li>
      </ul>
      {/*  </div>
        <Link href="#" className="text-neutral-400 hover:text-neutral-400">
          <FaFacebook {...iconProps} />
       
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="#" className="text-neutral-400 hover:text-neutral-400">
          <FaXTwitter {...iconProps} />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>*/}
    </div>
  );
}
