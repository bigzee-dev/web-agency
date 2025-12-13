import { ArrowUpRight, Edit3, RefreshCw, TicketIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

export default function Shopify() {
  return (
    <div className="x-padding w-full pb-16 pt-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div>
            <img
              src="/svg/ecommerce/shopify.svg"
              alt="Shopify"
              className="h-24"
            />
          </div>
          <h1
            className={` ${montserrat.className} text-4xl font-bold text-slate-900 md:text-5xl`}
          >
            Shopify
          </h1>
          <p className="font-sans leading-relaxed text-gray-700">
            Shopify is a prominent player in the realm of e-commerce software.
            We greatly appreciate working with Shopify due to its ability to
            prioritise user experience while seamlessly managing all other
            aspects. Whether you operate a medium, large, or enterprise-level
            e-commerce store, Shopify provides a familiar and comfortable
            environment for your business.
          </p>
        </div>

        {/* Right Column - Dashboard Large Screens */}
        <div className="relative hidden md:block">
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900/20 p-6 md:p-8">
            {/* Floating Icons */}
            <div className="absolute right-40 top-6 z-50 rounded-full bg-slate-700 p-3 shadow-lg">
              <TicketIcon className="h-6 w-6 text-white" />
            </div>
            <div className="absolute left-44 top-16 z-50 rounded-full bg-slate-700 p-3 shadow-lg">
              <RefreshCw className="h-6 w-6 text-white" />
            </div>
            <div className="absolute right-20 top-56 z-50 rounded-full bg-slate-700 p-3 shadow-lg">
              <Edit3 className="h-6 w-6 text-white" />
            </div>

            {/* Phone Mockup */}
            <div className="relative mx-auto mb-4 mt-12 max-w-xs md:max-w-sm">
              <div className="rounded-[32px] bg-gray-800 p-3 shadow-xl">
                <div className="overflow-hidden rounded-[28px] bg-gray-800">
                  {/* Phone Status Bar */}
                  <div className="flex items-center justify-between bg-white px-4 py-2">
                    <span className="text-xs font-medium text-gray-800">
                      9:41
                    </span>
                  </div>

                  {/* Phone Content */}
                  <div className="bg-white p-4">
                    <h3 className="mb-4 text-lg font-medium">
                      Sales over time
                    </h3>

                    <div className="mb-2 flex items-center gap-2">
                      <div className="rounded bg-gray-100 p-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M16 2V6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8 2V6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 10H21"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">Feb 26-Mar 26, 2023</span>
                    </div>

                    <div className="relative mb-4 h-40">
                      <div className="absolute inset-0">
                        {/* Chart Placeholder */}
                        <svg
                          className="h-full w-full"
                          viewBox="0 0 300 120"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0,100 C20,80 40,110 60,90 C80,70 100,50 120,60 C140,70 160,90 180,80 C200,70 220,40 240,30 C260,20 280,30 300,40"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="absolute left-0 top-0 text-xs text-gray-500">
                        $2k
                      </div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                        $1k
                      </div>
                      <div className="absolute bottom-0 left-0 text-xs text-gray-500">
                        $0k
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Feb 26</span>
                      <span>Mar 12</span>
                      <span>Mar 26</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <Card className="absolute right-4 top-10 w-64 rounded-xl border border-gray-600 bg-background shadow-xl md:right-8 md:w-72">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Total sales</h3>
                    <a
                      href="#"
                      className="flex items-center text-sm text-blue-600"
                    >
                      View report <ArrowUpRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">P4,102.98</span>
                    <span className="rounded bg-rose-50 px-1.5 py-0.5 text-sm font-medium text-rose-500">
                      ↑ 21%
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Online store</span>
                      <div className="flex items-center gap-2">
                        <span>P3,449.29</span>
                        <span className="rounded bg-rose-50 px-1 py-0.5 text-xs font-medium text-rose-500">
                          ↑ 25%
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Shop</span>
                      <div className="flex items-center gap-2">
                        <span>P581.69</span>
                        <span className="rounded bg-emerald-50 px-1 py-0.5 text-xs font-medium text-emerald-500">
                          ↑ 2%
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Subscriptions</span>
                      <div className="flex items-center gap-2">
                        <span>P72.00</span>
                        <span className="rounded bg-emerald-50 px-1 py-0.5 text-xs font-medium text-emerald-500">
                          ↑ 14%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="mb-2 text-xs font-medium uppercase text-gray-500">
                      SALES OVER TIME
                    </h4>
                    <div className="relative h-20">
                      {/* Chart Placeholder */}
                      <svg
                        className="h-full w-full"
                        viewBox="0 0 300 80"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,60 C20,40 40,70 60,50 C80,30 100,10 120,20 C140,30 160,50 180,40 C200,30 220,10 240,20 C260,30 280,50 300,40"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <div className="h-1 w-3 rounded bg-blue-500"></div>
                        <span className="text-xs">Feb 26-Mar 26, 2023</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <div className="h-1 w-3 rounded bg-gray-300"></div>
                        <span className="text-xs">Jan 25-Feb 25, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Right Column - Dashboard Small Screens */}
        <div className="relative md:hidden">
          <Image
            src="/img/ecommerce/ecom-graphs.png"
            alt=""
            width={766}
            height={607}
          />
        </div>
      </div>
    </div>
  );
}
