import ResponsiveNavbar from "@/components/navbar/navbar";
import Showcase from "@/components/home/showcase";
import OurServices from "@/components/home/ourservices";
import EverythingYouNeed from "@/components/home/everything-need";
import Benefits from "@/components/home/benefits";
import WhyChooseUs from "@/components/home/whychooseus";
import OurProcess from "@/components/home/ourprocess";
import Pricing from "@/components/home/pricing";
import ContactUs from "@/components/home/contactus";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <ResponsiveNavbar />
      <Showcase />
      <OurServices />
      <EverythingYouNeed />
      <Benefits />
      <WhyChooseUs />
      <OurProcess />
      <Pricing />
      <ContactUs />
      <Footer />
    </>
  );
}
