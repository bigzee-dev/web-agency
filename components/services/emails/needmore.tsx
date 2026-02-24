import { primaryButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";
export default function NeedMore() {
  return (
    <section className="mx-auto max-w-3xl space-y-10 px-4 pb-8 pt-12 text-center md:pb-12 md:pt-16">
      <div className="space-y-5">
        <h2
          className={` ${montserrat.className} flex flex-col items-center justify-center gap-y-6 text-balance text-center text-3xl font-semibold text-gray-800 md:flex-row md:gap-x-4 md:text-3xl`}
        >
          <span className="flex items-center justify-center">
            <img src="/svg/emails/send.svg" className="size-20" alt="send" />
          </span>
          Need More? Get a Custom Plan.
        </h2>
        <p className="text-gray-600">
          If you require more storage, additional mailboxes, or higher sending
          limits than our standard plans offer, we can tailor a solution to
          match your exact needs. Contact our team and we&apos;ll design a
          custom email hosting package that fits your business perfectly.
        </p>
      </div>

      <Link
        href="/contact-us"
        className={` ${primaryButton} inline-flex items-center justify-center`}
      >
        Contact us
      </Link>
    </section>
  );
}
