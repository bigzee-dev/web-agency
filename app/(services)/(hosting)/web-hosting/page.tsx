import Header from "@/components/services/hosting/web-hosting/header";
import SetupAccount from "@/components/services/hosting/web-hosting/setup-account";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import HostingFeatures from "@/components/services/hosting/web-hosting/features";
import LogoPanel from "@/components/services/hosting/web-hosting/logo-panel";
import WhyChooseHosting from "@/components/services/hosting/web-hosting/whychoose";
import SupportOne from "@/components/shared/support/support-one";
import FaqsHosting from "@/components/services/hosting/web-hosting/faqs-hosting";

export default function Page() {
  return (
    <div>
      <Header />
      <SetupAccount />
      <PricingPlans plan="hosting" />
      <HostingFeatures />
      <LogoPanel />
      <WhyChooseHosting />
      <SupportOne text="Web hosting" />
      <FaqsHosting />
    </div>
  );
}
