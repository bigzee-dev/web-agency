import Header from "@/components/services/hosting/header";
import PricingWebsites from "@/components/services/hosting/pricing";
import PlansInfo from "@/components/services/hosting/plans-info";
import FaqsWebsites from "@/components/services/hosting/faqs";
import CTA from "@/components/services/hosting/cta";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      {/* <PricingWebsites /> */}
      <PlansInfo />
      <CTA />
      <FaqsWebsites />
    </div>
  );
}
