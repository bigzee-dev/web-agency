import StepCard from "./stepcard";
import { montserrat } from "@/app/ui/fonts";

export default function Steps() {
  return (
    <div className="x-padding mx-auto max-w-7xl py-8 pt-24 md:pb-20">
      <h2
        className={` ${montserrat.className} mb-16 text-center text-3xl font-bold text-gray-800 md:text-4xl`}
      >
        Setup your Email Account in a Few Clicks.
      </h2>

      <div className="grid gap-8 px-4 md:grid-cols-3 md:gap-12">
        <StepCard number="01" title="Choose an Email Hosting Plan">
          Getting started? Go with the{" "}
          <span className="font-semibold">BWP 35/mo</span> Pro Plan. If you need
          more resources, opt for the{" "}
          <span className="font-semibold">BWP 60/mo</span> Business Plan. You
          can always upgrade later.
        </StepCard>

        <StepCard number="02" title="Proceed to Checkout">
          Select the number of mailboxes and subscription period. Once
          you&apos;ve completed the payment process, yor account will be setup
          and you will be able to access admin panel.
        </StepCard>

        <StepCard number="03" title="Configure your Email Hosting">
          Login to the admin panel and create an email account based on your own
          domain name, like admin@yourdomain.com, set up the DNS settings, and
          sync your email to other devices.
        </StepCard>
      </div>
    </div>
  );
}
