// components
import Header from "@/components/contactus/header";
import EmailAndPhone from "@/components/contactus/email-phone";
import SocialContacts from "@/components/contactus/socialcontacts";
import ContactUsForm from "@/components/contactus/contact-us-form";

export default function ContactUs() {
  return (
    <div className="pb-28">
      <Header />
      <EmailAndPhone />
      <SocialContacts />
      <ContactUsForm />
    </div>
  );
}
