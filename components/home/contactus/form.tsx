import { useState } from "react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from "@headlessui/react";

const inputStyles =
  "block w-full bg-gray-900 bg-opacity-70 text-sm leading-6 placeholder:text-gray-400 rounded-md px-3 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600";

export default function Form() {
  const [agreed, setAgreed] = useState(false);
  return (
    <form className="col-span-3">
      <div className="border-b border-gray-900/10 pb-12">
        <div className="grid grid-cols-6 gap-x-6 gap-y-6">
          <div className="col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="col-span-3">
            <div className="flex justify-between items-center">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Company
              </label>
              <span className="text-sm text-gray-400">Optional</span>
            </div>
            <div className="mt-2">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="company-name"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-200"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                rows={4}
                className={inputStyles}
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-6 items-center mt-2 gap-y-4">
        <Field className="flex gap-x-4 col-span-full">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-500 bg-opacity-70 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
              />
            </Switch>
          </div>
          <Label className="text-sm leading-6 text-gray-400">
            By selecting this, you agree to our{" "}
            <a href="#" className="font-semibold text-indigo-600">
              privacy&nbsp;policy
            </a>
            .
          </Label>
        </Field>
        <button
          type="submit"
          className="rounded-md col-span-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
