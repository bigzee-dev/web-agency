"use client";

import Script from "next/script";
import ContactUsForm from "../shared/contactform/contactusform";

export default function ContactPageFormContainer() {
  return (
    <div className="relative isolate mx-auto mt-4 max-w-3xl overflow-hidden bg-gray-900 px-10 py-8 md:rounded-[2rem]">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <div
        aria-hidden="true"
        className="sm:top[12rem] absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#73304c] to-[#776fff] opacity-40"
        />
      </div>
      <h3 className="mb-6 text-3xl font-medium text-neutral-200">
        Send us a message
      </h3>
      <ContactUsForm />
    </div>
  );
}
