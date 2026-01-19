import Testimonial from "@/components/ourprocess/testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process - How We Work | Deltaworx",
  description:
    "Learn about Deltaworx's proven development process. We deliver reliable IT solutions through careful planning, expert execution, and dedicated support for businesses in Botswana.",
  keywords: [
    "development process",
    "project workflow",
    "IT methodology",
    "agile development Botswana",
    "software development process",
  ],
};

export default function Home() {
  return (
    <>
      <Testimonial />
    </>
  );
}
