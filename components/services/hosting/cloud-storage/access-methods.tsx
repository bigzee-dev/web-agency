import { montserrat } from "@/app/ui/fonts";
import {
  sectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import { FaTerminal, FaNetworkWired, FaSync } from "react-icons/fa";
import { MonitorDot, Cpu, HardDrive, Network, Lock, Gauge } from "lucide-react";
import { BiTransfer } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { HiServer } from "react-icons/hi";

const iconProps = { className: "h-6 w-6 text-neutral-50" };

const spanProps = {
  className: "rounded-lg border border-neutral-300/50 bg-blue-400/10 px-4 py-2",
};

const accessMethods = [
  {
    icon: <FaTerminal {...iconProps} />,
    title: "SSH/SFTP Access",
    description:
      "Secure shell access with SFTP, SCP, and FTPS protocols for encrypted file transfers. Perfect for automation and scripting.",

    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Gauge {...iconProps} />,
    title: "Rsync & Rclone",
    description:
      "Industry-standard sync tools for efficient incremental backups and bi-directional file synchronization with compression support.",

    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: <Network {...iconProps} />,
    title: "Network Drive",
    description:
      "Mount your Storage Box as a network drive on Windows, Mac, or Linux. Access files just like a local hard drive with drag-and-drop simplicity.",

    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
];

export default function AccessMethods() {
  return (
    <div className="x-padding relative mx-auto w-full max-w-7xl py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className={sectionHeadings}>FLEXIBLE ACCESS</h2>
        <p className={`${sectionSubHeadings} mx-auto mt-4`}>
          Connect to your Storage Box with industry standard protocols and
          tools.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {accessMethods.map((method, index) => (
          <div
            key={method.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-white px-6 pb-4 pt-5 shadow-sm transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
          >
            {/* Background gradient on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 transition-opacity group-hover:opacity-5`}
            ></div>

            {/* Icon */}
            <div
              className={`relative mb-4 inline-flex rounded-xl bg-gradient-to-br from-gray-800 to-purple-500 p-2 text-gray-700 transition-transform group-hover:scale-110 dark:text-gray-300`}
            >
              {method.icon}
            </div>

            {/* Title */}
            <h3
              className={`${montserrat.className} relative mb-2 text-lg font-bold text-gray-800 dark:text-gray-100`}
            >
              {method.title}
            </h3>

            {/* Description */}
            <p className="relative text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {method.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative isolate mt-16 overflow-hidden rounded-2xl bg-gradient-to-tr from-gray-800 to-secondary p-8 text-center shadow-xl">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#73304c] to-[#776fff] opacity-70"
          />
        </div>
        <h3
          className={`${montserrat.className} mb-3 text-2xl font-bold text-white md:text-3xl`}
        >
          Works with your favorite tools
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-md text-neutral-100">
          FileZilla, WinSCP, Cyberduck, Transmit, rclone, rsync, and more. Use
          the tools you already know and love.
        </p>
        <div className="flex flex-wrap justify-center gap-4 font-sans text-sm text-neutral-200">
          <span {...spanProps}>Windows</span>
          <span {...spanProps}>macOS</span>
          <span {...spanProps}>Linux</span>
          <span {...spanProps}>Android</span>
          <span {...spanProps}>iOS</span>
        </div>
      </div>
    </div>
  );
}
