import Showcase from "@/components/home/showcase";
import OnlineSuccess from "@/components/home/online-success";
import WhyChooseUs from "@/components/home/whychooseus";
import Visibility from "@/components/home/online-presence/visibility";
import Stats from "@/components/home/stats";
import { ClientTestimonialCarousel } from "@/components/aboutus/client-testimonial";
import ContactUs from "@/components/home/contactus";
import BlogLinks from "@/components/home/bloglinks";

export default function Home() {
  return (
    <>
      <Showcase />
      <OnlineSuccess />
      <WhyChooseUs />
      <Visibility />
      <Stats />
      <ClientTestimonialCarousel />
      <BlogLinks />
      <ContactUs />
    </>
  );
}
