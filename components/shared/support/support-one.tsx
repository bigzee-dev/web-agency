import {
  btnDimensions,
  grayButton,
  sectionHeadings,
  whiteButton,
} from "@/app/ui/customTailwindClasses";
import Link from "next/link";

export default function SupportOne() {
  return (
    <div className="relative mx-auto my-12 max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 p-10 pl-16">
      {/* background pattern */}
      <img
        src="/img/bg-pattern.png"
        alt="bg-pattern"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {/* overlay */}
      <div className="via gray-900/20 absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-gray-900/35 via-gray-900/20 to-gray-900/10"></div>
      {/* content */}
      <div className="relative z-10 flex h-full w-full items-center justify-between">
        <div className="flex flex-col items-center gap-y-10">
          <div className="space-y-4">
            <h2 className="text-balance text-center text-4xl font-bold text-white md:text-4xl">
              Interested in Web Hosting? Lets Chat!
            </h2>
            <p className="text-pretty text-center text-base text-gray-300">
              We look forward to hearing from you! Whether you have a question
              about our services, need assistance, or just want to say hello,
              we&apos;re here to help.
            </p>
          </div>

          <div className="mt-auto flex items-center justify-center">
            <Link href="/contact-us" className={` ${whiteButton} `}>
              Contact us <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
        <img
          src="/svg/customer-support.svg"
          alt="support"
          className="relative z-10 w-[26rem]"
        />
      </div>
    </div>
  );
}
