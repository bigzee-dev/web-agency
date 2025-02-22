import Header from "@/components/services/emails/header";
import Steps from "@/components/services/emails/steps";
import HostingPlans from "@/components/services/hosting/pricing";
import NeedMore from "@/components/services/emails/needmore";
import FaqsWebsites from "@/components/services/emails/faqs";
import CTA from "@/components/services/emails/cta";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      <Steps />
      <HostingPlans />
      <NeedMore />
      <CTA />
      <FaqsWebsites />
    </div>
  );
}
