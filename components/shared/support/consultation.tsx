import Image from "next/image";
import {
  grayButton,
  primaryButton,
  transparentButton,
  whiteButton,
} from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

export default function Consultation({ text }: { text?: string }) {
  return (
    <div className="x-padding w-full py-12">
      <section className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-tr from-primary via-primary to-blue-600 px-16 py-12 shadow-lg">
        <div className="grid w-full grid-cols-12 items-center gap-x-4 rounded-3xl">
          <div className="col-span-7 flex flex-col gap-y-10">
            <div className="space-y-6 pt-0.5 text-start">
              <h2
                className={` ${montserrat.className} text-pretty text-4xl font-bold leading-relaxed text-neutral-200 md:text-4xl`}
              >
                <span>Interested in&nbsp;</span>
                <span>{text}</span>
                <br />
                <span className="text-blue-300">Lets Chat!</span>
              </h2>
              <p className="text-pretty text-base text-neutral-300">
                We look forward to hearing from you! Whether you have a question
                about our service, need assistance, or just want to say hello,
                we&apos;re here to help.
              </p>
            </div>

            <div className="flex items-center gap-x-4">
              <Link
                href="/contact-us"
                className={` ${whiteButton} text-secondary`}
              >
                Contact us
              </Link>
              <Link href="/contact-us" className={` ${transparentButton} `}>
                Pricing
              </Link>
            </div>
          </div>
          <div className="from-neutral-primary/30 relative col-span-5">
            <Image
              src="/img/hosting/support.png"
              alt=""
              width={750}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
