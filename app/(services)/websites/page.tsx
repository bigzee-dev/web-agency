import Header from "@/components/services/websites/header";
import OurProcess from "@/components/services/websites/ourprocess";
import Stats from "@/components/services/websites/stats";
import PricingWebsites from "@/components/services/websites/pricing";
import PlansExplained from "@/components/services/websites/plans-explained";
import ContentSection from "@/components/services/websites/content";
import FaqsWebsites from "@/components/services/websites/faqs-websites";
import SupportOne from "@/components/shared/support/support-one";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development - Professional Web Design | Deltaworx",
  description:
    "Professional website development services in Botswana. Custom websites, responsive design, SEO optimization, and ongoing support. Transform your online presence with Deltaworx.",
  keywords: [
    "website development Botswana",
    "web design",
    "custom website",
    "responsive design",
    "SEO optimization",
    "business website",
    "web development services",
  ],
};

export default function Websites() {
  return (
    <div>
      <Header />
      <OurProcess />
      <Stats />
      <ContentSection />
      <PricingWebsites />
      <PlansExplained />
      <SupportOne text="a Website" pricingLink="#pricing" />
      <FaqsWebsites />
    </div>
  );
}
