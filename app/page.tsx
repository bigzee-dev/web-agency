import Showcase from "@/components/home/showcase";
import OnlineSuccess from "@/components/home/online-success";
import WhyChooseUs from "@/components/home/whychooseus";
import OnlinePresence from "@/components/home/online-presence";
import Stats from "@/components/home/stats";
import MonthlySpecials from "@/components/home/monthlyspecials";
import ContactUs from "@/components/home/contactus";
// import BlogLinks from "@/components/home/bloglinks";

export default function Home() {
  return (
    <>
      <Showcase />
      <OnlineSuccess />
      <WhyChooseUs />
      <OnlinePresence />
      <Stats />
      <MonthlySpecials />
      {/* <BlogLinks /> */}
      <ContactUs />
    </>
  );
}
