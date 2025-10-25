import Header from "@/components/services/emails/header";
import Steps from "@/components/services/emails/steps";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import NeedMore from "@/components/services/emails/needmore";
import StatsEmail from "@/components/services/emails/stats-email";
import EmailClient from "@/components/services/emails/client";
import WhyUseEmail from "@/components/services/emails/whyuse-email";
import EmailSupport from "@/components/services/emails/support";
import FaqsEmail from "@/components/services/emails/faqs-email";

export default function Page() {
  return (
    <div>
      <Header />
      <Steps />
      <PricingPlans plan="emails" />
      <NeedMore />
      <StatsEmail />
      <WhyUseEmail />
      <EmailClient />
      <EmailSupport />
      <FaqsEmail />
    </div>
  );
}
