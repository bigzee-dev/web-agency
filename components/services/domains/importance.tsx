import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import { sectionSubHeadings } from "@/app/ui/customTailwindClasses";
import { FaCheck } from "react-icons/fa6";

export default function Importance() {
  const domainBenefits = [
    {
      title: "First Impressions Matter",
      description:
        "Your domain is the first thing people see. A clean, memorable name builds trust instantly—before they even visit your site.",
    },
    {
      title: "SEO & Discoverability",
      description:
        "Search engines prefer relevant domains. The right name boosts your visibility and helps customers find you faster.",
    },
    {
      title: "Brand Protection & Growth",
      description:
        "Securing the ideal domain name is a crucial first step in establishing your online presence.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-white py-16 md:py-24 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-4">
        <div className="mb-8 text-center">
          {/* <Badge variant="outline" className="mb-4 text-sm font-medium">
            Domain Strategy
          </Badge> */}
          <h2
            className={` ${montserrat.className} mb-4 text-3xl font-bold text-gray-800 md:text-4xl`}
          >
            The importance of a Domain Name
          </h2>
          <p className={` ${sectionSubHeadings} mx-auto max-w-3xl`}>
            Your domain name is more than just a web address—it&apos;s the
            foundation of your digital identity. In today&apos;s competitive
            landscape, the right domain can make the difference between being
            found or forgotten.
          </p>
        </div>

        <div className="mb-8 grid gap-x-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-center">
                <Image
                  src="/img/domains/nice-design.png"
                  alt="img"
                  width={614}
                  height={409}
                  className="h-[21rem] w-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            {domainBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-x-4">
                <FaCheck
                  aria-hidden="true"
                  className="mt-[0.45rem] h-auto w-3.5 flex-none text-slate-600"
                />
                <div className="space-y-1.5">
                  <h3
                    className={`${montserrat.className} flex items-center text-xl font-bold text-primary md:text-xl`}
                  >
                    {benefit.title}
                  </h3>
                  <p className="w-full font-sans text-md leading-relaxed text-gray-700 lg:w-[85%]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex w-full items-center justify-between gap-x-6 bg-gray-800 px-6 py-4">
          {domainStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 items-center justify-between rounded-md bg-white/10 px-6 py-2"
            >
              <span className="font-medium text-neutral-300">{stat.label}</span>
              <span className="text-2xl font-bold text-blue-400">
                {stat.value}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
