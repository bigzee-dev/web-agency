import Header from "@/components/websites/header";
import PricingWebsites from "@/components/websites/pricing";
import PlansInfo from "@/components/websites/plans-info";
import FaqsWebsites from "@/components/websites/faqs";
import CTA from "@/components/websites/cta";

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
