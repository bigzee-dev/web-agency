import { grayButton, primaryButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";

import Link from "next/link";
import Image from "next/image";

export default function EmailSupport() {
  return (
    <div className="relative mx-auto grid w-full max-w-6xl grid-cols-12 items-center gap-x-20 py-20 pt-24">
      {/* Blur component */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#477cf0] to-[#6799e8] opacity-20"
        />
      </div>
      <div className="col-span-7 flex flex-col items-start gap-y-10">
        <div className="space-y-4">
          <h2
            className={` ${montserrat.className} text-pretty text-4xl font-semibold text-gray-800 md:text-5xl`}
          >
            Interested in our Email service? <br />
            <span className="text-primary">Lets Chat!</span>{" "}
          </h2>
          <p className={`text-pretty text-base text-gray-600`}>
            We look forward to hearing from you! Whether you have a question
            about our Email service, need assistance, or just want to say hello,
            we&apos;re here to help.
          </p>
        </div>

        <div className="flex items-center justify-start gap-x-4">
          <Link href="/contact-us" className={` ${primaryButton} `}>
            Contact us
          </Link>
          <Link href="/contact-us" className={` ${grayButton} `}>
            Pricing
          </Link>
        </div>
      </div>
      <div className="col-span-5 rounded-2xl border border-gray-300 bg-neutral-100 p-6 text-gray-900 shadow-md">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/img/emails/122.jpg"
            alt="email client"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
