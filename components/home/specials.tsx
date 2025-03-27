import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";

export default function specials() {
  return (
    <div className="x-padding w-full flex justify-center items-center bg-gradient-to-r from-secondary to-primary py-2.5">
      <Link
        href="/emails"
        className="flex justify-center items-center bg-white/5 gap-x-3 py-1 pl-3 pr-1 border border-neutral-200/70 rounded-3xl hover:bg-white/10"
      >
        <p className="text-sm text-neutral-100 font-medium">Business Email</p>
        <Separator orientation="vertical" className="text-neutral-200 h-4" />
        <p className="text-neutral-200 font-medium text-md">
          P25<span className="text-neutral-400"> /month</span>
        </p>
        <span>
          <IoArrowForwardCircle className="text-neutral-300" size="1.6em" />
        </span>
      </Link>

      {/* <div className="flex items-center gap-x-1">
        <img src="/svg/price-tag.svg" alt="specials" className="w-10 h-10 " />
        <div className="font-sans text-sm text-neutral-300/70">
          <span className="text-neutral-200 font-medium">P25</span>/month
        </div>
      </div> */}

      {/* <a
        href="https://domains.bigzee.app/index.php?rp=/store/business-email/basic-email"
        className="flex items-center justify-center font-sans text-md text-secondary font-medium bg-[#d9d9d9] py-1 px-2 rounded-md uppercase"
      >
        Buy Now
      </a> */}
    </div>
  );
}
