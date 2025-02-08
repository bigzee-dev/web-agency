import Showcase from "@/components/home/showcase";
import OurServicesSml from "@/components/home/ourservices/smallView";
import OurServicesLrg from "@/components/home/ourservices/largeView";

import EverythingYouNeed from "@/components/home/everything-need";
import Benefits from "@/components/home/benefits";
import WhyChooseUs from "@/components/home/whychooseus";
import Testimonials from "@/components/home/testimonials";
import ContactUs from "@/components/home/contactus";

import PricingNew from "@/components/home/pricing-new";

export default function Home() {
  return (
    <>
      <Showcase />
      <OurServicesSml />
      <OurServicesLrg />
      <EverythingYouNeed />
      <Benefits />
      <WhyChooseUs />
      <Testimonials />
      <PricingNew />
      <ContactUs />
    </>
  );
}
