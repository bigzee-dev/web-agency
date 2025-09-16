import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";

interface LinuxDistribution {
  id: string;
  name: string;
  logo: string;
  versions: string[];
}

const distributions: LinuxDistribution[] = [
  {
    id: "ubuntu",
    name: "UBUNTU",
    logo: "/img/linux-vps/ubuntu.png",
    versions: ["20.04", "22.04", "24.04"],
  },
  {
    id: "debian",
    name: "DEBIAN",
    logo: "/img/linux-vps/debian.png",
    versions: ["11", "12"],
  },
  {
    id: "centos",
    name: "CENTOS",
    logo: "/img/linux-vps/centos.png",
    versions: ["Stream 7", "Stream 9"],
  },
  {
    id: "fedora",
    name: "FEDORA",
    logo: "/img/linux-vps/fedora.png",
    versions: ["41", "42"],
  },
  {
    id: "almalinux",
    name: "ALMALINUX",
    logo: "/img/linux-vps/almalinux.png",
    versions: ["8", "9"],
  },
  {
    id: "rocky",
    name: "ROCKY LINUX",
    logo: "/img/linux-vps/rocky-linux.png",
    versions: ["8", "9"],
  },
  {
    id: "oracle",
    name: "ORACLE LINUX",
    logo: "/img/linux-vps/oracle.png",
    versions: ["9"],
  },
  {
    id: "opensuse",
    name: "OPENSUSE",
    logo: "/img/linux-vps/opensuse.png",
    versions: ["15"],
  },
];

export default function LinuxDistributions() {
  return (
    <div className="w-full bg-gray-800">
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mb-16 text-center">
          {/* <p className="mb-3 font-sans text-md font-medium text-neutral-300">
            1-Click Install
          </p> */}
          <h2 className={` ${sectionHeadings} text-neutral-300`}>
            LINUX DISTRIBUTIONS
          </h2>
          <h4
            className={` ${montserrat.className} mt-2.5 text-2xl font-thin text-neutral-400`}
          >
            Available
          </h4>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 justify-center gap-2 md:grid-cols-2 lg:grid-cols-3">
          {distributions.map((distro) => (
            <div
              key={distro.id}
              className="flex flex-col space-y-4 rounded-lg border border-gray-600 bg-gray-700/50 p-6 text-center"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={distro.logo || "/placeholder.svg"}
                  alt={`${distro.name} logo`}
                  className="h-12 w-12"
                />
                <div>
                  {" "}
                  <h3 className="text-left text-lg font-semibold tracking-wide text-neutral-300">
                    {distro.name}
                  </h3>
                  <div className="flex gap-x-1 font-sans text-[0.84rem] font-medium text-neutral-400">
                    {distro.versions.map((version) => (
                      <div key={version}>{version}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
