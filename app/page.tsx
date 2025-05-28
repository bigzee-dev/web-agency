import Showcase from "@/components/home/showcase";
import OnlineSuccess from "@/components/home/online-success";
import WhyChooseUs from "@/components/home/whychooseus";
import Visibility from "@/components/home/online-presence/visibility";
import Testimonials from "@/components/home/testimonials";
import Personal from "@/components/home/personal";
import ContactUs from "@/components/home/contactus";
import BlogLinks from "@/components/home/bloglinks";

export default function Home() {
  return (
    <>
      <Showcase />
      <OnlineSuccess />
      <WhyChooseUs />
      <Visibility />
      <Personal />
      <Testimonials />
      <ContactUs />
      <BlogLinks />
    </>
  );
}
