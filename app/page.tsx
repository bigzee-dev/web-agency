import Showcase from "@/components/home/showcase";
import OnlineSuccess from "@/components/home/online-success";
import Benefits from "@/components/home/benefits";
import WhyChooseUs from "@/components/home/whychooseus";
import Visibility from "@/components/home/online-presence/visibility";
import Testimonials from "@/components/home/testimonials";
import Personal from "@/components/home/personal";
import ContactUs from "@/components/home/contactus";

export default function Home() {
  return (
    <>
      <Showcase />
      <OnlineSuccess />
      <WhyChooseUs />
      <Benefits />
      <Visibility />
      <Personal />
      <Testimonials />
      <ContactUs />
    </>
  );
}
