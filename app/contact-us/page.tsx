// components
import Header from "@/components/contactus/header";
import ContactCards from "@/components/contactus/contact-cards";
import ContactPageFormContainer from "@/components/contactus/formcontainer";
import Banner from "@/components/contactus/banner";

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
