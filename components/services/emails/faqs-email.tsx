import Faqs from "@/components/shared/faqs";
import React from "react";

const faqs = [
  {
    title: "What is Business Email ?",
    answer:
      "Professional email, business email, or custom email is an email account that uses your domain name or the domain for your business, rather than a generic domain like gmail.com. As opposed to free email solutions, you can give your business a more professional image with Business Email. You can have as many email accounts as you need with Deltaworx. Every employee, department, and service that’s a part of your business can have their own respective email accounts e.g sales@mybusiness.com or support@mybusiness.com",
  },
  {
    title: "What do I need to setup an Email account ?",
    answer:
      "The only thing you need to setup an email account is a domain name. You can either use your existing domain or register a new one through our domain registration service.",
  },
  {
    title: "How do I configure my email account once its been activated?",
    answer:
      "You will have to login to the Admin Panel provided to you in the welcome email. In the Admin Panel you will be provided with DNS records (incl SPF, DKIM and DMARC records) to connect your domain to your email account. From there, you can access the Email Accounts section to create and manage your email addresses. Detailed setup instructions for various email clients will also be available in the Panel.",
  },
  {
    title: "What options do I have to access my emails?",
    answer: `You can access your emails using:
      <ul class="list-disc pl-5 mt-2 mb-2">
        <li><strong>Webmail:</strong> Access your emails through any web browser using our webmail interface. Works perfectly on mobile phones as well.</li>
        <li><strong>Email Clients:</strong> Configure popular email clients like Microsoft Outlook, Mozilla Thunderbird, Apple Mail, etc. using IMAP/POP3 settings provided in the Admin Panel.</li>
        <li><strong>Android and IOS Apps:</strong> Download the Titan Mail App from the Play Store or App Store and enjoy a great experience on your mobile device,</li>`,
  },
  {
    title: "Which Email protocols are supported ?",
    answer:
      "POP3/IMAP/SMTP are fully supported. This enables you to connect using any standard email client and to send transactional emails from your websites or applications.",
  },
  {
    title: "How many emails am I allowed to send per hour/day? ?",
    answer: `This depends on the plan you choose. 
      <ul class="list-disc pl-5 mt-2 mb-2">
        <li><strong>Pro Plan:</strong> 200 emails/hour, 500 emails/day.</li>
        <li><strong>Business Plan:</strong> 300 emails/hour, 1000 emails/day.</li>
        <li><strong>Enterprise Plan:</strong> 500 emails/hour, 2000 emails/day.</li>
      </ul>
      These limits are in place to prevent abuse and ensure fair usage for all customers. If you require higher sending limits, please contact our support team to discuss custom solutions.
    `,
  },
  {
    title: "Can i create aliases and forwarders ?",
    answer:
      "Yes, you can create email aliases and forwarders to redirect emails from one address to another within your domain. You can create additional addresses such as support@mycompany.com and enquiries@mycompany.com that all forward to your main email address.",
  },
  {
    title: "What is your spam policy ?",
    answer:
      "We take a zero tolerance stance against sending of unsolicited email, bulk emailing, and spam. Any user who sends out spam will have their account terminated with or without notice",
  },
  {
    title: "Do you offer a money-back guarantee ?",
    answer:
      "Yes, we offer a 3-day money-back guarantee on our Email plans. If you're not completely satisfied, you can request a full refund within the first 3 days.",
  },
  {
    title: "What payment methods are accepted ?",
    answer:
      "We accept PayPal, Bank Transfer / EFT, Orange Money, MyZaka, Smega and soon Credit / Debit Cards",
  },
  {
    title: "Is there any contractual obligation or can I cancel anytime ?",
    answer:
      "By default, our Email plans are billed monthly. You can also choose to pay every 3, 6, or 12 months. Plans can be easily modified or canceled anytime through the Client Area.",
  },
];

export default function FaqsEmail() {
  return (
    <>
      <Faqs faqs={faqs} />
    </>
  );
}
