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
      <div className="-mt-4">
        <Link href="/" className="flex items-center gap-3 text-xl">
          <Image
            src="/svg/bigZee-logo.svg"
            height={50}
            width={50}
            alt="svg"
            className="grayscale"
          />

          <h6
            className={` ${expletus.className} text-neutral-300 text-2xl tracking-wider font-extrabold`}
          >
            bigZee
          </h6>
        </Link>
      </div>
      <span className="w-max font-sans text-sm text-neutral-400  mt-1.5 font-medium ">
        Web Technology
        <br />
        Specialists
      </span>
      <div className="hidden md:flex space-x-8 mt-auto">
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
