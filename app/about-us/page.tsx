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
    "Meet Deltaworx, a trusted digital infrastructure provider in Botswana. Discover our mission, values, and commitment to delivering reliable cloud computing, web development, and hosting solutions.",
  alternates: {
    canonical: "https://deltaworx.co.bw/about-us",
  },
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
