import Faqs from "@/components/shared/faqs";
import React from "react";

const faqs = [
  {
    title: "How long does it take to build a website?",
    answer:
      "Typically, a standard website takes 6 to 12 weeks from kickoff to launch. Complex projects like custom e-commerce or extensive integrations may take longer. We provide a detailed timeline during the planning stage.",
  },
  {
    title: "What is your web development process?",
    answer:
      "Our process includes four key phases: Strategy (Discovery & Planning), Design (Wireframing & Prototyping), Development (Coding & Testing), and Launch (Deployment & Training).",
  },
  {
    title: "What is involved in the 'Discovery' phase?",
    answer:
      "Discovery' phase?	We define project goals, target audience, technical requirements, and create a sitemap and feature list. This ensures we start the project with a clear, shared vision",
  },
  {
    title: "Do I need to provide the content (text, images, logos)?",
    answer:
      "Yes, clients are responsible for providing the content that goes into the website. this includes images, logos, other media and information about your business/organisation.",
  },

  {
    title: "How much does a new website cost?",
    answer:
      "We provide custom quotes based on the specific features, complexity, design requirements, and integrations needed. We'll give you a detailed breakdown after our initial discovery call.",
  },
  {
    title: "What is the payment options?",
    answer:
      "One time payment and Subscription-based monthly payment options are available.",
  },
  {
    title: "Are there recurring costs after launch?",
    answer:
      "Yes. Ongoing costs include domain registration, website hosting, and optional fees for our monthly maintenance and support plans.",
  },
  {
    title: "What payment methods are accepted ?",
    answer:
      "We accept PayPal, Bank Transfer / EFT, Orange Money, MyZaka, Smega and soon Credit / Debit Cards",
  },
  {
    title: "Is there any contractual obligation or can I cancel anytime ?",
    answer:
      "By default, our subscription plans are billed monthly. You can also choose to pay every 3, 6, or 12 months. Subscription plans are subject to a minimum commitment period of 12 months. After this period, you can cancel anytime with 30 days notice.",
  },
];

export default function FaqsWebsites() {
  return (
    <>
      <Faqs faqs={faqs} />
    </>
  );
}
