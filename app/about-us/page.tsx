import AboutUsHero from "@/components/aboutus/header";
import Inspire from "@/components/aboutus/inspire";
import Benefits from "@/components/aboutus/benefits";
import WorkWithUs from "@/components/aboutus/workwithus";
import OurValues from "@/components/aboutus/ourvalues";
import { ClientTestimonialCarousel } from "@/components/aboutus/client-testimonial";

export default function AboutUs() {
  return (
    <>
      <AboutUsHero />
      <Inspire />
      <Benefits />
      <OurValues />
      <WorkWithUs />
      <ClientTestimonialCarousel />
    </>
  );
}
