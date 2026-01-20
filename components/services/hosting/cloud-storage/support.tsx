import { transparentButton, whiteButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";

import Link from "next/link";
import Image from "next/image";

export default function CloudStorageSupport() {
  return (
    <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-x-12 gap-y-16 rounded-none bg-gradient-to-tr from-gray-900 via-gray-900 to-primary px-8 py-12 pb-6 pt-12 md:grid-cols-12 md:rounded-3xl md:px-20">
      <div className="col-span-1 flex flex-col items-start gap-y-10 md:col-span-6">
        <div className="space-y-4">
          <h2
            className={` ${montserrat.className} text-pretty text-4xl font-bold leading-[1.1] text-neutral-200 md:text-[2.7rem]`}
          >
            Ready to backup your data? <br />
            <span className="text-neutral-400">
              Let&apos;s get started!
            </span>{" "}
          </h2>
          <p className={`text-pretty text-base text-neutral-300`}>
            Whether you need help choosing the right storage plan, have
            questions about setup, or want to discuss your backup strategy,
            we&apos;re here to help.
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-x-4 md:justify-start">
          <Link
            href="/contact-us"
            className={` ${whiteButton} !w-36 !min-w-36 md:!w-44 md:!min-w-44`}
          >
            Contact us
          </Link>
          <Link
            href="#pricing-plans"
            className={` ${transparentButton} !w-36 !min-w-36 md:!w-44 md:!min-w-44`}
          >
            View Plans
          </Link>
        </div>
      </div>
      <div className="relative col-span-1 h-96 w-full rounded-xl border border-blue-700/40 bg-blue-400/10 md:col-span-6">
        {/* Image */}

        <Image
          src="/img/cloudstorage/123468.jpg"
          alt="secure cloud storage"
          fill
          className="rounded-3xl object-cover shadow-2xl"
        />
      </div>
    </div>
  );
}
