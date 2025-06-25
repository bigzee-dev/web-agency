import { montserrat } from "@/app/ui/fonts";
import { Badge } from "@/components/ui/badge";

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
    <section className="w-full py-16 md:py-24 md:pb-12 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-4">
        <div className="text-center mb-16">
          {/* <Badge variant="outline" className="mb-4 text-sm font-medium">
            Domain Strategy
          </Badge> */}
          <h2
            className={` ${montserrat.className} text-3xl md:text-4xl font-bold text-gray-800 mb-4 `}
          >
            The importance of a Domain name
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your domain name is more than just a web address—it's the foundation
            of your digital identity. In today's competitive landscape, the
            right domain can make the difference between being found or
            forgotten.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-20 mb-16 items-center">
          <div className="space-y-8">
            {domainBenefits.map((benefit, index) => (
              <div key={index} className="space-y-2.5">
                <h3
                  className={` ${montserrat.className} text-2xl md:text-2xl font-bold  text-secondary leading-tight`}
                >
                  {benefit.title}
                </h3>
                <p className="font-sans text-base text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-green-500/5 rounded-full"></div>
              <div className="relative z-10">
                <blockquote className="text-neutral-300 text-2xl font-semibold text-neutrak-300 mb-6 leading-relaxed">
                  "A great domain name is like prime real estate—location,
                  location, location matters in the digital world too."
                </blockquote>
                <div className="space-y-6">
                  <div className="text-neutral-400 flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="font-medium">Brand Recognition</span>
                    <span className="text-2xl font-bold text-blue-400">
                      +340%
                    </span>
                  </div>
                  <div className="text-neutral-400 flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="font-medium">Customer Trust</span>
                    <span className="text-2xl font-bold text-blue-400">
                      +250%
                    </span>
                  </div>
                  <div className="text-neutral-400 flex items-center justify-between py-3">
                    <span className="font-medium">Search Visibility</span>
                    <span className="text-2xl font-bold text-blue-400">
                      +180%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
