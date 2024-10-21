import ResponsiveNavbar from "@/components/navbar/navbar";
import Showcase from "@/components/home/showcase";
import WhyChooseUs from "@/components/home/whychooseus";
import OurServices from "@/components/home/ourservices";
import DeployFaster from "@/components/home/deployFaster";
import WebsiteText from "@/components/home/websitetext";
import ContactUs from "@/components/home/contactus/contactUs";
import Pricing from "@/components/home/pricing";
import PricingAlt from "@/components/home/pricingAlt";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <ResponsiveNavbar />
      <Showcase />
      <OurServices />
      <DeployFaster />
      <WhyChooseUs />
      <ContactUs />
      <PricingAlt />
      <Footer />
    </>
  );
}
