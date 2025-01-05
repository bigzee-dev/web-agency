import { useState } from "react";
import SocialMediaContacts from "@/components/contactus/social-media";
import ContactUsForm from "@/components/contactus/contact-us-form";
import SocialMedia from "@/components/contactus/testing";
import { Mails, Phone } from "lucide-react";
import { montserrat } from "../ui/fonts";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiCopy } from "react-icons/bi";

const iconProps = {
  className: "text-neutral-100",
  size: "1.4em",
};

const links = [
  {
    name: "Facebook",
    icon: <FaFacebook {...iconProps} />,
  },
  {
    name: "WhatsApp",
    icon: <IoLogoWhatsapp {...iconProps} />,
  },
];

export default function ContactUs() {
  return (
    <div className="pb-28">
      <SocialMedia />
      {/* <div className="relative isolate w-full h-[350px]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <img
          src="https://images.unsplash.com/photo-1616094620696-15a31bf047ed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gray-900/65 w-full"></div>
        <div className="absolute inset-0 max-w-4xl mx-auto pt-12">
          <p className="text-md font-medium text-neutral-400">
            Lets Discuss your Project
          </p>
          <p className="text-3xl font-extrabold text-neutral-300">Contact Us</p>
          <p className="font-sans text-neutral-300 text-base font-normal">
            Use these Tailwind CSS settings screen examples to build
            configuration and preference pages where users can update their
            account information, change settings, and customize their
            experience. These page examples are designed and built by the
            Tailwind CSS team, and include a variety of different styles and
            layouts.
          </p>
        </div>
      </div> */}

      {/* <div className="max-w-8xl space-y-3">
        
        <div className="relative isolate overflow-hidden bg-gray-900 h-[400px] py-24 sm:py-32">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1616094620696-15a31bf047ed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=10&blend-mode=multiply"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
          />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-5"
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
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-5"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Work with us
              </h2>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>
            </div>
           
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-md font-medium text-gray-500">
            Lets Discuss your Project
          </p>
          <p className="text-3xl font-extrabold text-gray-900">Contact Us</p>
          <p className="font-sans text-gray-600 text-base font-normal">
            Use these Tailwind CSS settings screen examples to build
            configuration and preference pages where users can update their
            account information, change settings, and customize their
            experience. These page examples are designed and built by the
            Tailwind CSS team, and include a variety of different styles and
            layouts.
          </p>
        </div>
      </div> */}
      <div className="max-w-4xl mx-auto grid grid-cols-2  mt-8 outline outline-1 outline-offset-1 outline-gray-400 py-3  bg-gray-200/50 rounded-lg ">
        <div className="flex flex-col gap-2.5 pl-8 pr-8 border-r border-gray-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="p-1.5 bg-gray-800 text-neutral-300 rounded-lg">
                <Mails size="1.6em" strokeWidth={2} />
              </div>{" "}
              <span
                className={` ${montserrat.className} text-gray-800 text-xl font-bold `}
              >
                Email
              </span>
            </div>
            <BiCopy size="1.6em" className="text-gray-700" />
          </div>
          <p className="font-sans text-md  text-gray-600 ml-6 underline">
            admin@bigzee.app
          </p>
        </div>
        <div className="flex flex-col gap-2.5 pl-8">
          <div className="flex items-center gap-x-2 ">
            <div className="p-1.5 bg-gray-800 text-neutral-300 rounded-lg">
              <Phone size="1.6em" strokeWidth={2} />{" "}
            </div>
            <span
              className={` ${montserrat.className} text-gray-800 text-xl font-bold `}
            >
              Phone
            </span>
          </div>

          <p className="font-sans text-md  text-gray-600 ml-6 underline">
            (267) 77810825
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8 outline outline-1 outline-offset-1 outline-white/25 py-3 pb-4 px-8 rounded-lg bg-gradient-to-b from-gray-900 to-primary">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="flex flex-col gap-y-3 col-span-10">
            <h6 className="text-neutral-300 text-xl font-semibold">Socials</h6>
            <div className="max-w-lg grid grid-cols-1 gap-x-6 md:grid-cols-2 mt-auto">
              {links.map((link) => (
                <button className="flex justify-center items-center gap-2  bg-neutral-400/30 py-2 px-3  outline outline-1 outline-offset-1 outline-white/50 rounded-lg min-w-52">
                  {link.icon}
                  <span className="font-sans text-md text-neutral-100 font-medium">
                    {link.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center col-span-2 opacity-80">
            <img src="/svg/social-contact.svg " alt="" className="w-20 h-20" />
          </div>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
}
