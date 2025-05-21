import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { cairo, montserrat } from "@/app/ui/fonts";

const iconProps = {
  size: "1.4em",
  strokeWidth: 1,
};

export default function CompanyInfo() {
  return (
    <div className="flex flex-col h-full">
      <Link className="logo-container" href="/">
        <img
          src="/img/just-logo.png"
          alt="BigZee Digital Logo"
          className="grayscale"
        />

        <h4
          className={` ${cairo.className} font-light text-neutral-400 ml-2 mb-1 nav-logo`}
        >
          delta<span className="font-semibold text-neutral-300">worx</span>
        </h4>
      </Link>

      <span className="w-max font-sans text-sm text-neutral-400  mt-4  pl-5">
        Plot 698, Old Mall
        <br />
        Maun
        <br />
        Botswana
      </span>

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
