import Header from "@/components/services/hosting/header";
import SetupAccount from "@/components/services/hosting/setup-account";
import HostingPlans from "@/components/services/hosting/pricing";
import HostingFeatures from "@/components/services/hosting/features";
import LogoPanel from "@/components/services/hosting/logo-panel";
import Consultation from "@/components/services/hosting/consultation";
import FaqsWebsites from "@/components/services/hosting/faqs";
import CTA from "@/components/services/hosting/cta";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      <LogoPanel />
      {/* <PricingWebsites /> */}
      <SetupAccount />
      <HostingPlans />

      <HostingFeatures />

      <Consultation />
      <FaqsWebsites />
    </div>
  );
}
