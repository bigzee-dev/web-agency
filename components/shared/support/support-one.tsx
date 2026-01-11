import {
  grayButton,
  lightBgButton,
  transparentButton,
  whiteButton,
} from "@/app/ui/customTailwindClasses";
import Link from "next/link";

export default function SupportOne({ text }: { text?: string }) {
  return (
    <div className="relative mx-auto mb-0 mt-4 max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 px-8 pb-8 pt-10 md:my-12 md:p-10 md:pl-20">
      {/* background pattern */}
      <img
        src="/img/bg-pattern.png"
        alt="bg-pattern"
        className="absolute inset-0 z-0 hidden h-full w-full object-cover md:block"
      />
      {/* overlay */}
      <div className="via gray-900/20 absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-gray-900/35 via-gray-900/20 to-gray-900/10"></div>
      {/* content */}
      <div className="relative z-10 flex h-full w-full flex-col-reverse items-center justify-between gap-x-8 gap-y-8 md:flex-row">
        <div className="flex flex-col gap-y-8 md:gap-y-10">
          <div className="space-y-5">
            <h2 className="text-balance text-4xl font-bold leading-[1.15] text-white md:text-[2.8rem]">
              Interested in {text}? Lets Chat!
            </h2>
            <p className="text-pretty text-md text-gray-300 md:text-base">
              We look forward to hearing from you! Whether you have a question
              about our services, need assistance, or just want to say hello,
              we&apos;re here to help.
            </p>
          </div>

          <div className="mt-auto flex items-center gap-x-4 text-secondary">
            <Link href="/contact-us" className={` ${whiteButton} `}>
              Contact us
            </Link>
            <Link href="/contact-us" className={` ${transparentButton} `}>
              Pricing
            </Link>
          </div>
        </div>
        <img
          src="/svg/customer-support.svg"
          alt="support"
          className="z-10 w-[32rem]"
        />
      </div>
    </div>
  );
}
