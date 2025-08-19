import {
  btnDimensions,
  primaryButton,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import clsx from "clsx";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

const emailsData = [
  {
    id: 1,
    status: "Delivered",
    email: "ken99@yahoo.com",
    amount: "$316.00",
    statusIcon: "success",
  },
  {
    id: 2,
    status: "Delivered",
    email: "abe45@gmail.com",
    amount: "$242.00",
    statusIcon: "success",
  },
  {
    id: 3,
    status: "Delivered",
    email: "monser@gmail.com",
    amount: "$837.00",
    statusIcon: "success",
  },
  {
    id: 4,
    status: "Delivered",
    email: "carmella@hotmail.com",
    amount: "$721.00",
    statusIcon: "success",
  },
];

export default function EmailSupport() {
  return (
    <div className="relative mx-auto grid w-full max-w-6xl grid-cols-12 items-center gap-x-20 py-16">
      {/* Blur component */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#477cf0] to-[#6799e8] opacity-15"
        />
      </div>
      <div className="col-span-7 flex flex-col items-center gap-y-10">
        <div className="space-y-4">
          <h2
            className={` ${montserrat.className} text-pretty text-4xl font-bold text-gray-800 md:text-4xl`}
          >
            Interested in our Email Service? <br />
            <span className="text-primary">Lets Chat!</span>{" "}
          </h2>
          <p className={`text-pretty text-base text-gray-600`}>
            We look forward to hearing from you! Whether you have a question
            about our Email service, need assistance, or just want to say hello,
            we&apos;re here to help.
          </p>
        </div>

        <div className="flex w-full items-center justify-start">
          <Link href="/contact-us" className={` ${primaryButton} `}>
            Contact us&nbsp; <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
      <div className="col-span-5 rounded-2xl border border-gray-300 bg-neutral-100 p-6 text-gray-900 shadow-md">
        {/* Header */}
        <div className="mb-6">
          <h1 className="mb-1 text-xl font-semibold text-gray-800">Emails</h1>
          <p className="text-sm text-gray-600">Manage your Emails</p>
        </div>

        {/* Controls */}
        <div className="mb-4 flex items-center justify-between">
          <div className="relative max-w-sm flex-1">
            <input
              type="text"
              placeholder="Filter emails..."
              className="disabled w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500"
              style={{ pointerEvents: "none" }}
            />
          </div>
          <button
            className="ml-4 flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-600 hover:bg-gray-50"
            style={{ pointerEvents: "none" }}
          >
            Columns
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Table */}
        <div className="rounded-md border border-gray-200 font-sans text-md">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-primary">
            <div className="col-span-1"></div>
            <div className="col-span-2">Status</div>
            <div className="col-span-5 flex items-center gap-1">
              Email
              <div className="flex flex-col">
                <div className="h-0 w-0 border-b-2 border-l-2 border-r-2 border-transparent border-b-gray-600"></div>
                <div className="mt-0.5 h-0 w-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400"></div>
              </div>
            </div>
            <div className="col-span-3">Amount</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Rows */}
          {emailsData.map((email, idx) => (
            <div
              key={email.id}
              className={clsx(
                "grid grid-cols-12 gap-4 border-b border-gray-200 px-4 py-3 last:border-b-0 hover:bg-gray-50",
                idx % 2 === 1 && "bg-background",
              )}
            >
              {/* Status Icon */}
              <div className="col-span-1 flex items-center">
                <div
                  className={`h-4 w-4 rounded-full border-2 ${
                    email.statusIcon === "success"
                      ? "border-green-500 bg-green-500"
                      : email.statusIcon === "processing"
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300 bg-transparent"
                  }`}
                >
                  {email.statusIcon === "processing" && (
                    <div className="h-full w-full rounded-full bg-blue-200"></div>
                  )}
                </div>
              </div>

              {/* Status Text */}
              <div className="col-span-2 flex items-center text-sm text-neutral-600">
                {email.status}
              </div>

              {/* Email */}
              <div className="col-span-5 flex items-center text-sm text-neutral-600">
                {email.email}
              </div>

              {/* Amount */}
              <div className="col-span-3 flex items-center text-sm text-neutral-600">
                {email.amount}
              </div>

              {/* More Options */}
              <div className="col-span-1 flex items-center justify-end">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
