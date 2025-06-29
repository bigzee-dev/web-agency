import Header from "@/components/services/domains/header";
import WhyBuy from "@/components/services/domains/whybuy";
import TldList from "@/components/services/domains/tldlist";
import Tips from "@/components/services/domains/tips";
import DomainPricingTable from "@/components/services/domains/pricing";
import Importance from "@/components/services/domains/importance";
import SupportOne from "@/components/shared/support/support-one";
import FaqsDomains from "@/components/services/domains/faqs-domains";
import DigitalRealEstate from "@/components/services/domains/digital-realestate";
// import Steps from "@/components/services/emails/steps";
// import HostingPlans from "@/components/services/hosting/pricing";
// import NeedMore from "@/components/services/emails/needmore";
// import FaqsWebsites from "@/components/services/emails/faqs";
// import CTA from "@/components/services/emails/cta";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      <Importance />

      <DomainPricingTable />
      <DigitalRealEstate />
      <Tips />

      <WhyBuy />
      <SupportOne />
      <FaqsDomains />
    </div>
  );
}
