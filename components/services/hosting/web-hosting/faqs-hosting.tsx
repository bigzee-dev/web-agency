import Faqs from "@/components/shared/faqs";
import React from "react";

const faqs = [
  {
    title: "What is Web Hosting ?",
    answer:
      "Web Hosting is a service that lets you run your website, emails, or web applications on secure servers, making them accessible online. When you build a website, you need a place to store its files, these are safely kept on our hosting servers under your personal hosting account.",
  },
  {
    title: "Why do I need a domain name ?",
    answer:
      "A domain (e.g www.yourwebsite.com) gives your website a unique name and identity online. When you buy a hosting plan, you’ll need a domain so visitors can find and access your site easily. We are an official domain registrar accredited by BOCRA, Botswana's authoritative organisation that manages the countries Domain Name System (DNS), and we can help you register your desired domain name.",
  },
  {
    title: "What is included with my Web Hosting plan ?",
    answer:
      "Our Web Hosting plans give you everything you need for your website—fast NVMe storage, generous traffic, email accounts, and free SSL certificates. Each plan includes the award-winning cPanel, making it easy to manage emails, databases, files, backups, and site statistics.",
  },
  {
    title: "Can I install Wordpress or other CMS? ?",
    answer:
      "Yes! cPanel includes Softaculous, a one-click installer that allows you to install WordPress and many other applications instantly. The process is automated and takes just a few minutes to complete.",
  },
  {
    title: "What backup options are allowed in Cpanel ?",
    answer:
      "cPanel provides various backup options including full account backups, partial backups of specific files or databases, and automated backup scheduling. You can easily download backups to your local computer or restore them when needed.",
  },
  {
    title: "What kind of support can I expect from your team ?",
    answer: `Our team is here to help you with any web hosting problems, ensuring a smooth and stress-free experience. We offer multiple support options:    
    <ul class="list-disc pl-5 mt-2">
      <li><strong>Live Chat:</strong> Chat with us on Whatsapp or SMS.</li>
      <li><strong>Support Ticket:</strong> Submit detailed inquiries, and our knowledgeable staff will address your concerns thoroughly.</li>
      <li><strong>Email:</strong> Send us an email at support@deltaworx.co.bw</li>
      
    </ul>
  `,
  },
  {
    title: "Can I upgrade my hosting plan as my website grows ?",
    answer:
      "Yes, you can easily upgrade your hosting plan as your website grows and your needs change. Our services are designed to grow with you, making scaling up smooth and hassle-free. Upgrading your plan for more storage, resources, or extra features will not interrupt your service, allowing you to keep up with your website's increasing audience and demands.",
  },
  {
    title: "Do you offer a money-back guarantee ?",
    answer:
      "Yes, we offer a 3-day money-back guarantee on our Web Hosting plans. If you're not completely satisfied, you can request a full refund within the first 3 days.",
  },
  {
    title: "What payment methods are accepted ?",
    answer:
      "We accept PayPal, Bank Transfer / EFT, Orange Money, MyZaka, Smega and soon Credit / Debit Cards",
  },
  {
    title: "Is there any contractual obligation or can I cancel anytime ?",
    answer:
      "By default, our Web Hosting plans are billed monthly. You can also choose to pay every 3, 6, or 12 months. Plans can be easily modified or canceled anytime through the Client Area.",
  },
];

export default function FaqsHosting() {
  return (
    <>
      <Faqs faqs={faqs} />
    </>
  );
}
