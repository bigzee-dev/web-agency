import { ArrowUpRight, Edit3, RefreshCw, TicketIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { montserrat } from "@/app/ui/fonts";

export default function Shopify() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
            className={` ${montserrat.className} text-4xl md:text-5xl font-bold text-slate-900 `}
          >
            Shopify
          </h1>
          <p className="font-sans text-gray-700 leading-relaxed">
            Shopify is a prominent player in the realm of e-commerce software.
            We greatly appreciate working with Shopify due to its ability to
            prioritise user experience while seamlessly managing all other
            aspects. Whether you operate a medium, large, or enterprise-level
            e-commerce store, Shopify provides a familiar and comfortable
            environment for your business.
          </p>
        </div>

        {/* Right Column - Dashboard */}
        <div className="relative">
          <div className="bg-indigo-100 rounded-3xl p-6 md:p-8 relative overflow-hidden">
            {/* Floating Icons */}
            <div className="absolute top-6 right-40 bg-slate-700 rounded-full p-3 shadow-lg z-50">
              <TicketIcon className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-16 left-44 bg-slate-700 rounded-full p-3 shadow-lg z-50">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-56 right-20 bg-slate-700 rounded-full p-3 shadow-lg z-50">
              <Edit3 className="w-6 h-6 text-white" />
            </div>

            {/* Phone Mockup */}
            <div className="relative mx-auto max-w-xs md:max-w-sm mt-12 mb-4">
              <div className="bg-gray-800 rounded-[32px] p-3 shadow-xl">
                <div className="bg-gray-800 rounded-[28px] overflow-hidden">
                  {/* Phone Status Bar */}
                  <div className="bg-white px-4 py-2 flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-800">
                      9:41
                    </span>
                  </div>

                  {/* Phone Content */}
                  <div className="bg-white p-4">
                    <h3 className="text-lg font-medium mb-4">
                      Sales over time
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gray-100 p-1 rounded">
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

                    <div className="h-40 relative mb-4">
                      <div className="absolute inset-0">
                        {/* Chart Placeholder */}
                        <svg
                          className="w-full h-full"
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
                      <div className="absolute left-0 bottom-0 text-xs text-gray-500">
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
            <Card className="absolute top-10 right-4 md:right-8 w-64 md:w-72 bg-background shadow-xl rounded-xl">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Total sales</h3>
                    <a
                      href="#"
                      className="text-blue-600 text-sm flex items-center"
                    >
                      View report <ArrowUpRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">P4,102.98</span>
                    <span className="text-rose-500 text-sm font-medium bg-rose-50 px-1.5 py-0.5 rounded">
                      ↑ 21%
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Online store</span>
                      <div className="flex items-center gap-2">
                        <span>P3,449.29</span>
                        <span className="text-rose-500 text-xs font-medium bg-rose-50 px-1 py-0.5 rounded">
                          ↑ 25%
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Shop</span>
                      <div className="flex items-center gap-2">
                        <span>P581.69</span>
                        <span className="text-emerald-500 text-xs font-medium bg-emerald-50 px-1 py-0.5 rounded">
                          ↑ 2%
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Subscriptions</span>
                      <div className="flex items-center gap-2">
                        <span>P72.00</span>
                        <span className="text-emerald-500 text-xs font-medium bg-emerald-50 px-1 py-0.5 rounded">
                          ↑ 14%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-xs uppercase text-gray-500 font-medium mb-2">
                      SALES OVER TIME
                    </h4>
                    <div className="h-20 relative">
                      {/* Chart Placeholder */}
                      <svg
                        className="w-full h-full"
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

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-1 bg-blue-500 rounded"></div>
                        <span className="text-xs">Feb 26-Mar 26, 2023</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <div className="w-3 h-1 bg-gray-300 rounded"></div>
                        <span className="text-xs">Jan 25-Feb 25, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
