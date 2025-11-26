import Header from "@/components/services/domains/header";
import WhyBuy from "@/components/services/domains/whybuy";
import Tips from "@/components/services/domains/tips";
import DomainPricingTable from "@/components/services/domains/pricing";
import MonthSpecials from "@/components/services/domains/monthspecials";
import Importance from "@/components/services/domains/importance";
import SupportOne from "@/components/shared/support/support-one";
import FaqsDomains from "@/components/services/domains/faqs-domains";
import DigitalRealEstate from "@/components/services/domains/digital-realestate";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      <Importance />
      <DomainPricingTable />
      <Tips />
      <MonthSpecials />
      <DigitalRealEstate />
      <WhyBuy />
      <SupportOne />
      <FaqsDomains />
    </div>
  );
}
