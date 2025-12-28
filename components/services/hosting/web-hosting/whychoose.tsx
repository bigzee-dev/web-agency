import {
  longSectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import { IoRocketSharp } from "react-icons/io5";
import { PiCursorClickFill } from "react-icons/pi";
import { FaBolt } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";
import { MdSupportAgent, MdOutlinePayment } from "react-icons/md";

const features = [
  {
    icon: IoRocketSharp,
    title: "Instant Activation",
    text: "Your hosting plan will be automatically and instantly activated after your payment has been completed.",
  },
  {
    icon: PiCursorClickFill,
    title: "One Click App Install",
    text: "You will gain access to over 450+ ready to install applications like WordPress with a single click.",
  },
  {
    icon: FaBolt,
    title: "LiteSpeed",
    text: "LiteSpeed web server is 84x faster than Apache with built-in caching for optimal WordPress performance.",
  },
  {
    icon: FaUpload,
    title: "Daily Backups",
    text: "Automated daily backups ensure your data is always safe and recoverable with one-click restore.",
  },
  {
    icon: MdSupportAgent,
    title: "24/7 BW Support",
    text: "Expert Botswana based support team available around the clock to help with any hosting issues",
  },
  {
    icon: MdOutlinePayment,
    title: "Convenient Payment Options",
    text: "Pay in BWP. You can pay using popular methods in Botswana, including Credit/Debit cards, Mobile money, Bank transfer/EFT.",
  },
];

export default function WhyChooseHosting() {
  return (
    <div className="relative isolate w-full overflow-x-clip py-10">
      {/* blur component */}
      <div
        aria-hidden="true"
        className="absolute -top-12 left-1/4 -z-10 -translate-x-1/4 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#89a6fc] opacity-15"
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16 leading-normal">
        <div className="mb-16 text-center">
          <p className="mb-4 font-medium text-blue-600">Everything you need</p>
          <h2 className={` ${longSectionHeadings} mb-4`}>
            Why Choose Our Web Hosting Service?
          </h2>
          <p className={` ${sectionSubHeadings} mx-auto max-w-3xl text-pretty`}>
            Reliable infrastructure at affordable prices, backed by local
            Botswana support
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-y-4 rounded-xl border border-primary p-8"
              >
                <div className="flex-shrink-0">
                  <IconComponent size={40} className="text-primary" />
                </div>
                <div>
                  <p className="mt-1 flex flex-col items-center text-center leading-relaxed text-foreground">
                    <span className="font-semibold">{feature.title}</span>{" "}
                    <span className="mt-1 font-sans text-md text-gray-600">
                      {feature.text}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
