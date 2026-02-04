import Header from "@/components/services/domains/header";
import Importance from "@/components/services/domains/importance";
import DomainPricingTable from "@/components/services/domains/pricing";
import Tips from "@/components/services/domains/tips";
import MonthSpecials from "@/components/services/domains/monthspecials";
import DigitalRealEstate from "@/components/services/domains/digital-realestate";
import WhyBuy from "@/components/services/domains/whybuy";
import SupportOne from "@/components/shared/support/support-one";
import FaqsDomains from "@/components/services/domains/faqs-domains";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Domain Registration - Find and Register the Right Domain Name | Botswana",
  description:
    "Register your domain name with Deltaworx. Get .com, .bw, .co.bw domains at competitive prices. Fast registration, DNS management, and expert support in Botswana.",
};

export default function Websites() {
  return (
    <div>
      <Header />
      <Importance />
      <DomainPricingTable />
      <Tips />
      <MonthSpecials />
      <DigitalRealEstate />
      <WhyBuy />
      <SupportOne text="a Domain name" pricingLink="#pricing" />
      <FaqsDomains />
    </div>
  );
}
