import {
  Globe,
  ArrowRight,
  Check,
  Shield,
  Mail,
  Server,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";

export default function Component() {
  return (
    <div
      className="w-full md:py-10 md:px-12 rounded-3xl bg-gray-900"
      // style={{ backgroundColor: "#2D1576" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header badges */}
        <div className="flex justify-between items-start mb-8">
          <Badge className="bg-lime-800/60 hover:bg-lime-800/60 text-neutral-200 uppercase">
            Domain Management
          </Badge>
          <Badge
            variant="outline"
            className="bg-white/10 border-white/20 text-white px-4 py-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>DNS management</span>
              <span className="text-blue-400 font-semibold">24/7</span>
            </div>
          </Badge>
        </div>

        <div className="grid lg:grid-cols-12 gap-x-12">
          {/* Left content */}
          <div className="col-span-7 text-neutral-300 pt-1">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Domain registration and management — made simple
            </h1>

            <p className="font-sans text-base text-gray-300 leading-relaxed">
              From securing the perfect domain to managing DNS and nameservers,
              we simplify every step — giving you full control without the
              hassle.
            </p>

            {/* Feature list */}
            <div className="font-sans text-md space-y-2 mt-6">
              <div className="flex items-center gap-3">
                <Check className="w-2.5 h-auto text-gray-400 flex-shrink-0" />
                <span className=" text-gray-300/85">
                  Domain registration, transfers, and renewals
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-2.5 h-auto text-gray-400 flex-shrink-0" />
                <span className="text-gray-300/85">
                  Advanced DNS management
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-2.5 h-auto text-gray-400 flex-shrink-0" />
                <span className="text-gray-300/85">
                  Domain privacy protection, Bulk domain management
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href=""
              className={` ${montserrat.className} w-max flex items-center mt-10 text-center text-2xl font-semibold text-blue-400 `}
            >
              Register Your Domain{" "}
              <ChevronRight
                aria-hidden="true"
                className="flex-none text-blue-400 font-medium pl-2"
                size="1.35em"
              />
            </Link>
          </div>

          {/* Right illustration */}
          <div className="relative col-span-5">
            <div className="bg-gradient-to-br from-gray-900 to-blue-400/25 backdrop-blur-md rounded-3xl p-5 border border-white/10">
              {/* Domain illustration */}
              <div className="relative h-96 overflow-hidden">
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-15">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-white/20"></div>
                    ))}
                  </div>
                </div>

                {/* Central domain hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-2xl">
                    <div className="bg-white rounded-xl p-4 w-40">
                      <div className="text-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <Globe className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-sm font-bold text-gray-800">
                          Domain Control
                        </div>
                        <div className="text-xs text-gray-500">
                          yoursite.com
                        </div>
                      </div>

                      <div className="space-y-2 mb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shield className="w-3 h-3 text-green-500" />
                            <span className="text-xs text-gray-600">SSL</span>
                          </div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-blue-500" />
                            <span className="text-xs text-gray-600">Email</span>
                          </div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Server className="w-3 h-3 text-purple-500" />
                            <span className="text-xs text-gray-600">DNS</span>
                          </div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>

                      <div className="h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white text-xs flex items-center justify-center font-medium">
                        Active
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top left - Available domains */}
                <div className="absolute top-8 left-8">
                  <div className="bg-white rounded-lg shadow-lg p-3 w-36">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-800 mb-1">
                        mybrand.com
                      </div>
                      <div className="text-xs text-green-600 mb-2">
                        ✓ Available
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        P129.00
                      </div>
                      <div className="text-xs text-gray-500">/year</div>
                    </div>
                  </div>
                </div>

                {/* Top right - Domain extensions */}
                <div className="absolute top-8 right-8">
                  <div className="bg-white rounded-lg shadow-lg p-3">
                    <div className="text-xs font-bold text-gray-800 mb-2 text-center">
                      Popular TLDs
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium text-center">
                        .com
                      </div>
                      <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium text-center">
                        .org
                      </div>
                      <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium text-center">
                        .net
                      </div>
                      <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium text-center">
                        .io
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom left - DNS Management */}
                <div className="absolute bottom-8 left-8">
                  <div className="bg-white rounded-lg shadow-lg p-3 w-32">
                    <div className="text-xs font-bold text-gray-800 mb-2 flex items-center gap-1">
                      <Server className="w-3 h-3" />
                      DNS Records
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">A Record</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">CNAME</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">MX</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom right - Security features */}
                <div className="absolute bottom-8 right-8">
                  <div className="bg-white rounded-lg shadow-lg p-3 w-32">
                    <div className="text-xs font-bold text-gray-800 mb-2 flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Security
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Privacy</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">2FA</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Lock</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection lines from center to corners */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Line to top-left */}
                  <div className="absolute w-24 h-px bg-gradient-to-l from-blue-400 to-transparent transform -rotate-45 origin-right"></div>
                  {/* Line to top-right */}
                  <div className="absolute w-24 h-px bg-gradient-to-r from-purple-400 to-transparent transform rotate-45 origin-left"></div>
                  {/* Line to bottom-left */}
                  <div className="absolute w-24 h-px bg-gradient-to-l from-green-400 to-transparent transform rotate-45 origin-right"></div>
                  {/* Line to bottom-right */}
                  <div className="absolute w-24 h-px bg-gradient-to-r from-orange-400 to-transparent transform -rotate-45 origin-left"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-16 right-24 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-24 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-32 left-32 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute bottom-32 right-32 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
