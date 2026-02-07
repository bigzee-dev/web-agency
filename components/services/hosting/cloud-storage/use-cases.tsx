import { montserrat } from "@/app/ui/fonts";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import { Server, Camera, Code, Users, FileText, HardDrive } from "lucide-react";

const useCases = [
  {
    icon: <HardDrive className="h-6 w-6" />,
    title: "Automated Backups",
    description:
      "Schedule automated backups from your servers using rsync or rclone. Perfect for database dumps, application backups, and disaster recovery.",
    tags: ["rsync", "cron jobs", "automation"],
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Network Drive",
    description:
      "Mount your Storage Box as a network drive on Windows, Mac, or Linux. Access files just like a local hard drive.",
    tags: ["photos", "videos", "sharing"],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "SSH/SFTP Access",
    description:
      "Secure shell access with SFTP, SCP, and FTPS protocols for encrypted file transfers. Perfect for automation and scripting.",
    tags: ["logs", "static files", "performance"],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer Friendly",
    description:
      "Access your Storage Box via modern protocols in your applications. Setup Cronjobs to regularly run you backups. Offload static files, logs, and archives from your web servers.",
    tags: ["teams", "collaboration", "secure"],
  },

  {
    icon: <FileText className="h-6 w-6" />,
    title: "24/7 Availability",
    description:
      "Your files are always accessible with 99.9% uptime guarantee. Access your data whenever you need it, day or night.",
    tags: ["documents", "compliance", "archive"],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Local Support",
    description:
      "Get help from our Botswana-based support team who understand your needs. No outsourced call centers.",
    tags: ["CI/CD", "builds", "deployments"],
  },
];

const spanProps = {
  className: "rounded-lg border border-neutral-300/50 bg-blue-400/10 px-4 py-2",
};

export default function UseCases() {
  return (
    <div className="relative w-full bg-gray-50 pb-16 pt-16 dark:bg-gray-900">
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
              <div className="hite mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 bg-gradient-to-br from-gray-800 to-gray-700 text-white shadow-lg">
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
                    className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-gray-600"
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
    </div>
  );
}
