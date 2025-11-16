import Link from "next/link";
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoWhatsapp } from "react-icons/io";
import { cairo } from "@/app/ui/fonts";

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
      <div className="mt-4 flex w-max flex-col pl-5 font-sans text-sm text-neutral-400">
        <span className="">Plot 698, Old Mall</span>
        <span className="mt-1">Maun</span>
        <span className="mt-1">Botswana</span>
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
