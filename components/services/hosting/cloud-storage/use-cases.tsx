import { montserrat } from "@/app/ui/fonts";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import { FaServer, FaCamera, FaCode, FaUsers } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi";
import { MdBackup } from "react-icons/md";

const useCases = [
  {
    icon: <MdBackup className="h-6 w-6" />,
    title: "Automated Backups",
    description:
      "Schedule automated backups from your servers using rsync or rclone. Perfect for database dumps, application backups, and disaster recovery.",
    tags: ["rsync", "cron jobs", "automation"],
  },
  {
    icon: <FaCamera className="h-6 w-6" />,
    title: "Media Storage",
    description:
      "Store photos, videos, and large media files. Share download links with clients or team members without email attachment limits.",
    tags: ["photos", "videos", "sharing"],
  },
  {
    icon: <FaCode className="h-6 w-6" />,
    title: "Local Support",
    description:
      "Get help from our Botswana-based support team who understand your needs. No outsourced call centers.",
    tags: ["CI/CD", "builds", "deployments"],
  },
  {
    icon: <HiDocumentDuplicate className="h-6 w-6" />,
    title: "24/7 Availability",
    description:
      "Your files are always accessible with 99.9% uptime guarantee. Access your data whenever you need it, day or night.",
    tags: ["documents", "compliance", "archive"],
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: "Developer Friendly",
    description:
      "Access your Storage Box via modern protocols in your applications. Setup Cronjobs to regularly run you backups .",
    tags: ["teams", "collaboration", "secure"],
  },
  {
    icon: <FaServer className="h-6 w-6" />,
    title: "Server Offloading",
    description:
      "Offload static files, logs, and archives from your web servers. Keep your production servers lean and performant.",
    tags: ["logs", "static files", "performance"],
  },
];

export default function UseCases() {
  return (
    <div className="relative w-full bg-gray-50 pb-16 pt-12 dark:bg-gray-900">
      <div className="x-padding mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={sectionHeadings}>Perfect for Every Use Case</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From personal backups to enterprise deployments, Storage Box adapts
            to your needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative overflow-hidden rounded-xl p-6 transition-all dark:bg-gray-800"
            >
              {/* Icon background */}
              <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-3 text-white">
                {useCase.icon}
              </div>

              {/* Title */}
              <h3
                className={`${montserrat.className} mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100`}
              >
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {useCase.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
