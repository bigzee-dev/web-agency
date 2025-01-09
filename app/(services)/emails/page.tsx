import Header from "@/components/services/emails/header";
import PricingWebsites from "@/components/services/emails/pricing";
import PlansInfo from "@/components/services/emails/plans-info";
import FaqsWebsites from "@/components/services/emails/faqs";
import CTA from "@/components/services/emails/cta";

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
