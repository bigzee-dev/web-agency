// // import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";

import { montserrat } from "@/app/ui/fonts";

export default function PlansExplained() {
  return (
    <section className="pb-16 pt-8 md:pb-20 md:pt-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2
            className={` ${montserrat.className} text-4xl font-medium text-gray-800`}
          >
            Whats the difference between the One Time Payment and Monthly
            Subscription plans?
          </h2>
          <div className="space-y-6 font-sans text-gray-700">
            <p>
              <span className="font-bold text-gray-800">
                One Time Payment:{" "}
              </span>
              Perfect for those who prefer a single investment. This plan covers
              the complete development of your website, from design to launch.
              Once launched you own the site outright and can choose to manage
              it independently or with our support services as needed.
            </p>
            <p>
              <span className="font-bold text-gray-800">
                Monthly Subscription:{" "}
              </span>{" "}
              Ideal for businesses seeking ongoing support and updates. This
              plan includes the development of your website along with
              continuous regular maintenance, hosting, and content changes to
              keep your website current and secure. It&apos;s a cost-effective
              way to get started without large upfront costs.
            </p>
            {/* <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="#">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
