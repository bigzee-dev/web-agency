import Image from "next/image";
import { transparentButton, whiteButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

export default function Consultation({ text }: { text?: string }) {
  return (
    <div className="x-padding w-full pb-4 pt-2 md:py-12">
      <section className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-tr from-primary via-primary to-gray-800 py-8 pl-8 pr-8 shadow-lg md:pl-20">
        <div className="grid w-full grid-cols-1 items-center gap-x-4 gap-y-6 rounded-3xl md:grid-cols-12">
          <div className="order-2 col-span-1 flex flex-col gap-y-8 md:order-1 md:col-span-7 md:gap-y-10">
            <div className="space-y-6 pt-0.5 text-start">
              <h2
                className={` ${montserrat.className} text-4xl font-bold leading-[1.15] text-neutral-200 md:text-[2.8rem]`}
              >
                Interested in&nbsp;{text}
                <br />
                <span className="text-blue-300">Lets Chat!</span>
              </h2>
              <p className="text-pretty text-base text-neutral-300">
                We look forward to hearing from you! Whether you have a question
                about our service, need assistance, or just want to say hello,
                we&apos;re here to help.
              </p>
            </div>

            <div className="flex items-center gap-x-2 md:gap-x-4">
              <Link
                href="/contact-us"
                className={` ${whiteButton} min-w-36 text-secondary md:min-w-44`}
              >
                Contact us
              </Link>
              <Link
                href="/contact-us"
                className={` ${transparentButton} min-w-36 md:min-w-44`}
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="from-neutral-primary/30 relative order-1 col-span-1 md:order-2 md:col-span-5">
            <Image
              src="/img/hosting/support247.png"
              alt=""
              width={750}
              height={600}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
