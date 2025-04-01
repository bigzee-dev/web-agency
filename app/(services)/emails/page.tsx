import Header from "@/components/services/emails/header";
import Steps from "@/components/services/emails/steps";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import NeedMore from "@/components/services/emails/needmore";
import FaqsWebsites from "@/components/services/emails/faqs";
import CTA from "@/components/services/emails/cta";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      <Steps />
      <PricingPlans />
      <NeedMore />
      <CTA />
      <FaqsWebsites />
    </div>
  );
}
