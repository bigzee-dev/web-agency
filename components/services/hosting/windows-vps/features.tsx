import { montserrat } from "@/app/ui/fonts";

import { MonitorDot, Cpu, HardDrive, Network, Lock, Gauge } from "lucide-react";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";

const features = [
  // {
  //   icon: Shield,
  //   title: "Windows Licensing",
  //   description:
  //     "All Windows Server licenses included. No additional costs or compliance worries.",
  //   color: "from-blue-500 to-blue-600",
  // },
  {
    icon: MonitorDot,
    title: "Full RDP Access",
    description:
      "Complete remote desktop access with administrator privileges for total control.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Cpu,
    title: "Intel Xeon CPUs",
    description:
      "Enterprise-grade processors delivering consistent, reliable performance.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description:
      "Lightning-fast NVMe drives for superior I/O performance and data access.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Network,
    title: "1 Gbps Network",
    description:
      "High-speed connectivity with dedicated bandwidth for your applications.",
    color: "from-blue-500 to-cyan-600",
  },
  // {
  //   icon: Cloud,
  //   title: "Auto Updates",
  //   description:
  //     "Automatic Windows updates keep your server secure without manual intervention.",
  //   color: "from-sky-500 to-sky-600",
  // },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Built-in Windows Defender and firewall protection for your infrastructure.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Gauge,
    title: "Scalable Resources",
    description:
      "Easily upgrade CPU, RAM, and storage as your business requirements grow.",
    color: "from-emerald-500 to-emerald-600",
  },
];

const VpsFeatures = () => {
  return (
    <div className="w-full">
      <section className="px-6 pb-20 pt-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className={` ${sectionHeadings} mb-4`}>
              Enterprise Windows VPS Features
            </h1>
            <p className="mx-auto max-w-3xl font-sans text-lg text-gray-600">
              Powerful Windows Server hosting with dedicated resources, full
              administrative control, and Microsoft-certified infrastructure for
              your business applications.
            </p>
            {/* <div className="mt-8">
              <Link
                href="#pricing-vps"
                className={` ${primaryButton} inline-flex items-center justify-center gap-x-2`}
              >
                <Server className="h-4 w-4" />
                View Pricing
              </Link>
            </div> */}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-xl"
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity group-hover:opacity-5`}
                  />

                  {/* Content */}
                  <div className="relative">
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 shadow-lg`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <h3
                      className={` ${montserrat.className} mb-2 text-lg font-bold text-gray-800`}
                    >
                      {feature.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VpsFeatures;
