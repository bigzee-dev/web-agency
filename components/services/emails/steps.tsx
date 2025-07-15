import StepCard from "./stepcard";
import { montserrat } from "@/app/ui/fonts";

export default function Steps() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 pt-20 md:pb-16">
      <h2
        className={` ${montserrat.className} mb-16 text-center text-3xl font-bold text-gray-800 md:text-4xl`}
      >
        Set Up Your Email Account in a Few Clicks
      </h2>

      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        <StepCard number="01" title="Choose an Email Hosting Plan">
          Running a new business? Go with the{" "}
          <span className="font-semibold">US$ 0.39/mo</span> Business Starter
          plan. If you need more resources, opt for the{" "}
          <span className="font-semibold">US$ 2.99/mo</span> Business Premium
          plan. Note that prices are per mailbox.
        </StepCard>

        <StepCard number="02" title="Proceed to Checkout">
          Select the number of mailboxes and subscription period. Once
          yo&apos;ve completed the payment process, you will be able to access
          your business email address dashboard.
        </StepCard>

        <StepCard number="03" title="Configure your Email Hosting">
          Finally, create a business email account based on your own domain
          name, like youremail@yourdomain.com, set up the DNS settings, and sync
          your email to other devices.
        </StepCard>
      </div>
    </div>
  );
}
