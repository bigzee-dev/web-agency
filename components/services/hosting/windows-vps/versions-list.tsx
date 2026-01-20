import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { FaWindows } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

interface WindowsVersion {
  id: string;
  name: string;
  version: string;
  features: string[];
  recommended?: boolean;
}

const versions: WindowsVersion[] = [
  {
    id: "2019",
    name: "Windows Server 2019",
    version: "Standard & Datacenter",
    features: ["Legacy Support", "Reliable Performance", "Mature Platform"],
  },
  {
    id: "2022",
    name: "Windows Server 2022",
    version: "Standard & Datacenter",
    features: [
      "Latest Security",
      "Enhanced Performance",
      "Hybrid Capabilities",
    ],
    recommended: true,
  },

  {
    id: "2015",
    name: "Windows Server 2025",
    version: "Standard & Datacenter",
    features: ["Long-term Support", "Proven Stability", "Wide Compatibility"],
  },
];

export default function WindowsVersions() {
  return (
    <div className="w-full bg-gradient-to-tr from-gray-900 via-gray-900 to-primary">
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-20">
        <div className="mb-12 text-center">
          <h2 className={` ${sectionHeadings} text-neutral-300`}>
            WINDOWS SERVER EDITIONS
          </h2>
          <h4
            className={` ${montserrat.className} mt-2.5 text-xl font-thin text-neutral-400`}
          >
            Choose Your Version
          </h4>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 justify-center gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {versions.map((version) => (
            <div
              key={version.id}
              className={`relative mx-auto flex w-[90%] flex-col space-y-4 rounded-xl border border-blue-700/40 bg-blue-400/10 p-6 shadow-lg transition-all hover:shadow-xl md:w-full ${
                version.recommended ? "ring-2 ring-blue-500/50" : ""
              }`}
            >
              {version.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  Recommended
                </div>
              )}

              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-blue-500/20 p-2">
                  <FaWindows className="h-8 w-8 text-blue-300" />
                </div>
                <div className="flex-1">
                  <h3
                    className={` ${montserrat.className} text-lg font-bold text-neutral-100`}
                  >
                    {version.name}
                  </h3>
                  <p className="font-sans text-sm font-medium text-neutral-300">
                    {version.version}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                {version.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-300" />
                    <span className="font-sans text-sm text-neutral-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-sans text-sm text-neutral-400">
            All editions include full Remote Desktop access and Windows
            licensing
          </p>
        </div>
      </section>
    </div>
  );
}
