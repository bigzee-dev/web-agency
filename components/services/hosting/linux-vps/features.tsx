import { BsDot } from "react-icons/bs";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

// const features = [
//   {
//     label: (
//       <>
//         Virtualisation:<span className="font-medium">KVM</span>
//       </>
//     ),
//   },
//   { label: "1 IPv4 & 1 IPv6" },
//   { label: "1 Free Backup Slot" },
//   {
//     label: (
//       <>
//         Port:<span className="font-medium">1 GBit/s</span>
//       </>
//     ),
//   },
//   { label: "NVME SSD" },
//   { label: "SSH & Root Access" },
//   { label: "Modern Control Panel" },
//   { label: "Instantly Deployed" },
//   { label: "24/7 Support" },
//   { label: "Scalable Resources" },
// ];

import {
  Zap,
  ChevronRight,
  Clock,
  Copy,
  Globe,
  Cpu,
  HardDrive,
  Network,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryButton, sectionHeadings } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

const specs = [
  { icon: Cpu, label: "CPU", value: "Intel Xeon" },
  { icon: HardDrive, label: "STORAGE", value: "Pure NVMe" },
  { icon: Network, label: "NETWORK", value: "1 Gbps" },
  { icon: Server, label: "IPS", value: "1 IPv4 + /56 IPv6" },
];

const features = [
  { icon: Clock, text: "99.9% Uptime" },
  { icon: Copy, text: "Free Backups" },
  { icon: Globe, text: "SSH & Root Access" },
];

const VpsFeatures = () => {
  return (
    <div className="x-padding w-full">
      <section className="bg-background px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <h1 className={` ${sectionHeadings} `}>VPS Features</h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                High-performance compute on Intel + NVMe, with premium
                networking and dependable uptime.
              </p>

              {/* Buttons */}
              <div className="mb-10 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className={` ${primaryButton} inline-flex items-center justify-center gap-x-2 text-md`}
                >
                  <Zap className="h-4 w-4" />
                  Get One Now
                </Link>
                <Button variant="outline" size="lg">
                  Our Network
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 font-sans text-gray-600"
                  >
                    <feature.icon className="h-4 w-4" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Specs Card */}
            <div className="w-full rounded-2xl border border-gray-600 bg-yellow-600/5 p-6 shadow-lg lg:flex-1">
              <div className="grid gap-4 md:grid-cols-2">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="min-w-[160px] rounded-2xl border border-gray-600 bg-neutral-100 p-5 shadow-lg"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <spec.icon className="h-4 w-4 text-gray-600" />
                      <span className="text-xs uppercase tracking-wide text-gray-600">
                        {spec.label}
                      </span>
                    </div>
                    <p
                      className={` ${montserrat.className} text-lg font-semibold text-gray-800`}
                    >
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Manage your instance with our modern control panel and scale as
                you grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VpsFeatures;
