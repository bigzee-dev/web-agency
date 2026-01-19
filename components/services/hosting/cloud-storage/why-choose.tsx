import { montserrat } from "@/app/ui/fonts";
import { sectionHeadings, sectionSubHeadings } from "@/app/ui/customTailwindClasses";
import {
  FaShieldAlt,
  FaBolt,
  FaInfinity,
  FaUsersCog,
  FaRegClock,
  FaHandshake,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaShieldAlt className="h-10 w-10" />,
    title: "Your Data, Your Control",
    description:
      "Unlike consumer cloud services, we don't scan or analyze your files. Your data is yours alone with full privacy guaranteed.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaBolt className="h-10 w-10" />,
    title: "Lightning Fast Transfers",
    description:
      "High-performance SSD storage and fast network connections ensure rapid uploads and downloads for your files and backups.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <FaInfinity className="h-10 w-10" />,
    title: "No Bandwidth Limits",
    description:
      "Transfer as much as you need without worrying about bandwidth caps or throttling. Upload and download freely.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaUsersCog className="h-10 w-10" />,
    title: "Developer Friendly",
    description:
      "Full SSH access, API endpoints, and support for automation tools. Perfect for CI/CD pipelines and backup scripts.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaRegClock className="h-10 w-10" />,
    title: "24/7 Availability",
    description:
      "Your files are always accessible with 99.9% uptime guarantee. Access your data whenever you need it, day or night.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: <FaHandshake className="h-10 w-10" />,
    title: "Local Support",
    description:
      "Get help from our Botswana-based support team who understand your needs. No outsourced call centers.",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function WhyChoose() {
  return (
    <div className="x-padding relative mx-auto w-full max-w-7xl py-24">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"></div>

      <div className="mx-auto max-w-3xl text-center">
        <h2 className={sectionHeadings}>
          Why Choose Our Storage Box?
        </h2>
        <p className={`${sectionSubHeadings} mx-auto mt-4`}>
          More than just storage. Get the reliability, performance, and control that your data deserves.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}></div>

            {/* Icon with gradient */}
            <div className="relative mb-6">
              <div className={`inline-flex rounded-xl bg-gradient-to-br ${benefit.color} p-4 text-white shadow-lg`}>
                {benefit.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className={`${montserrat.className} relative mb-3 text-xl font-semibold text-gray-800 dark:text-gray-100`}>
              {benefit.title}
            </h3>

            {/* Description */}
            <p className="relative text-gray-600 dark:text-gray-400">
              {benefit.description}
            </p>

            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>

      {/* Bottom callout */}
      <div className="mt-16 text-center">
        <div className="mx-auto inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white shadow-lg">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
          <span className="font-medium">
            Join hundreds of businesses trusting our storage solutions
          </span>
        </div>
      </div>
    </div>
  );
}
