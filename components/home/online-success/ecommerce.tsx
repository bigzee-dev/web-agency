import { ShoppingCart, ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";

export default function Component() {
  return (
    <div
      className="w-full py-10 px-12 rounded-3xl bg-gray-900"
      // style={{ backgroundColor: "#2D1576" }}
    >
      {/* Header badges */}
      <div className="flex justify-between items-center mb-8">
        <Badge className="bg-lime-800/60 hover:bg-lime-800/60 text-neutral-200">
          PAYMENT GATEWAY SETUP
        </Badge>

        <Badge
          variant="outline"
          className="bg-white/10 border-white/20 text-white px-4 py-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Secure checkout</span>
            <span className="text-green-400 font-semibold">VERIFIED</span>
          </div>
        </Badge>
      </div>

      <div className="grid lg:grid-cols-12 gap-x-12 ">
        {/* Left content */}
        <div className="col-span-7 pt-1">
          <h1 className="text-neutral-300 text-3xl lg:text-4xl font-bold mb-6">
            Ecommerce that looks great and sells even better.
          </h1>

          <p className="font-sans text-base text-neutral-300 leading-relaxed">
            Launch your online store with a custom design, secure payments, and
            user-friendly features that turn visitors into buyers. We handle the
            tech so you can focus on running your business and growing your
            sales.
          </p>

          {/* Feature list */}
          <div className="space-y-2 mt-6">
            <div className="flex items-center gap-3">
              <Check className="w-2.5 h-auto text-neutral-300/85 flex-shrink-0" />
              <span className="font-sans text-md text-gray-400">
                Custom online stores, Multi-vendor marketplaces, B2B platforms
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-2.5 h-auto text-neutral-300/85  flex-shrink-0" />
              <span className="font-sans text-md text-gray-400">
                Payment gateway integration, Inventory management systems
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-2.5 h-auto text-neutral-300/85  flex-shrink-0" />
              <span className="font-sans text-md text-gray-400">
                Mobile commerce, Analytics & reporting, SEO optimization
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href=""
            className={` ${montserrat.className} w-max flex items-center mt-10 text-center text-2xl font-semibold text-blue-400 `}
          >
            Start Selling Online
            <ChevronRight
              aria-hidden="true"
              className="flex-none text-blue-400 font-medium pl-2"
              size="1.35em"
            />
          </Link>
        </div>

        {/* Right illustration */}
        <div className="col-span-5">
          <div className="bg-gradient-to-br from-gray-900 to-blue-400/25 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            {/* Ecommerce illustration */}
            <div className="relative h-96 overflow-hidden">
              <div className="absolute inset-0 opacity-15">
                {/* Background grid pattern */}
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-white/20"></div>
                  ))}
                </div>
              </div>
              {/* Shopping cart icon */}
              <div className="absolute top-4 left-4 bg-orange-500 p-3 rounded-xl">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>

              {/* Product cards */}
              <div className="absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg w-32">
                <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 bg-gray-300 rounded mb-1"></div>
                <div className="h-2 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="text-green-600 font-bold text-sm">P29.99</div>
              </div>

              <div className="absolute top-32 left-8 bg-white p-4 rounded-lg shadow-lg w-32">
                <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 bg-gray-300 rounded mb-1"></div>
                <div className="h-2 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="text-green-600 font-bold text-sm">P49.99</div>
              </div>

              {/* Payment icons */}
              <div className="absolute bottom-8 left-4 flex gap-2">
                <div className="w-12 h-auto  rounded flex items-center justify-center border border-white/20">
                  <img src="/img/home/visa.png" alt="Visa" />
                </div>
                <div className="w-12 h-auto rounded flex items-center justify-center border border-white/20">
                  <img src="/img/home/master-card.png" alt="Mastercard" />
                </div>
                <div className="w-12 h-auto  rounded flex items-center justify-center border border-white/20">
                  <img src="/img/home/paypal.png" alt="Paypal" />
                </div>
              </div>

              {/* Analytics chart */}
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-end gap-1 h-12 w-16">
                  <div className="w-2 bg-blue-500 h-6 rounded-t"></div>
                  <div className="w-2 bg-green-500 h-8 rounded-t"></div>
                  <div className="w-2 bg-purple-500 h-4 rounded-t"></div>
                  <div className="w-2 bg-orange-500 h-10 rounded-t"></div>
                  <div className="w-2 bg-red-500 h-7 rounded-t"></div>
                </div>
              </div>

              {/* Mobile phone mockup */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-2xl">
                <div className="bg-white w-24 h-40 rounded-xl p-2">
                  <div className="w-full h-6 bg-purple-600 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-1 bg-gray-300 rounded"></div>
                    <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-1 bg-gray-300 rounded"></div>
                        <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-1 bg-gray-300 rounded"></div>
                        <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 h-4 bg-green-500 rounded"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-16 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-16 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-24 left-20 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
