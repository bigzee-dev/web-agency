// components
import Header from "@/components/contactus/header";
import ContactCards from "@/components/contactus/contact-cards";
import ContactPageFormContainer from "@/components/contactus/formcontainer";
import Banner from "@/components/contactus/banner";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Deltaworx",
  description:
    "Contact Deltaworx for IT solutions in Botswana. Reach out for cloud computing, web development, domain registration, email hosting, and VPS services. We're here to help your business grow.",
  keywords: [
    "contact Deltaworx",
    "IT support Botswana",
    "get quote",
    "business inquiry",
    "customer support",
  ],
};

export default function ContactUs() {
  return (
    <div>
      <Header />
      <ContactCards />
      <ContactPageFormContainer />
      <Banner />
    </div>
  );
}
