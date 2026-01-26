import Header from "@/components/services/hosting/web-hosting/header";
import SetupAccount from "@/components/services/hosting/web-hosting/setup-account";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import HostingFeatures from "@/components/services/hosting/web-hosting/features";
import LogoPanel from "@/components/services/hosting/web-hosting/logo-panel";
import WhyChooseHosting from "@/components/services/hosting/web-hosting/whychoose";
import SupportOne from "@/components/shared/support/support-one";
import FaqsHosting from "@/components/services/hosting/web-hosting/faqs-hosting";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Web Hosting - Fast & Reliable Hosting | Deltaworx",
  description:
    "Premium web hosting in Botswana. Fast SSD storage, cPanel control panel, free SSL certificates, daily backups, and 99.9% uptime. Affordable shared hosting plans for businesses.",
  keywords: [
    "web hosting Botswana",
    "shared hosting",
    "cPanel hosting",
    "SSD hosting",
    "SSL certificate",
    "website hosting",
    "affordable hosting",
  ],
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
