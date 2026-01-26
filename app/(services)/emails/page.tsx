import Header from "@/components/services/emails/header";
import Steps from "@/components/services/emails/steps";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import NeedMore from "@/components/services/emails/needmore";
import StatsEmail from "@/components/services/emails/stats-email";
import EmailClient from "@/components/services/emails/client";
import WhyUseEmail from "@/components/services/emails/whyuse-email";
import EmailSupport from "@/components/services/emails/support";
import FaqsEmail from "@/components/services/emails/faqs-email";
import type Metadata from "next";

export const metadata: Metadata = {
  title: "Professional Email Hosting - Business Email Solutions | Deltaworx",
  description:
    "Professional email hosting in Botswana. Get custom domain email addresses, spam protection, webmail access, and mobile sync. Secure business email with 99.9% uptime guarantee.",
  keywords: [
    "email hosting Botswana",
    "business email",
    "professional email",
    "custom domain email",
    "webmail",
    "IMAP email",
    "SMTP hosting",
    "secure email",
  ],
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
