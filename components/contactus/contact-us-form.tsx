"use client";

import { useRef } from "react";

type ContactUs = {
  preventDefault: () => void;
  target: {
    name: { value: string };
    email: { value: string };
    company: { value: string };
    message: { value: string };
  };
};

export default function ContactUsForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: ContactUs) {
    e.preventDefault();

    // check if the form has a valid h-captcha
    const form = formRef.current;
    if (!form) {
      alert("Form not found");
      return;
    }
    const hCaptchaElement = form.querySelector(
      'textarea[name="h-captcha-response"]'
    );
    const hCaptcha = hCaptchaElement
      ? (hCaptchaElement as HTMLTextAreaElement).value
      : null;

    if (!hCaptcha) {
      alert("Please fill out captcha field");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3_FORMS_ACCESS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        company: e.target.company.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <div className="isolate bg-gray-900 max-w-4xl mx-auto py-6 mt-8 md:py-12 px-8 rounded-xl">
      {/* <div
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
      </div> */}

      <div className="">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-neutral-300 sm:text-3xl">
          Send us a Message
        </h2>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="mt-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-neutral-400"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/15 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="col-span-6">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-neutral-400"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/15 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="col-span-6">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-neutral-400"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/15 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          {/* <div className="col-span-6">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-neutral-400"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/15 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div> */}
          <div className="col-span-12">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-neutral-400"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/15 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="h-captcha" data-captcha="true"></div>
          <button
            type="submit"
            className="block mt-6 w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-md font-sans font-semibold text-neutral-100 tracking-wide shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
