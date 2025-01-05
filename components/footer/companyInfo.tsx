import Link from "next/link";
import Image from "next/image";
import { expletus } from "@/app/ui/fonts";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const iconProps = {
  size: "1.4em",
  strokeWidth: 1,
};

export default function CompanyInfo() {
  return (
    <div>
      <div className="flex flex-col h-full -mt-2.5 mr-2">
        <div>
          <Link href="/" className="flex items-center gap-3 text-xl">
            <Image
              src="/svg/bigZee-logo.svg"
              height={50}
              width={50}
              alt="svg"
              className="grayscale"
            />

            <h6
              className={` ${expletus.className} text-gray-700 tracking-wider font-extrabold`}
            >
              bigZee
            </h6>
          </Link>
        </div>
        <span className="font-sans text-sm text-secondary font-medium mt-1">
          Web Technology Specialists
        </span>
        <div className="flex space-x-6 mt-6">
          <div className="text-gray-500 hover:text-gray-600">
            <FaWhatsapp {...iconProps} size="1.6em" />
          </div>
          <Link href="#" className="text-gray-500 hover:text-gray-600">
            <FaFacebook {...iconProps} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-600">
            <FaXTwitter {...iconProps} />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
