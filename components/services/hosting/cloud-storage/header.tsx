import { montserrat } from "@/app/ui/fonts";
import { HiCloud } from "react-icons/hi2";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Image from "next/image";
import { greenButton } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

const iconProps = {
  size: "1.2em",
};

const features = [
  {
    icon: <HiCloud {...iconProps} />,
    title: "Cloud Storage",
    description: "Up to 1TB capacity",
    color: "text-blue-300",
  },
  {
    icon: <MdDevices {...iconProps} />,
    title: "Multi-Device",
    description: "Phone, Tablet, Laptop",
    color: "text-purple-400",
  },
  {
    icon: <IoShieldCheckmarkSharp {...iconProps} />,
    title: "Secure",
    description: "Encrypted transfers",
    color: "text-green-400",
  },
  {
    icon: <FaLock {...iconProps} />,
    title: "Private",
    description: "Your data, your control",
    color: "text-orange-400",
  },
];

export default function Header() {
  return (
    <div className="relative min-h-[34rem] w-full overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-800 to-primary">
      <div className="x-padding w-full">
        <div className="relative mx-auto grid w-full max-w-7xl gap-x-12 gap-y-12 pb-12 pt-16 md:grid-cols-12 md:py-16">
          <div className="col-span-1 md:col-span-6">
            {/* Cloud storage badge */}
            <div className="inline-block">
              <span className="font-semibold uppercase tracking-widest text-neutral-300">
                Cloud Storage
              </span>
            </div>
            {/* Main heading */}
            <h1
              className={` ${montserrat.className} mt-3 max-w-4xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
            >
              No1 Rule: Always Backup Your Data
            </h1>

            <div className="mt-9 max-w-xl">
              <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-6">
                {features.map((feature) => (
                  <div
                    className="flex flex-col gap-2 gap-y-2.5"
                    key={feature.title}
                  >
                    <h6 className="flex items-center gap-2 font-medium tracking-wide text-blue-300">
                      <div
                        className={`mr-0.5 rounded-lg bg-white/10 p-2 text-blue-300 outline outline-1 outline-gray-500/50`}
                      >
                        {feature.icon}
                      </div>

                      <span className="text-neutral-200">{feature.title}</span>
                    </h6>
                    <p className="ml-0.5 font-sans text-sm leading-relaxed text-neutral-300/80">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex items-end gap-x-5 md:gap-x-12">
              <Link href="#pricing-plans" className={` ${greenButton} `}>
                Compare Plans
              </Link>
              <div className="flex flex-col items-start">
                <span className="mb-0.5 text-xs text-neutral-400">
                  Starting from
                </span>
                <span className="text-4xl font-semibold text-neutral-300">
                  P60
                  <span className="text-lg font-medium text-neutral-400">
                    /month
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="col-span-1 flex items-center justify-center md:col-span-6">
            <div className="relative h-96 w-full md:h-[28rem]">
              <Image
                src="/img/cloudstorage/150857.jpg"
                alt="Cloud Storage"
                fill
                className="object-cover md:rounded-3xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 right-8 rounded-xl bg-gradient-to-br from-yellow-500 to-sky-700 px-6 py-4 shadow-xl md:-right-8">
                <div className="text-sm text-neutral-200">Up to</div>
                <div className="text-3xl font-bold text-white">1TB</div>
                <div className="text-sm text-neutral-200">Storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
