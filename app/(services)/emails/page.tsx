import Header from "@/components/services/emails/header";
import Steps from "@/components/services/emails/steps";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import NeedMore from "@/components/services/emails/needmore";
import StatsEmail from "@/components/services/emails/stats-email";
import WhyUseEmail from "@/components/services/emails/whyuse-email";
import EmailSupport from "@/components/services/emails/support";
import FaqsWebsites from "@/components/services/emails/faqs";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      <Steps />
      <PricingPlans plan="emails" />
      <NeedMore />
      <StatsEmail />
      <WhyUseEmail />
      <EmailSupport />
      <FaqsWebsites />
    </div>
  );
}
