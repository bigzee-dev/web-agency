import {
  longSectionHeadings,
  sectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import Image from "next/image";

import {
  MdOutlineSecurity,
  MdMemory,
  MdMarkEmailRead,
  MdShop,
} from "react-icons/md";

const features = [
  {
    icon: MdShop,
    title: "Business Suite",
    description:
      "We offer more than standard Webmail. Get integrated email, contacts, calendar, file sharing, online meetings, and more.",
  },
  {
    icon: MdMarkEmailRead,
    title: "Custom Domain Email",
    description:
      "Boost your brand with domain-matching email addresses. Create personalised emails like you@yourdomain.com to build trust.",
  },
  {
    icon: MdMemory,
    title: "SMTP, POP3, IMAP",
    description:
      "Supports all major mail protocols compatible with email apps. Connect via SMTP from your website to send login, signup, and other transactional emails",
  },
  {
    icon: MdOutlineSecurity,
    title: "Premium Spam Filtering",
    description:
      "Keep your inbox safe and clutter-free with our advanced spam filtering. Every plan includes SpamExperts to block spam, viruses, and phishing attempts.",
  },
];

export default function WhyUseEmail() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-12 leading-normal">
      <div className="mb-14">
        <p className="mb-2 font-medium text-blue-600">DeltaMail</p>
        <h2 className={` ${longSectionHeadings} mb-6`}>
          Why Pick Us for Email?
        </h2>
        <p className={` ${sectionSubHeadings} mb-8 max-w-2xl`}>
          From design to launch, we handle it all. Get a modern, mobile-friendly
          website that helps your business attract more customers..
        </p>
      </div>

      <div className="grid gap-x-16 lg:grid-cols-12">
        <div className="relative col-span-4">
          <Image
            src="/img/linux-vps/cloud.jpg"
            alt="linux-vps"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="col-span-8 grid gap-9 md:grid-cols-2">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <IconComponent className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="leading-relaxed text-foreground">
                    <span className="font-semibold">{feature.title}</span>{" "}
                    <span className="font-sans text-md text-gray-600">
                      {feature.description}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
