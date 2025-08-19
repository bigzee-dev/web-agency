import { sectionSubHeadings } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { FaCircleCheck } from "react-icons/fa6";
import {
  RocketIcon,
  DashboardIcon,
  CreditCardIcon,
  GlobeIcon,
  SocialIcon,
  ShoppingBagIcon,
} from "./icons-start-today";

const features = [
  {
    icon: RocketIcon,
    title: "Customised eCommerce Web Design",
    text: "Get a unique, professional eCommerce website tailored to your brand and business needs.",
  },
  {
    icon: DashboardIcon,
    title: "Manage Products and Customers",
    text: "Easily add, edit, and manage products, customers, and orders with our user-friendly dashboard.",
  },

  {
    icon: CreditCardIcon,
    title: "Secured Payment Gateway",
    text: "Accept payments securely with PCI-compliant payment gateways that protect your customers' data.",
  },
  {
    icon: GlobeIcon,
    title: "Search Engine Optimisation",
    text: "Optimise your eCommerce site for search engines to attract more organic traffic and increase sales.",
  },
  {
    icon: SocialIcon,
    title: "AI & Social Media Integration",
    text: "Integrate AI tools and social media platforms to enhance customer engagement and streamline marketing efforts.",
  },
  {
    icon: ShoppingBagIcon,
    title: "Supporting you beyond the project",
    text: "Get ongoing support and maintenance to ensure your eCommerce site runs smoothly and stays up-to-date.",
  },
];

export default function StartToday() {
  return (
    <div className="relative isolate w-full py-12">
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
      {/* <div className="mx-auto flex max-w-6xl flex-col items-center gap-y-10 px-4 py-4">
        <h2
          className={` ${montserrat.className} w-full bg-primary py-2 text-center text-3xl font-bold text-neutral-200 md:text-4xl`}
        >
          Start Your Online Business Today
        </h2>
        <ul className="grid max-w-3xl grid-cols-2 gap-x-5 gap-y-5">
          {[
            "Customised eCommerce Web Design",
            "Seamless API Integration",
            "Secured Payment Gateway",
            "Search Engine Optimisation",
            "Certified eCommerce Developers",
            "Supporting you beyond the project",
          ].map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 rounded-lg bg-gray-800 px-4 py-3"
            >
              <div className="">
                <FaCircleCheck className="mt-0.5 h-auto w-5 text-blue-400" />
              </div>
              <span className="font-sans text-md text-neutral-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div> */}
      <section className="mx-auto max-w-6xl px-6 py-16 leading-normal">
        <div className="mb-20 text-center">
          <p className="mb-4 font-medium text-blue-600">Everything you need</p>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Start your Online Business Today!
          </h2>
          <p className={` ${sectionSubHeadings} mx-auto max-w-3xl text-pretty`}>
            Everyone’s online. Data is cheap. Smartphones are everywhere. It’s
            the best time to start your online business.
          </p>
        </div>

        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="flex-shrink-0">
                  <IconComponent size="size-12" />
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
