import AboutUsHero from "@/components/aboutus/header";
import Inspire from "@/components/aboutus/inspire";
import ServicesWeOffer from "@/components/aboutus/servicesweoffer";
import Benefits from "@/components/aboutus/benefits";
import WorkWithUs from "@/components/aboutus/workwithus";
import OurValues from "@/components/aboutus/ourvalues";
import Personal from "@/components/aboutus/personal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us - Your Digital Infrastructure Partner in Botswana | Deltaworx",
  description:
    "Meet Deltaworx, Botswana's trusted IT solutions provider. Learn about our mission, values, and commitment to delivering exceptional cloud computing, web development, and hosting services.",
  keywords: [
    "about Deltaworx",
    "IT company Botswana",
    "technology partner",
    "cloud provider Botswana",
    "web development company",
  ],
};

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
