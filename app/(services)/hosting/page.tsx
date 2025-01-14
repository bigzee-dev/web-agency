import Header from "@/components/services/hosting/header";
import HostingPlans from "@/components/services/hosting/pricing";
import HostingFeatures from "@/components/services/hosting/features";
import Consultation from "@/components/services/hosting/consultation";
import FaqsWebsites from "@/components/services/hosting/faqs";
import CTA from "@/components/services/hosting/cta";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      {/* <PricingWebsites /> */}
      <HostingPlans />
      <HostingFeatures />
      <Consultation />
      <FaqsWebsites />
    </div>
  );
}
