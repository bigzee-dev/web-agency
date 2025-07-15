import { Mail, Phone, MessageSquare, Facebook } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";

const links = [
  { name: "Contact Us", href: "#" },
  { name: "We Build", href: "#" },
  { name: "We Deliver", href: "#" },
  { name: "Launch Product", href: "#" },
];
const contactOptions = [
  {
    id: "email",
    icon: Mail,
    title: "Send us an Email",
    contact: "support@coodiv.net",
    href: "mailto:support@coodiv.net",
  },
  {
    id: "phone",
    icon: Phone,
    title: "Give us a Call + Whatsapp",
    contact: "+213-661-8388-60",
    href: "tel:+213-661-8388-60",
  },
  {
    id: "twitter",
    icon: MessageSquare,
    title: "Send us a Message",
    contact: "send message",
    href: "https://twitter.com/Coodiv",
  },
  {
    id: "facebook",
    icon: Facebook,
    title: "Reach on Facebook",
    contact: "@Coodiv",
    href: "https://twitter.com/Coodiv",
  },
];

export default function WorkWithUs() {
  return (
    <div className="x-padding mt-5 w-full">
      <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 py-20">
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2b2774] to-[#4a4790] opacity-40"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#73304c] to-[#776fff] opacity-25"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              className={` ${montserrat.className} max-w-6xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl`}
            >
              Work with us
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Businesses of any size can improve their marketing and online
              reach by using our products and services.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-neutral-300 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            {/* Contact Options Grid */}
            <div className="mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
              {contactOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <div key={option.id} className="space-y-4 text-center">
                    <div className="flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500/50 bg-white/5">
                        <IconComponent className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base/7 font-semibold text-neutral-200">
                        {option.title}
                      </h3>
                      <a
                        href={option.href}
                        className="text-md font-medium text-neutral-400 hover:text-blue-700"
                        {...(option.id === "twitter" && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {option.contact}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
