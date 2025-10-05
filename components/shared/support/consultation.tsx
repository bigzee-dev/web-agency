import Image from "next/image";
import { grayButton, primaryButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

export default function Consultation({ text }: { text?: string }) {
  return (
    <div className="x-padding w-full border-b border-t border-primary/5 py-12">
      <section className="mx-auto max-w-6xl rounded-3xl bg-blue-400/75 px-16 py-12">
        <div className="grid w-full grid-cols-12 items-center gap-x-4 rounded-3xl">
          <div className="col-span-7 flex flex-col gap-y-10">
            <div className="space-y-6 pt-0.5 text-start">
              <h2
                className={` ${montserrat.className} text-pretty text-4xl font-bold text-gray-900 md:text-5xl`}
              >
                <span>Interested in&nbsp;</span>
                <span>{text}</span>
                <br />
                <span className="text-secondary">Lets Chat!</span>
              </h2>
              <p className="text-pretty text-base text-gray-800">
                We look forward to hearing from you! Whether you have a question
                about our service, need assistance, or just want to say hello,
                we&apos;re here to help.
              </p>
            </div>

            <div className="flex items-center gap-x-4">
              <Link href="/contact-us" className={` ${primaryButton} `}>
                Contact us
              </Link>
              <Link href="/contact-us" className={` ${grayButton} `}>
                Pricing
              </Link>
            </div>
          </div>
          <div className="from-neutral-primary/30 relative col-span-5 bg-gradient-to-r via-blue-600/80 to-indigo-200">
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
