import {
  longSectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";

import {
  Shield,
  Headphones,
  CreditCard,
  Zap,
  CheckCircle2,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Windows App Support",
    description:
      "Run essential Windows-based applications like .NET and ASP.NET and Microsoft SQL Server.",
    highlight: "Save P500+ per month on licensing",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    icon: Zap,
    title: "Enterprise Performance",
    description:
      "Built on enterprise-grade hardware with NVMe storage and dedicated resources for demanding Windows applications.",
    highlight: "Up to 10x faster than HDD storage",
    gradient: "from-blue-500 to-cyan-600from-teal-500 to-teal-600",
  },
  {
    icon: Headphones,
    title: "Expert Windows Support",
    description:
      "Our team has extensive Windows Server experience and is available 24/7 to assist with any issues.",
    highlight: "Average response time: <5 minutes",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: CreditCard,
    title: "Local Payment Methods",
    description:
      "Pay conveniently using Botswana payment methods including Credit/Debit cards, Mobile money, and Bank transfers.",
    highlight: "No international transaction fees",
    gradient: "from-emerald-500 to-emerald-600",
  },
];

// const stats = [
//   { label: "Uptime", value: "99.9%" },
//   { label: "Deploy Time", value: "<1min" },
//   { label: "Support", value: "24/7" },
// ];

export default function WhyBuyVps() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white pb-16 pt-6">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className={` ${longSectionHeadings} mb-4`}>
            Why Choose Our Windows VPS
          </h2>
          <p
            className={` ${sectionSubHeadings} mx-auto max-w-2xl text-gray-600`}
          >
            Reliable Windows hosting with licensing included, expert support,
            and infrastructure built for business.
          </p>

          {/* Stats Bar */}
          {/* <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={` ${montserrat.className} text-5xl font-bold text-gray-800`}
                >
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white px-7 py-6 transition-all"
              >
                {/* Gradient overlay */}
                {/* <div
                  className={`absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br ${benefit.gradient} opacity-5 transition-all group-hover:scale-150 group-hover:opacity-10`}
                /> */}

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3
                    className={` ${montserrat.className} mb-3 text-xl font-bold text-gray-800`}
                  >
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-md leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>

                  {/* Highlight Badge */}
                  <div className="flex items-center gap-2 rounded-lg bg-gray-50 pt-2 font-sans text-sm">
                    <CheckCircle2 className="h-4 w-4 text-gray-700" />
                    <span className="font-medium text-gray-700">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-yellow-500/80 bg-yellow-600/10 p-8 text-center md:flex-row">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-700/40 bg-gray-800 shadow-lg">
            <Award className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p
              className={` ${montserrat.className} mb-1 text-lg font-bold text-gray-800`}
            >
              Trusted by Botswana Businesses and Developers
            </p>
            <p className="font-sans text-sm text-gray-700">
              Run your Windows infrastructure on a Deltaworx Virtual Machine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
