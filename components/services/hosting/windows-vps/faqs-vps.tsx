import Faqs from "@/components/shared/faqs";
import React from "react";

const faqs = [
  {
    title: "Is Windows Server licensing included?",
    answer:
      "Yes! All Windows Server licenses are included in your VPS plan at no additional cost. You don't need to worry about purchasing or managing Windows licenses separately.",
  },
  {
    title: "What can I use a Windows VPS for?",
    answer: `

    <ul class="list-disc pl-5 mt-2">
      <li><strong>ASP.NET Applications:</strong> Host .NET Framework and .NET Core applications.</li>
      <li><strong>Microsoft SQL Server:</strong> Run SQL Server databases for your applications.</li>
      <li><strong>Remote Desktop Services:</strong> Provide remote access to Windows applications.</li>
      <li><strong>IIS Web Server:</strong> Host websites and web applications using Internet Information Services.</li>
      <li><strong>Active Directory:</strong> Set up domain controllers for network management.</li>
      <li><strong>Exchange Server:</strong> Run Microsoft Exchange for email services.</li>
      <li><strong>Custom Windows Software:</strong> Run any Windows-specific applications and tools.</li>
    </ul>
  `,
  },
  {
    title: "How do I connect to my Windows VPS?",
    answer:
      "You connect to your Windows VPS using Remote Desktop Protocol (RDP). Simply use the Remote Desktop Connection application on Windows, or download an RDP client for Mac or Linux. You'll receive login credentials after your VPS is provisioned.",
  },
  {
    title: "Can I install custom software on my Windows VPS?",
    answer:
      "Yes! You have full administrator access to your Windows VPS, which means you can install any compatible Windows software, configure services, and customize your server environment as needed.",
  },
  {
    title: "What Windows Server versions are available?",
    answer:
      "We offer Windows Server 2022, 2019, and 2016 in both Standard and Datacenter editions. We recommend Windows Server 2022 for the latest features and security updates.",
  },
  {
    title: "Do you provide backups for Windows VPS?",
    answer:
      "Yes, each Windows VPS includes one free backup slot. You can create daily backups of your server. However, we recommend maintaining your own backup solution for critical data as we cannot guarantee long-term retention.",
  },
  {
    title: "How fast will my Windows VPS be deployed?",
    answer:
      "Windows VPS instances are typically deployed within 15-30 minutes after payment confirmation. You'll receive an email with your login credentials and connection details once your server is ready.",
  },
  {
    title: "Can I upgrade my Windows VPS resources?",
    answer:
      "Yes, you can upgrade your VPS resources including CPU, RAM, and storage at any time. Upgrades can be done through your control panel or by contacting our support team.",
  },
  {
    title: "What support is included with Windows VPS?",
    answer:
      "All Windows VPS plans include 24/7 technical support for hardware, network, and infrastructure issues. We also provide assistance with Windows Server-specific questions. However, custom application support is not included.",
  },
  {
    title: "What payment methods do you accept?",
    answer:
      "We accept PayPal, Bank Transfer / EFT, Orange Money, MyZaka, Smega and soon Credit / Debit Cards for Windows VPS services.",
  },
];

export default function FaqsVps() {
  return (
    <>
      <Faqs faqs={faqs} />
    </>
  );
}
