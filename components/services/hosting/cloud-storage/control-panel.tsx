import { montserrat } from "@/app/ui/fonts";
import {
  sectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import Image from "next/image";
import { FaChartLine, FaUserShield } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const panelFeatures = [
  {
    icon: <MdOutlineFileUpload className="h-5 w-5" />,
    title: "Bulk Upload",
    description: "Upload multiple files and compressed folders",
  },

  {
    icon: <FaChartLine className="h-5 w-5" />,
    title: "Storage Analytics",
    description: "Monitor your storage usage and file statistics",
  },
  {
    icon: <FaUserShield className="h-5 w-5" />,
    title: "Access Control",
    description: "Manage permissions and user access rights",
  },
  {
    icon: <IoMdSettings className="h-5 w-5" />,
    title: "Configuration",
    description: "Easily configure FTP, SSH, and sync settings",
  },
];

export default function ControlPanel() {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="x-padding mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={sectionHeadings}>Modern Web Interface</h2>
          <p
            className={` ${sectionSubHeadings} mt-4 text-lg text-gray-600 dark:text-gray-400`}
          >
            Manage your files effortlessly with our intuitive web-based control
            panel. No technical knowledge required.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Image/Demo section */}
          <div className="col-span-1 lg:col-span-8">
            <Image
              src="/img/cloudstorage/directadmin2.png"
              alt="Control Panel"
              width={1916}
              height={866}
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* Features list */}
          <div className="col-span-1 lg:col-span-4">
            <div className="space-y-6">
              {panelFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 rounded-lg bg-blue-500/10 p-3 text-primary dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className={`${montserrat.className} mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-8 rounded-xl border border-gray-400/70 bg-gradient-to-br from-blue-50 to-purple-50 p-6 dark:from-blue-900/30 dark:to-purple-900/30">
          <h4
            className={`${montserrat.className} mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100`}
          >
            Access Anywhere
          </h4>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Use the web interface from any device with a browser. No
            installation required.
          </p>
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="rounded-full border border-gray-400/70 bg-white px-3 py-1 shadow-sm dark:bg-gray-800">
              Desktop
            </span>
            <span className="rounded-full border border-gray-400/70 bg-white px-3 py-1 shadow-sm dark:bg-gray-800">
              Mobile
            </span>
            <span className="rounded-full border border-gray-400/70 bg-white px-3 py-1 shadow-sm dark:bg-gray-800">
              Tablet
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
