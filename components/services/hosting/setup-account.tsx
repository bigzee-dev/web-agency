import SetupCard from "./setup-card";
import { montserrat } from "@/app/ui/fonts";

export default function SetupAccount() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8  md:pb-16 pt-0">
      <h2
        className={` ${montserrat.className} text-gray-800 text-3xl md:text-4xl font-bold text-center mb-14 `}
      >
        Setup Your Hosting Account in a Few Clicks
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <SetupCard number="01" title="Choose a Hosting Plan">
          Running a new business? Go with the{" "}
          <span className="font-semibold">US$ 0.39/mo</span> Business Starter
          plan. If you need more resources, opt for the{" "}
          <span className="font-semibold">US$ 2.99/mo</span> Business Premium
          plan. Note that prices are per mailbox.
        </SetupCard>

        <SetupCard number="02" title="Proceed to Checkout">
          Select the number of mailboxes and subscription period. Once you've
          completed the payment process, you will be able to access your
          business email address dashboard.
        </SetupCard>

        <SetupCard number="03" title="Configure your plan">
          Finally, create a business email account based on your own domain
          name, like youremail@yourdomain.com, set up the DNS settings, and sync
          your email to other devices.
        </SetupCard>
      </div>
    </div>
  );
}
