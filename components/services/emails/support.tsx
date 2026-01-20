import { grayButton, primaryButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";

import Link from "next/link";
import Image from "next/image";

export default function EmailSupport() {
  return (
    <div className="x-padding relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-x-12 gap-y-16 pb-6 pt-24 md:grid-cols-12 md:pb-12">
      <div className="col-span-1 flex flex-col items-start gap-y-10 md:col-span-6">
        <div className="space-y-4">
          <h2
            className={` ${montserrat.className} text-pretty text-4xl font-bold leading-[1.1] text-gray-800 md:text-[2.7rem]`}
          >
            Interested in our Email service? <br />
            <span className="text-gray-600">Lets Chat!</span>{" "}
          </h2>
          <p className={`text-pretty text-base text-gray-600`}>
            We look forward to hearing from you! Whether you have a question
            about our Email service, need assistance, or just want to say hello,
            we&apos;re here to help.
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-x-4 md:justify-start">
          <Link
            href="/contact-us"
            className={` ${primaryButton} !w-36 !min-w-36 md:!w-44 md:!min-w-44`}
          >
            Contact us
          </Link>
          <Link
            href="#pricing-plans"
            className={` ${grayButton} !w-36 !min-w-36 md:!w-44 md:!min-w-44`}
          >
            Pricing
          </Link>
        </div>
      </div>
      <div className="col-span-1 md:col-span-6">
        {/* Image */}
        <div className="relative aspect-[5/3] w-full">
          <Image
            src="/img/emails/email_on_devices.png"
            alt="email client"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
