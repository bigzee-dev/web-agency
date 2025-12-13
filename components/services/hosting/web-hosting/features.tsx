import React from "react";
import { montserrat } from "@/app/ui/fonts";
import { BsDot } from "react-icons/bs";

const features = [
  {
    label: "99.9% uptime",
  },
  { label: "LiteSpeed Web Server" },
  { label: "1 Free Backup Slot" },
  {
    label: "Ryzen CPUs",
  },
  { label: "NVME SSD" },
  { label: "SSH Access" },
  { label: "NVME SSDs & DDR5 RAM" },
  { label: "Mysql Databases" },
  { label: "24/7 Support" },
  { label: "JetBackup" },
];

export default function HostingFeatures() {
  return (
    <>
      <div className="x-padding relative isolate mx-auto max-w-7xl overflow-hidden py-12 md:py-20">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:space-x-16">
          <div className="col-span-1 md:col-span-6">
            <div className="hosting-feature-image">
              <div className="flex gap-x-2 md:gap-x-8">
                <div className="">
                  <img
                    src="/img/hosting/vps-feature-small.png"
                    height={400}
                    alt=""
                    className="rounded-2xl"
                  />
                </div>
                <div className="img-two">
                  <img
                    src="/img/hosting/vps-feature-big.png"
                    height={400}
                    alt=""
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-6">
            <div className="hosting-feature">
              <h3
                className={` ${montserrat.className} mb-6 text-3xl font-semibold text-gray-800`}
              >
                Shared Hosting Features
              </h3>
              <p className="mb-6 font-sans text-gray-700">
                We’ll move your first website to Cloud ways from any web host
                for without breaking your live site hosted on the old host.
              </p>
              <div className="">
                <ul className="mx-auto grid h-48 w-[94%] list-inside grid-cols-2 gap-x-1 gap-y-1 self-center font-sans text-md text-gray-600 md:w-[90%] md:gap-x-0">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span>
                        <BsDot className="h-auto w-3.5 text-gray-600" />
                      </span>
                      {feature.label}
                    </li>
                  ))}
                </ul>

                {/* <ul className="grid list-inside list-disc grid-cols-2 gap-6 font-sans text-md text-gray-600">
                  <li className="">99.9% uptime guaranteed</li>

                  <li className="">Powered by LiteSpeed Web Server</li>
                  <li className="">1-click install your favourite apps</li>
                  <li className="">High Performance Ryzen CPUs</li>
                  <li className="">Secure Shell (SSH)</li>
                  <li className=""> DDR5 Memory, Enterprise NVMe SSDs</li>
                  <li className="">Mysql Databases</li>
                  <li className="">Jetbackup available for your use</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
