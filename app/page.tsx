import Specials from "@/components/home/specials";
import Showcase from "@/components/home/showcase";
// import OurServicesSml from "@/components/home/ourservices/smallView";
// import OurServicesLrg from "@/components/home/ourservices/largeView";
import OnlineSuccess from "@/components/home/online-success";
// import EverythingYouNeed from "@/components/home/everything-need";
import Benefits from "@/components/home/benefits";
import WhyChooseUs from "@/components/home/whychooseus";
import Visibility from "@/components/home/visibility";
import Testimonials from "@/components/home/testimonials";
import Personal from "@/components/home/personal";
import ContactUs from "@/components/home/contactus";

// import PricingNew from "@/components/home/pricing-new";

export default function Home() {
  return (
    <>
      {/* <Specials /> */}
      <Showcase />
      {/* <OurServicesSml />
      <OurServicesLrg /> */}
      <OnlineSuccess />

      {/* <EverythingYouNeed /> */}
      <WhyChooseUs />
      <Benefits />
      <Visibility />

      <Personal />
      <Testimonials />
      {/* <PricingNew /> */}
      <ContactUs />
    </>
  );
}
