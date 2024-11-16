import ResponsiveNavbar from "@/components/navbar/navbar";
import Showcase from "@/components/home/showcase";
import WhyChooseUs from "@/components/home/whychooseus";
import OurServices from "@/components/home/ourservices";
import DeployFaster from "@/components/home/deployFaster";
import Testimonial from "@/components/home/testimonial";
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
      <DeployFaster />
      <WhyChooseUs />
      <Testimonial />
      <OurProcess />
      <Pricing />
      <ContactUs />
      <Footer />
    </>
  );
}
