import { montserrat } from "@/app/ui/fonts";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Importance() {
  const domainBenefits = [
    {
      title: "First Impressions Matter",
      description:
        "Your domain name is often the first interaction customers have with your brand. A professional, memorable domain instantly communicates credibility and establishes trust before visitors even see your website content.",
    },
    {
      title: "SEO & Discoverability",
      description:
        "Search engines favor domains that match user intent and brand consistency. A well-chosen domain name can significantly boost your search rankings and make it easier for potential customers to find you organically.",
    },
    {
      title: "Brand Protection & Growth",
      description:
        "Securing the right domain protects your brand from competitors and gives you complete control over your online narrative. As your business grows, your domain becomes an increasingly valuable digital asset.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-white py-16 md:py-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 md:px-4">
        <div className="mb-16 text-center">
          {/* <Badge variant="outline" className="mb-4 text-sm font-medium">
            Domain Strategy
          </Badge> */}
          <h2
            className={` ${montserrat.className} mb-4 text-3xl font-bold text-gray-800 md:text-4xl`}
          >
            The importance of a Domain Name
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Your domain name is more than just a web address—it's the foundation
            of your digital identity. In today's competitive landscape, the
            right domain can make the difference between being found or
            forgotten.
          </p>
        </div>

        <div className="mb-16 grid items-center gap-x-20 lg:grid-cols-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gray-800">
              <div className="relative z-10">
                <Image
                  src="/img/domains/domain-design.jpg"
                  alt="img"
                  width={1075}
                  height={716}
                  className="h-44 rounded-l-2xl object-cover"
                />
                <div className="absolute left-0 top-0 z-10 h-44 w-full bg-gray-800/20"></div>
                <div className="space-y-6 p-8 px-16">
                  <div className="flex items-center justify-between border-b border-gray-700 py-3 text-neutral-300/80">
                    <span className="font-medium">Brand Recognition</span>
                    <span className="text-2xl font-bold text-blue-400">
                      +340%
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-700 py-3 text-neutral-300/80">
                    <span className="font-medium">Customer Trust</span>
                    <span className="text-2xl font-bold text-blue-400">
                      +250%
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 text-neutral-300/80">
                    <span className="font-medium">Search Visibility</span>
                    <span className="text-2xl font-bold text-blue-400">
                      +180%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            {domainBenefits.map((benefit, index) => (
              <div key={index} className="space-y-2">
                <h3
                  className={` ${montserrat.className} text-2xl font-bold leading-tight text-primary md:text-2xl`}
                >
                  {benefit.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
