import Header from "@/components/services/websites/header";
import OurProcess from "@/components/services/websites/ourprocess";
import CTA from "@/components/services/websites/cta";
import PricingWebsites from "@/components/services/websites/pricing";
import ContentSection from "@/components/services/websites/content";
import FaqsWebsites from "@/components/services/websites/faqs";

import SupportOne from "@/components/shared/support/support-one";

export default function Websites() {
  return (
    <div className="pb-20">
      <Header />
      <OurProcess />
      <CTA />
      <ContentSection />
      <PricingWebsites />
      <SupportOne />
      <FaqsWebsites />
    </div>
  );
}
