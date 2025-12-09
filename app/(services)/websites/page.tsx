import Header from "@/components/services/websites/header";
import OurProcess from "@/components/services/websites/ourprocess";
import Stats from "@/components/services/websites/stats";
import PricingWebsites from "@/components/services/websites/pricing";
import PlansExplained from "@/components/services/websites/plans-explained";
import ContentSection from "@/components/services/websites/content";
import FaqsWebsites from "@/components/services/websites/faqs-websites";
import SupportOne from "@/components/shared/support/support-one";

export default function Websites() {
  return (
    <div>
      <Header />
      <OurProcess />
      <Stats />
      <ContentSection />
      <PricingWebsites />
      <PlansExplained />
      <SupportOne text="a Website" />
      <FaqsWebsites />
    </div>
  );
}
