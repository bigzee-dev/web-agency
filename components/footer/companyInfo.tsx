import Link from "next/link";
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoWhatsapp } from "react-icons/io";
import { cairo } from "@/app/ui/fonts";
import { Mail, MapPinCheck, Phone, Users } from "lucide-react";

// const iconProps = {
//   size: "1.4em",
//   strokeWidth: 1,
// };

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

      <div className="mt-4 flex items-center">
        <Mail size="1.3em" strokeWidth={1} className="text-neutral-400" />
        <span className="ml-2 text-sm text-neutral-400">
          admin@deltaworx.co.bw
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <Phone size="1.3em" strokeWidth={1} className="text-neutral-400" />
        <span className="ml-2 text-sm text-neutral-400">(+267) 72537524</span>
      </div>
      <div className="mt-4 flex items-center">
        <Users size="1.4em" strokeWidth={1} className="text-neutral-400" />
        <Link
          href="https://web.facebook.com/DeltaworxBW/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-neutral-400 hover:text-blue-600"
        >
          @DeltaworxBW
        </Link>
      </div>

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
