import Faqs from "@/components/shared/faqs";
import React from "react";

const faqs = [
  {
    title: "How fast will my VPS be deployed ?",
    answer:
      "Your VPS will be deployed instantly once your payment is received. You will receive an email with all important information as soon as your server is ready for use.",
  },
  {
    title: "What are the common uses for a Linux VPS ?",
    answer: `
    
    <ul class="list-disc pl-5 mt-2">
      <li><strong>Web Servers:</strong> Deploy your websites and applications.</li>
      <li><strong>Development:</strong> Set up development and testing environments.</li>
      <li><strong>Email Servers:</strong> Manage email services for businesses.</li>
      <li><strong>Databases:</strong> Run databases like MySQL or PostgreSQL.</li>
      <li><strong>VPN:</strong> Create a Virtual Private Network for secure connections.</li>
      <li><strong>Game Servers:</strong> Hosting multiplayer games.</li>
      <li><strong>File Storage:</strong> Securely store and share files.</li>
    </ul>
  `,
  },
  {
    title: "Can I host multiple applications on my VPS ?",
    answer:
      "Yes, with full root access and dedicated resources, you can host multiple websites, applications, or services on your VPS. The number of sites you can host depends on your resource usage and plan specifications.",
  },
  {
    title: "What about backups ?",
    answer:
      "Each VPS includes one free backup slot, allowing you to create one backup per day. While we provide this service, we cannot guarantee long-term data retention. We strongly recommend maintaining your own backup solution to protect critical data.",
  },
  {
    title: "What support do I get with my Linux VPS ?",
    answer:
      "All Linux VPS packages are self-managed, meaning that you will need to manage and maintain the virtual server. We do provide support for any hardware or network issues, as well as any questions you may have about your account.",
  },
  {
    title: "Can I upgrade my VPS ?",
    answer:
      "Yes, your VPS can be both upgraded in individual resources like CPU, RAM or Disk Space, and upgraded to a higher VPS package.",
  },
  {
    title: "Do you offer a money-back guarantee ?",
    answer:
      "Yes, we offer a 3-day money-back guarantee on our VPS plans. If you're not completely satisfied, you can request a full refund within the first 3 days.",
  },
  {
    title: "What payment methods are accepted ?",
    answer:
      "We accept PayPal, Bank Transfer / EFT, Orange Money, MyZaka, Smega and soon Credit / Debit Cards",
  },
  {
    title: "Is there any contractual obligation or can I cancel anytime ?",
    answer:
      "By default, our VPS plans are billed monthly. You can also choose to pay every 3, 6, or 12 months. Plans can be easily modified or canceled anytime through the Client Area.",
  },
  {
    title: "Do you filter any network ports ?",
    answer:
      "Port 25 is blocked by default to prevent spam abuse. If you need it enabled, please contact our support team. Additional account verification may be required.",
  },
];

export default function FaqsVps() {
  return (
    <>
      <Faqs faqs={faqs} />
    </>
  );
}
