import AboutUsHero from "@/components/aboutus/header";
import Inspire from "@/components/aboutus/inspire";
import ServicesWeOffer from "@/components/aboutus/servicesweoffer";
import Benefits from "@/components/aboutus/benefits";
import WorkWithUs from "@/components/aboutus/workwithus";
import OurValues from "@/components/aboutus/ourvalues";
import Personal from "@/components/aboutus/personal";

export default function AboutUs() {
  return (
    <>
      <AboutUsHero />
      <Inspire />
      <ServicesWeOffer />
      <Benefits />
      <OurValues />
      <WorkWithUs />
      <Personal />
    </>
  );
}
