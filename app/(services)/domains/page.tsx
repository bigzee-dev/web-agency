import Header from "@/components/services/domains/header";
import WhyBuy from "@/components/services/domains/whybuy";
import TldList from "@/components/services/domains/tldlist";
import Tips from "@/components/services/domains/tips";
import SupportOne from "@/components/support/support-one";
import FaqsDomains from "@/components/services/domains/faqs-domains";
// import Steps from "@/components/services/emails/steps";
// import HostingPlans from "@/components/services/hosting/pricing";
// import NeedMore from "@/components/services/emails/needmore";
// import FaqsWebsites from "@/components/services/emails/faqs";
// import CTA from "@/components/services/emails/cta";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      <WhyBuy />
      <TldList />
      <Tips />
      <SupportOne />
      <FaqsDomains />
      {/* <Steps />
      <HostingPlans />
      <NeedMore />
      <CTA />
      <FaqsWebsites /> */}
    </div>
  );
}
