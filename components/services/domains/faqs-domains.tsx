import Faqs from "@/components/shared/faqs";
import React from "react";

const faqs = [
  {
    title: "What is a domain name?",
    answer:
      "A domain name is your website address. Anybody can type it in the browser URL bar to visit your site. Our domain name is deltaworx.co.bw. if you are interested in getting a domain name for your website, you can search for available names and register them through our domain registration service.",
  },
  {
    title: "Why do I need a domain name?",
    answer:
      "Registering a domain name for your personal brand or business is a good idea. It gives your website a professional look, makes it easier for people to find you online, and helps build your brand. A custom domain name also allows you to create personalised email addresses (e.g sales@mybusiness.com or enquiries@mybusiness.com)",
  },
  {
    title: "What are domain extensions?",
    answer:
      "Domain extensions, also known as top-level domains (TLDs), are the suffixes at the end of domain names, such as .com, .net, .org, .bw, and many others. They indicate the type or purpose of a website. For example, .com is commonly used for commercial websites, while .org is often used for non-profit organizations. There are also country-specific extensions like co.bw for Botswana.",
  },
  {
    title: "How do I find a domain name and check its availability status?",
    answer:
      "It’s easy! Just go to our Register Domain page to search for your domain name. Type your chosen domain and see if it is available. If someone has taken it, it will say ‘unavailable,’ you should try again. If it is available, you’re free to register it.",
  },
  {
    title: "How long can I register a domain name for ?",
    answer:
      "Domain names can typically be registered for a period ranging from one year to up to ten years. The minimum registration period is usually one year, while the maximum can vary depending on the domain registrar and the specific top-level domain (TLD) you choose. When registering a domain, you can select the desired duration based on your needs and preferences. ",
  },
  {
    title: "I already own a domain, can I transfer it to Deltaworx ?",
    answer:
      "Yes, you can transfer your domain from another registrar to Hostraha. You'll need to unlock your domain at your current registrar, obtain an authorization code, and initiate the transfer through our domain transfer service. Our support team can assist with the process if needed.",
  },
  {
    title: "What happens if my domain expires ?",
    answer:
      "If your domain expires, it enters a grace period (typically 30 days) where you can renew it at the standard rate. After this period, there's usually a redemption period with higher renewal fees. Eventually, the domain becomes available for anyone to register. We recommend enabling auto-renewal to prevent accidental expiration.",
  },

  {
    title: "How do I renew my Domain Name ?",
    answer:
      "Login to your deltaworx.co.za account, select the domain for renewal, and complete the process before it expires. You can also set your domain to auto-renew.",
  },
  {
    title: "How do I point my domain to my website's nameservers ?",
    answer:
      "If your domain is registered with us then login to our dashboard, navigate to the Domains section and select the Nameserver settings and replace the existing nameservers with the ones provided by your web hosting provider. Save the changes, and it may take up to 6 hours for the changes to propagate globally.",
  },
  {
    title: "What payment methods are accepted ?",
    answer:
      "We accept PayPal, Bank Transfer / EFT, Orange Money, MyZaka, Smega and soon Credit / Debit Cards",
  },
];

export default function FaqsDomains() {
  return (
    <>
      <Faqs faqs={faqs} />
    </>
  );
}
