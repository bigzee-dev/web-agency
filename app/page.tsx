import Showcase from "@/components/home/showcase";
import OurServices from "@/components/home/ourservices";
import EverythingYouNeed from "@/components/home/everything-need";
import Benefits from "@/components/home/benefits";
import WhyChooseUs from "@/components/home/whychooseus";
import OurProcess from "@/components/home/ourprocess";
import Pricing from "@/components/home/pricing";
import ContactUs from "@/components/home/contactus";

import PricingNew from "@/components/home/pricing-new";
import Navnew from "@/navnew";

export default function Home() {
  return (
    <>
      <Showcase />
      {/* <Navnew /> */}
      <OurServices />
      <EverythingYouNeed />
      <Benefits />
      <WhyChooseUs />

      <OurProcess />
      <PricingNew />
      <ContactUs />
    </>
  );
}
