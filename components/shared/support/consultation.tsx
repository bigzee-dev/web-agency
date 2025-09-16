import Image from "next/image";
import { btnDimensions, primaryButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

export default function Consultation({ text }: { text?: string }) {
  return (
    <div className="x-padding w-full">
      <section className="mx-auto max-w-5xl py-16">
        <div className="grid w-full grid-cols-12 gap-x-20 rounded-3xl">
          <div className="col-span-7 flex flex-col gap-y-10">
            <div className="space-y-4 pt-0.5 text-center">
              <h2
                className={` ${montserrat.className} text-pretty text-4xl font-bold text-gray-900 md:text-4xl`}
              >
                <span>Interested in&nbsp;</span>
                <span>{text}</span>
                <span className="text-secondary">&nbsp;Lets Chat!</span>
              </h2>
              <p className="text-pretty text-base text-gray-700">
                We look forward to hearing from you! Whether you have a question
                about our Email service, need assistance, or just want to say
                hello, we&apos;re here to help.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Link href="/contact-us" className={` ${primaryButton} `}>
                Contact us&nbsp; <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </div>
          <div className="col-span-5 rounded-2xl bg-gradient-to-r from-neutral-200/30 via-neutral-200/80 to-neutral-200 p-2">
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
