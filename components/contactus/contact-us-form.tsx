"use client";

import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { IoIosSend } from "react-icons/io";

export default function ContactUsForm() {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onHCaptchaChange = (token: string) => {
    setValue("h-captcha-response", token);
  };

  interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
    "h-captcha-response": string;
  }

  const onSubmit = async (data: FormData) => {
    console.log("formdata", data);

    // Add the access key to the data object
    const requestData = {
      ...data,
      access_key: process.env.NEXT_PUBLIC_WEB3_FORMS_ACCESS_KEY,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  };

  const labelStyles = "font-sans block text-sm/6 font-semibold text-secondary";
  const inputStyles =
    "font-sans block w-full rounded-md bg-background px-3.5 py-2 text-base text-gray-700 outline outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-500 placeholder:text-md placeholder:font-light focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600";

  return (
    <div className="max-w-4xl mx-auto  mt-8 ">
      <div className="border-b border-gray-400 pb-1">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
          Send us a Message
        </h2>
      </div>
      <div className="bg-gray-100 mt-3 md:py-12 px-8 rounded-xl outline outline-1 -outline-offset-1 outline-gray-400">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-12 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="col-span-6">
              <label htmlFor="first-name" className={labelStyles}>
                Name<span className="text-red-600"> *</span>
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  {...register("name")}
                  type="text"
                  placeholder="Please enter your full name"
                  required
                  autoComplete="given-name"
                  className={inputStyles}
                />
              </div>
            </div>
            <div className="col-span-6">
              <label htmlFor="email" className={labelStyles}>
                Email <span className="text-red-600"> *</span>
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="Please enter your email address"
                  autoComplete="email"
                  className={inputStyles}
                />
              </div>
            </div>
            <div className="col-span-6">
              <label htmlFor="company" className={labelStyles}>
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  {...register("company")}
                  type="text"
                  placeholder="Please enter your company name"
                  autoComplete="organization"
                  className={inputStyles}
                />
              </div>
            </div>

            <div className="col-span-12">
              <label htmlFor="message" className={labelStyles}>
                Message <span className="text-red-600"> *</span>
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  placeholder="Please enter your message"
                  className={inputStyles}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 items-center mt-10">
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={onHCaptchaChange}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 col-span-4 col-start-9 mt-6 w-full rounded-md bg-secondary px-3.5 py-2.5 text-center text-md font-sans font-semibold text-neutral-100 tracking-wide shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
              <IoIosSend size="1.6em" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
