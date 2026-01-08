import {
  FaFacebookF,
  FaCommentDots,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { montserrat } from "@/app/ui/fonts";
import AboutUsFormContainer from "./formcontainer";

const contactOptions = [
  {
    id: "email",
    icon: FaEnvelope,
    title: "Email",
    contact: "admin@deltaworx.co.bw",
    href: "#",
  },
  {
    id: "phone",
    icon: FaPhoneAlt,
    title: "Call",
    contact: "+267 77810825",
    href: "tel:+267 77819825",
  },
  {
    id: "message",
    icon: FaCommentDots,
    title: "Whatsapp",
    contact: "send message",
    href: "#",
  },
  {
    id: "facebook",
    icon: FaFacebookF,
    title: "Facebook",
    contact: "@DeltaworxBW",
    href: "https://twitter.com/Coodiv",
  },
];

export default function WorkWithUs() {
  return (
    <div className="md:x-padding w-full md:mt-5">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gray-900 pb-4 pt-14">
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2b2774] to-[#4a4790] opacity-10"
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
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#73304c] to-[#776fff] opacity-70"
          />
        </div>
        <div className="px-6 md:px-16">
          <div className="grid-col-1 grid w-full gap-y-8 md:grid-cols-2">
            <div className="col-span-1 flex flex-col gap-y-6">
              <h2
                className={` ${montserrat.className} max-w-6xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl`}
              >
                Work with us
              </h2>
              <div className="">
                <div className="flex items-center gap-x-0.5">
                  <h5
                    className={` ${montserrat.className} text-[1.5rem] font-medium text-blue-300`}
                  >
                    Deltaworx
                  </h5>
                </div>

                <div className="flex flex-col font-sans text-md text-neutral-400">
                  <span>Plot 698, Old Mall</span>
                  <span>Maun</span>
                </div>
              </div>

              {/* Contact Options Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {contactOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <div key={option.id} className="space-y-3">
                      <div className="flex justify-start">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500/50 bg-white/5">
                          <IconComponent className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base/7 font-medium text-neutral-200">
                          {option.title}
                        </h3>
                        <a
                          href={option.href}
                          className="font-sans text-md text-neutral-400 hover:text-blue-700"
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
            <div className="col-span-1">
              <AboutUsFormContainer />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
        </div>
      </div>
    </div>
  );
}
