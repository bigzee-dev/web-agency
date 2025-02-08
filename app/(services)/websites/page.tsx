import Header from "@/components/services/websites/header";
import PricingWebsites from "@/components/services/websites/pricing";
import PlansInfo from "@/components/services/websites/plans-info";
import FaqsWebsites from "@/components/services/websites/faqs";
import CTA from "@/components/services/websites/cta";
import OurProcess from "@/components/home/ourprocess";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      <OurProcess />
      {/* <PricingWebsites /> */}
      <PlansInfo />
      <CTA />
      <FaqsWebsites />
    </div>
  );
}
