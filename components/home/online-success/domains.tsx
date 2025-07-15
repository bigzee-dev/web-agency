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
      className="w-full rounded-3xl bg-gradient-to-b from-gray-900 via-gray-900 to-primary md:bg-gradient-to-tr md:px-12 md:py-10"
      // style={{ backgroundColor: "#2D1576" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header badges */}
        <div className="mb-8 flex items-start justify-between">
          <Badge className="bg-lime-800/60 uppercase text-neutral-200 hover:bg-lime-800/60">
            Domain Management
          </Badge>
          <Badge
            variant="outline"
            className="border-white/20 bg-white/10 px-4 py-2 text-white"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <span>DNS management</span>
              <span className="font-semibold text-blue-400">24/7</span>
            </div>
          </Badge>
        </div>

        <div className="grid gap-x-12 lg:grid-cols-12">
          {/* Left content */}
          <div className="col-span-7 pt-1 text-neutral-300">
            <h1 className="mb-6 text-3xl font-bold leading-tight lg:text-4xl">
              Domain registration and management — made simple
            </h1>

            <p className="font-sans text-base leading-relaxed text-gray-300">
              From securing the perfect domain to managing DNS and nameservers,
              we simplify every step — giving you full control without the
              hassle.
            </p>

            {/* Feature list */}
            <div className="mt-6 space-y-2 font-sans text-md">
              <div className="flex items-center gap-3">
                <Check className="h-auto w-2.5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300/85">
                  Domain registration, transfers, and renewals
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-auto w-2.5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300/85">
                  Advanced DNS management
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-auto w-2.5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300/85">
                  Domain privacy protection, Bulk domain management
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href=""
              className={` ${montserrat.className} mt-10 flex w-max items-center text-center text-2xl font-semibold text-blue-400`}
            >
              Register Your Domain{" "}
              <ChevronRight
                aria-hidden="true"
                className="flex-none pl-2 font-medium text-blue-400"
                size="1.35em"
              />
            </Link>
          </div>

          {/* Right illustration */}
          <div className="relative col-span-5">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-blue-400/25 p-4 backdrop-blur-md">
              {/* Domain illustration */}
              <div className="relative h-96 overflow-hidden">
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-15">
                  <div className="grid h-full w-full grid-cols-8 grid-rows-8">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-white/20"></div>
                    ))}
                  </div>
                </div>

                {/* Central domain hub */}
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-4 shadow-2xl">
                    <div className="w-40 rounded-xl bg-white p-4">
                      <div className="mb-3 text-center">
                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-sm font-bold text-gray-800">
                          Domain Control
                        </div>
                        <div className="text-xs text-gray-500">
                          yoursite.com
                        </div>
                      </div>

                      <div className="mb-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shield className="h-3 w-3 text-green-500" />
                            <span className="text-xs text-gray-600">SSL</span>
                          </div>
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Mail className="h-3 w-3 text-blue-500" />
                            <span className="text-xs text-gray-600">Email</span>
                          </div>
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Server className="h-3 w-3 text-purple-500" />
                            <span className="text-xs text-gray-600">DNS</span>
                          </div>
                          <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        </div>
                      </div>

                      <div className="flex h-6 items-center justify-center rounded bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-medium text-white">
                        Active
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top left - Available domains */}
                <div className="absolute left-4 top-4">
                  <div className="w-36 rounded-lg bg-white p-3 shadow-lg">
                    <div className="text-center">
                      <div className="mb-1 text-sm font-bold text-gray-800">
                        mybrand.com
                      </div>
                      <div className="mb-2 text-xs text-green-600">
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
                <div className="absolute right-4 top-4">
                  <div className="rounded-lg bg-white p-3 shadow-lg">
                    <div className="mb-2 text-center text-xs font-bold text-gray-800">
                      Popular TLDs
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="rounded bg-blue-600 px-2 py-1 text-center text-xs font-medium text-white">
                        .com
                      </div>
                      <div className="rounded bg-green-600 px-2 py-1 text-center text-xs font-medium text-white">
                        .org
                      </div>
                      <div className="rounded bg-purple-600 px-2 py-1 text-center text-xs font-medium text-white">
                        .net
                      </div>
                      <div className="rounded bg-orange-600 px-2 py-1 text-center text-xs font-medium text-white">
                        .io
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom left - DNS Management */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-32 rounded-lg bg-white p-3 shadow-lg">
                    <div className="mb-2 flex items-center gap-1 text-xs font-bold text-gray-800">
                      <Server className="h-3 w-3" />
                      DNS Records
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">A Record</span>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">CNAME</span>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">MX</span>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom right - Security features */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-32 rounded-lg bg-white p-3 shadow-lg">
                    <div className="mb-2 flex items-center gap-1 text-xs font-bold text-gray-800">
                      <Shield className="h-3 w-3" />
                      Security
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Privacy</span>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">2FA</span>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Lock</span>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection lines from center to corners */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  {/* Line to top-left */}
                  <div className="absolute h-px w-24 origin-right -rotate-45 transform bg-gradient-to-l from-blue-400 to-transparent"></div>
                  {/* Line to top-right */}
                  <div className="absolute h-px w-24 origin-left rotate-45 transform bg-gradient-to-r from-purple-400 to-transparent"></div>
                  {/* Line to bottom-left */}
                  <div className="absolute h-px w-24 origin-right rotate-45 transform bg-gradient-to-l from-green-400 to-transparent"></div>
                  {/* Line to bottom-right */}
                  <div className="absolute h-px w-24 origin-left -rotate-45 transform bg-gradient-to-r from-orange-400 to-transparent"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute right-24 top-16 h-2 w-2 animate-pulse rounded-full bg-blue-400"></div>
                <div className="absolute bottom-20 left-24 h-3 w-3 animate-pulse rounded-full bg-green-400 opacity-60"></div>
                <div className="absolute left-32 top-32 h-2 w-2 animate-pulse rounded-full bg-purple-400 opacity-80"></div>
                <div className="absolute bottom-32 right-32 h-2 w-2 animate-pulse rounded-full bg-orange-400 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
