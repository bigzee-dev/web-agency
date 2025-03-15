import Link from "next/link";
import Image from "next/image";
import { expletus } from "@/app/ui/fonts";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const iconProps = {
  size: "1.4em",
  strokeWidth: 1,
};

export default function CompanyInfo() {
  return (
    <div className="flex flex-col h-full">
      <div>
        <Link href="/" className="flex items-center gap-3 text-xl h-[45px] ">
          <Image
            src="/img/logo/bigzee-full-logo-dark.png"
            height={75}
            width={350}
            alt="svg"
            className="object-cover  h-full w-auto"
          />
        </Link>
      </div>
      <span className="w-max font-sans text-sm text-neutral-400  mt-4  pl-5">
        Plot 698, Old Mall
        <br />
        Maun
        <br />
        Botswana
      </span>
      <div className="hidden md:flex space-x-8 mt-4 pl-5">
        <div className="text-neutral-400 hover:text-neutral-400">
          <IoLogoWhatsapp {...iconProps} size="1.6em" />
          {/* <img
              src="/svg/whatsapp.svg"
              alt="facebook"
              width={30}
              height={30}
            /> */}
        </div>
        <Link href="#" className="text-neutral-400 hover:text-neutral-400">
          <FaFacebook {...iconProps} />
          {/* <img
              src="/svg/facebook.svg"
              alt="facebook"
              width={30}
              height={30}
            /> */}
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="#" className="text-neutral-400 hover:text-neutral-400">
          <FaXTwitter {...iconProps} />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>
    </div>
  );
}
