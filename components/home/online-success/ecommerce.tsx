import { ShoppingCart, ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";
import { FaCircleCheck } from "react-icons/fa6";

export default function Component() {
  return (
    <div
      className="w-full rounded-3xl bg-gradient-to-b from-gray-900 via-gray-900 to-primary p-4 sm:p-6 md:bg-gradient-to-tr md:px-12 md:py-10"
      // style={{ backgroundColor: "#2D1576" }}
    >
      {/* Header badges */}
      <div className="mb-8 hidden items-center justify-between sm:flex">
        <Badge className="bg-lime-800/60 text-neutral-200 hover:bg-lime-800/60">
          PAYMENT GATEWAY SETUP
        </Badge>

        <Badge
          variant="outline"
          className="border-white/20 bg-white/10 px-4 py-2 text-white"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <span>Secure checkout</span>
            <span className="font-semibold text-green-400">VERIFIED</span>
          </div>
        </Badge>
      </div>
      {/* small screen badge */}
      <Badge
        className={`flex max-w-max gap-1 bg-neutral-100 text-center font-semibold text-slate-800 lg:hidden`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
            clipRule="evenodd"
          />
        </svg>
        ECOMMERCE
      </Badge>

      <div className="mt-4 grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
        {/* Left content */}
        <div className="col-span-1 pt-1 lg:col-span-7">
          <h1 className="mb-6 text-3xl font-bold text-neutral-300 lg:text-4xl">
            Ecommerce that looks great and sells even better.
          </h1>

          <p className="font-sans text-base leading-relaxed text-neutral-300">
            Launch your online store with a custom design, secure payments, and
            user-friendly features that turn visitors into buyers. We handle the
            tech so you can focus on running your business and growing your
            sales.
          </p>

          {/* Feature list */}
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-3">
              <Check className="h-auto w-2.5 flex-shrink-0 text-neutral-300/85" />
              <span className="font-sans text-md text-gray-400">
                Custom online stores, Multi-vendor marketplaces, B2B platforms
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-auto w-2.5 flex-shrink-0 text-neutral-300/85" />
              <span className="font-sans text-md text-gray-400">
                Payment gateway integration, Inventory management systems
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-auto w-2.5 flex-shrink-0 text-neutral-300/85" />
              <span className="font-sans text-md text-gray-400">
                Mobile commerce, Analytics & reporting, SEO optimization
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href=""
            className={` ${montserrat.className} mx-auto mt-6 flex w-max items-center text-center text-xl font-semibold text-blue-400 md:text-2xl lg:ml-0 lg:mr-auto lg:mt-8 lg:text-start`}
          >
            Start Selling Online
            <ChevronRight
              aria-hidden="true"
              className="flex-none font-medium text-blue-400 md:pl-2"
              size="1.35em"
            />
          </Link>
        </div>

        {/* Right illustration */}
        <div className="col-span-1 lg:col-span-5">
          <div className="w-full rounded-3xl border border-white/10 bg-gray-800 from-gray-900 to-blue-400/25 p-3 backdrop-blur-md md:bg-gradient-to-br md:p-6">
            {/* Ecommerce illustration */}
            <div className="relative h-72 w-full overflow-hidden lg:h-96">
              {/* Background grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid h-full w-full grid-cols-8 grid-rows-8">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-white/20"></div>
                  ))}
                </div>
              </div>
              {/* Shopping cart icon */}
              <div className="absolute left-4 top-4 rounded-xl bg-orange-500 p-3">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>

              {/* Product cards */}
              <div className="absolute right-4 top-16 w-32 rounded-lg bg-white p-4 shadow-lg">
                <div className="mb-2 h-16 w-full rounded bg-gray-200"></div>
                <div className="mb-1 h-2 rounded bg-gray-300"></div>
                <div className="mb-2 h-2 w-3/4 rounded bg-gray-300"></div>
                <div className="text-sm font-bold text-green-600">P29.99</div>
              </div>

              <div className="absolute left-8 top-32 w-32 rounded-lg bg-white p-4 shadow-lg">
                <div className="mb-2 h-16 w-full rounded bg-gray-200"></div>
                <div className="mb-1 h-2 rounded bg-gray-300"></div>
                <div className="mb-2 h-2 w-3/4 rounded bg-gray-300"></div>
                <div className="text-sm font-bold text-green-600">P49.99</div>
              </div>

              {/* Payment icons */}
              <div className="absolute bottom-2 left-4 flex gap-2 md:bottom-4">
                <div className="flex h-auto w-12 items-center justify-center rounded border border-white/20">
                  <img src="/img/home/visa.png" alt="Visa" />
                </div>
                <div className="flex h-auto w-12 items-center justify-center rounded border border-white/20">
                  <img src="/img/home/master-card.png" alt="Mastercard" />
                </div>
                <div className="flex h-auto w-12 items-center justify-center rounded border border-white/20">
                  <img src="/img/home/paypal.png" alt="Paypal" />
                </div>
              </div>

              {/* Analytics chart */}
              <div className="absolute bottom-4 right-4 rounded-lg bg-white p-3 shadow-lg">
                <div className="flex h-12 w-16 items-end gap-1">
                  <div className="h-6 w-2 rounded-t bg-blue-500"></div>
                  <div className="h-8 w-2 rounded-t bg-green-500"></div>
                  <div className="h-4 w-2 rounded-t bg-purple-500"></div>
                  <div className="h-10 w-2 rounded-t bg-orange-500"></div>
                  <div className="h-7 w-2 rounded-t bg-red-500"></div>
                </div>
              </div>

              {/* Mobile phone mockup */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-gradient-to-br from-secondary to-primary p-2">
                <div className="flex h-40 w-24 flex-col items-center rounded-xl bg-white p-2">
                  <div className="mb-2 h-6 w-full rounded bg-purple-600"></div>
                  <div className="space-y-1">
                    <div className="h-1 rounded bg-gray-300"></div>
                    <div className="h-1 w-3/4 rounded bg-gray-300"></div>
                    <div className="h-1 w-1/2 rounded bg-gray-300"></div>
                  </div>
                  <FaCircleCheck className="mt-1 text-green-500" size="12em" />
                  <p className="mt-1 w-full text-center text-[0.6rem] font-medium text-secondary">
                    Payment Received
                  </p>
                  <div className="mt-2 w-full space-y-1">
                    <div className="flex gap-1">
                      <div className="h-4 w-4 rounded bg-gray-200"></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-1 rounded bg-gray-300"></div>
                        <div className="h-1 w-2/3 rounded bg-gray-300"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 h-4 rounded bg-green-500"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute right-16 top-8 h-3 w-3 animate-pulse rounded-full bg-blue-400"></div>
              <div className="absolute bottom-20 left-16 h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
              <div className="absolute left-20 top-24 h-4 w-4 animate-pulse rounded-full bg-purple-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
