import { Button } from "@/components/ui/button";
import { btnDimensions, primaryButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";
export default function NeedMore() {
  return (
    <section className="mx-auto max-w-3xl space-y-10 px-4 pb-12 pt-16 text-center">
      <div className="space-y-4">
        <h2
          className={` ${montserrat.className} text-balance text-center text-4xl font-medium text-gray-800 md:text-4xl`}
        >
          Need More? Get a Custom Plan.
        </h2>
        <p className="text-gray-600">
          If you need more than 50 email accounts or want Private Email for more
          than 20 domains, reach out, and one of our team will create a custom
          plan for your business.
        </p>
      </div>

      <Link
        href="/contact-us"
        className={` ${primaryButton} inline-flex items-center justify-center`}
      >
        Contact us &nbsp;<span aria-hidden="true"> →</span>
      </Link>
    </section>
  );
}
