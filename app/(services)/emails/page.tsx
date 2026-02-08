import Header from "@/components/services/emails/header";
import Steps from "@/components/services/emails/steps";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import NeedMore from "@/components/services/emails/needmore";
import StatsEmail from "@/components/services/emails/stats-email";
import EmailClient from "@/components/services/emails/client";
import WhyUseEmail from "@/components/services/emails/whyuse-email";
import EmailSupport from "@/components/services/emails/support";
import FaqsEmail from "@/components/services/emails/faqs-email";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable Business Email Solutions in Botswana",
  description:
    "Professional email hosting that keeps your team connected. Communicate clearly and focus on growing your business with our dependable email service.",
};

export default function Page() {
  return (
    <div>
      <Header />
      <Steps />
      <PricingPlans
        plan="emails"
        display="lg:max-w-5xl lg:grid-cols-3 lg:gap-x-8"
      />
      <NeedMore />
      <StatsEmail />
      <WhyUseEmail />
      <EmailClient />
      <EmailSupport />
      <FaqsEmail />
    </div>
  );
}
