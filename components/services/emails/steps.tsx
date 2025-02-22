import StepCard from "./stepcard";
import { montserrat } from "@/app/ui/fonts";

export default function Steps() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <h2
        className={` ${montserrat.className} text-gray-800 text-3xl md:text-4xl font-bold text-center mb-16 `}
      >
        Set Up Your Email Account in a Few Clicks
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <StepCard number="01" title="Choose an Email Hosting Plan">
          Running a new business? Go with the{" "}
          <span className="font-semibold">US$ 0.39/mo</span> Business Starter
          plan. If you need more resources, opt for the{" "}
          <span className="font-semibold">US$ 2.99/mo</span> Business Premium
          plan. Note that prices are per mailbox.
        </StepCard>

        <StepCard number="02" title="Proceed to Checkout">
          Select the number of mailboxes and subscription period. Once you've
          completed the payment process, you will be able to access your
          business email address dashboard.
        </StepCard>

        <StepCard number="03" title="Configure your Email Hosting">
          Finally, create a business email account based on your own domain
          name, like youremail@yourdomain.com, set up the DNS settings, and sync
          your email to other devices. That's it – you can start sending your
          emails.
        </StepCard>
      </div>
    </div>
  );
}
