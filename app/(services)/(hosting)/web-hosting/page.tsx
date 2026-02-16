import Header from "@/components/services/hosting/web-hosting/header";
import SetupAccount from "@/components/services/hosting/web-hosting/setup-account";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import HostingFeatures from "@/components/services/hosting/web-hosting/features";
import LogoPanel from "@/components/services/hosting/web-hosting/logo-panel";
import WhyChooseHosting from "@/components/services/hosting/web-hosting/whychoose";
import SupportOne from "@/components/shared/support/support-one";
import FaqsHosting from "@/components/services/hosting/web-hosting/faqs-hosting";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Hosting - Fast & Reliable Hosting | Botswana",
  description:
    "Premium web hosting for developers and businesses in Botswana, designed to keep your website fast, secure, and always online.",
  alternates: {
    canonical: "https://deltaworx.co.bw/web-hosting",
  },
};

export default function Page() {
  return (
    <div>
      <Header />
      <SetupAccount />
      <PricingPlans
        plan="hosting"
        display="lg:max-w-5xl lg:grid-cols-3 lg:gap-x-10"
      />
      <HostingFeatures />
      <LogoPanel />
      <WhyChooseHosting />
      <SupportOne text="Web hosting" pricingLink="#pricing-plans" />
      <FaqsHosting />
    </div>
  );
}
