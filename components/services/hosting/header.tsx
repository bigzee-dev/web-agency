import { montserrat } from "@/app/ui/fonts";
import { MdOutlineDashboard } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import Image from "next/image";
import { color } from "framer-motion";

const iconProps = {
  size: "1.4em",
};

const offers = [
  {
    icon: <MdOutlineDashboard {...iconProps} />,
    title: "Control Panel",
    description: "Use industry-standard Cpanel.",
    color: "text-rose-400",
  },
  {
    icon: <BsLightningChargeFill {...iconProps} />,
    title: "Powerfull Servers",
    description: "High-performance NVMe servers",
    color: "text-yellow-400",
  },
  {
    icon: <IoShieldCheckmarkSharp {...iconProps} />,
    title: "Guarantee",
    description: "We guarantee 99.9% uptime every month",
    color: "text-thatgreen",
  },
];

export default function Header() {
  return (
    <div className="relative w-full bg-gray-900">
      <div className="relative isolate overflow-hidden inset-0 w-full bg-gradient-to-r from-secondary to-transparent py-14">
        {/* Blur component */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#477cf0] to-[#5b78a8] opacity-20"
          />
        </div>
        <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
          <div className="col-span-6">
            {/* Shared hosting badge */}
            <div className="inline-block bg-neutral-100 px-6 py-2 rounded-md mb-6">
              <span className="font-bold text-primary text-2xl tracking-wide">
                Shared Hosting
              </span>
            </div>
            {/* Main heading */}
            <h1
              className={` ${montserrat.className} max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 leading-tight`}
            >
              Top quality web hosting plans
            </h1>

            <div className="mt-6">
              <p
                className={` ${montserrat.className} text-xl font-bold text-slate-400 tracking-wide`}
              >
                Every hosting plan offers
              </p>
              <div className="grid grid-cols-2 gap-y-5 gap-x-12 mt-2  pt-8 border-t border-gray-500">
                {offers.map((offer) => (
                  <div className="flex flex-col gap-1.5" key={offer.title}>
                    <h6 className="flex items-center gap-2 text-neutral-200/90 tracking-wide font-medium">
                      <div
                        className={` ${offer.color} p-3  bg-white/10 rounded-full`}
                      >
                        {offer.icon}
                      </div>

                      {offer.title}
                    </h6>
                    <p className="font-sans text-sm text-neutral-300/80 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                ))}
                <div className="flex items-center justify-start">
                  <button className="flex justify-center items-center gap-2  bg-neutral-100 py-2 px-3 rounded-lg min-w-52 outline outline-1 outline-offset-1 outline-neutral-300">
                    <span className="font-sans text-secondary font-medium">
                      Compare Plans
                      <span className="ml-2" aria-hidden="true">
                        &rarr;
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              {/* <div>
              <h6>Control Panel</h6>
              <p className="font-sans text-sm">
                Use industry-standard Cpanel to create apps, manage backups, &
                security.
              </p>
            </div>
            <div>
              <h6>Powerfull Servers</h6>
              <p>
                Built on high-performance NVMe servers, our server optimisations
                deliver fast load speeds when traffic is high, low, and anywhere
                in between.
              </p>
            </div>
            <div>
              <h6>Guarantee</h6>
              <p>
                We guarantee at least 99.99% uptime every month, and also a no
                questions asked 30-day money back guarantee if you are unhappy.
              </p>
            </div> */}
            </div>
          </div>

          <div className="col-span-4 col-start-8 flex items-center justify-center">
            {" "}
            <Image
              src="/img/hosting/hosting-hero.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="object-contain border-8 border-slate-400 rounded-tl-3xl rounded-br-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
