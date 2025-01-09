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
    <div>
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
              className={` ${expletus.className} text-gray-800 text-2xl tracking-wider font-extrabold`}
            >
              bigZee
            </h6>
          </Link>
        </div>
        <span className="w-max font-sans text-sm text-gray-700 font-medium mt-1.5  bg-gradient-to-r from-secondary via-blue-700 to-cyan-600 text-transparent bg-clip-text">
          Web Technology
          <br />
          Specialists
        </span>
        <div className="flex space-x-8 mt-auto">
          <div className="text-gray-500 hover:text-gray-500">
            <IoLogoWhatsapp {...iconProps} size="1.6em" />
            {/* <img
              src="/svg/whatsapp.svg"
              alt="facebook"
              width={30}
              height={30}
            /> */}
          </div>
          <Link href="#" className="text-gray-500 hover:text-gray-500">
            <FaFacebook {...iconProps} />
            {/* <img
              src="/svg/facebook.svg"
              alt="facebook"
              width={30}
              height={30}
            /> */}
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-500">
            <FaXTwitter {...iconProps} />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
