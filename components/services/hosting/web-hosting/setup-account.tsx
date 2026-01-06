import SetupCard from "./setup-card";
import { montserrat } from "@/app/ui/fonts";

export default function SetupAccount() {
  return (
    <div className="x-padding mx-auto max-w-7xl pt-20 md:pb-14">
      <h2
        className={` ${montserrat.className} mb-14 text-center text-3xl font-bold text-gray-900 md:text-4xl`}
      >
        Setup Your Hosting Account in a Few Clicks
      </h2>

      <div className="grid gap-8 px-4 md:grid-cols-3 md:gap-12 md:px-0">
        <SetupCard number="01" title="Choose a Hosting Plan">
          Getting Started? Go with the{" "}
          <span className="font-semibold">BWP 60/mo</span> Startup plan. If you
          need more resources, opt for the{" "}
          <span className="font-semibold">BWP 110/mo</span> Standard plan. Note
          that you can always upgrade later.
        </SetupCard>

        <SetupCard number="02" title="Proceed to Checkout">
          After selecting your desired Hosting Plan proceed to checkout. Once
          you&apos;ve completed the payment process, your service will be
          activated and you can access the control panel.
        </SetupCard>

        <SetupCard number="03" title="Manage Your Account">
          Finally, log in to your hosting control panel to deploy your website,
          set up email accounts, configure DNS and other hosting features.
        </SetupCard>
      </div>
    </div>
  );
}
