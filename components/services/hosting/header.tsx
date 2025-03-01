import { montserrat } from "@/app/ui/fonts";
import { MdOutlineDashboard } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";

const iconProps = {
  size: "1.3em",
  className: "text-neutral-300",
};

const offers = [
  {
    icon: <MdOutlineDashboard {...iconProps} />,
    title: "Control Panel",
    description:
      "Use industry-standard Cpanel to create apps, manage backups, & security.",
  },
  {
    icon: <BsLightningChargeFill {...iconProps} />,
    title: "Powerfull Servers",
    description:
      "Built on high-performance NVMe servers, our server optimisations deliver fast load speeds when traffic is high, low, and anywhere in between.",
  },
  {
    icon: <IoShieldCheckmarkSharp {...iconProps} />,
    title: "Guarantee",
    description:
      "We guarantee at least 99.99% uptime every month, and also a no questions asked 30-day money back guarantee if you are unhappy.",
  },
];

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-b from-secondary to-primary py-20">
      <div className="grid grid-cols-12 gap-20 max-w-6xl mx-auto">
        <div className="col-span-8">
          <div className="w-full p-4 bg-white/5">
            <h2
              className={` ${montserrat.className} text-5xl font-extrabold text-neutral-300 `}
            >
              Shared Hosting
            </h2>
            <p className="font-sans text-md  text-neutral-300/70 font-medium mt-2">
              Top Quality Web Hosting starting at P30/month.
            </p>
          </div>

          <div className="mt-12">
            <p
              className={` ${montserrat.className} text-xl font-bold text-thatgreen tracking-wide`}
            >
              Every hosting plan offers
            </p>
            <div className="grid grid-cols-2 text-neutral-200 gap-y-8 gap-x-12 mt-3  pt-8 border-t border-gray-500">
              {offers.map((offer) => (
                <div className="flex flex-col gap-2" key={offer.title}>
                  <h6 className="flex items-center gap-2 tracking-wide font-medium">
                    {offer.icon}
                    {offer.title}
                  </h6>
                  <p className="font-sans text-sm text-neutral-300/80 leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              ))}
              <div className="flex items-center justify-center">
                <button className="flex justify-center items-center gap-2  bg-gray-800/15 py-2 px-3  border  border-thatgreen rounded-lg min-w-52">
                  <span className=" text-thatgreen font-medium">
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

        <div className="col-span-4">
          {" "}
          <img src="/svg/server-status.svg" alt="Logo" className="" />
        </div>
      </div>
    </div>
  );
}
