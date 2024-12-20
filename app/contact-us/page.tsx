import { useState } from "react";
import SocialMediaContacts from "@/components/contactus/social-media";
import ContactUsForm from "@/components/contactus/contact-us-form";

import { Mails, Phone } from "lucide-react";
import { montserrat } from "../ui/fonts";

export default function ContactUs() {
  return (
    <div className="py-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-3">
        <p className="text-md font-medium text-gray-500">
          Lets Discuss your Project
        </p>
        <p className="text-3xl font-extrabold text-gray-900">Contact Us</p>
        <p className="font-sans text-gray-600 text-base font-normal">
          Use these Tailwind CSS settings screen examples to build configuration
          and preference pages where users can update their account information,
          change settings, and customize their experience. These page examples
          are designed and built by the Tailwind CSS team, and include a variety
          of different styles and layouts.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-x-6 mt-12">
        <div className="flex flex-col gap-2 items-center justify-center pb-3 border-b-4 border-blue-700 h-20">
          <div className="flex justify-center items-center gap-x-1.5 ">
            <div className="p-1.5 bg-gray-800 text-neutral-300 rounded-lg">
              <Mails size="1.6em" strokeWidth={3} />
            </div>{" "}
            <span
              className={` ${montserrat.className} text-gray-900 text-2xl font-bold `}
            >
              Email
            </span>
          </div>
          <p className="font-sans text-md text-gray-700 ">admin@bigzee.app</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center pb-3 border-b-4 border-pink-700 h-20">
          <div className="flex justify-center items-center gap-x-1.5 ">
            <div className="p-1.5 bg-gray-900 text-neutral-300 rounded-lg">
              <Phone size="1.6em" strokeWidth={3} />{" "}
            </div>
            <span
              className={` ${montserrat.className}text-gray-900 text-2xl font-bold `}
            >
              Phone
            </span>
          </div>
          <p className="text-md text-gray-700 italic">(267) 77810825</p>
        </div>
      </div>

      <ContactUsForm />
      <SocialMediaContacts />
    </div>
  );
}
