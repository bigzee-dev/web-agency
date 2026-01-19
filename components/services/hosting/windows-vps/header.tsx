"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Link from "next/link";

import { Server } from "lucide-react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaWindows } from "react-icons/fa";
import {
  pageHeadings,
  pageHeadingsCenter,
  primaryButton,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";

export default function HeaderVps() {
  const swiperContStyles =
    "flex items-center justify-center h-40 max-w-lg rounded-xl border bg-gradient-to-br from-gray-800 to-gray-700 p-9";

  return (
    <>
      <main className="overflow-hidden">
        <section className="relative">
          <div className="relative py-20 lg:py-24 lg:pt-20">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="grid w-full grid-cols-12 gap-x-16 lg:mt-0">
                {/* <Link
                  href="/"
                  className="mx-auto flex w-fit items-center gap-3 rounded-md border border-blue-700/30 bg-blue-100/20 p-1 pr-3"
                >
                  <span className="rounded-md bg-blue-700 px-2 py-1 text-xs font-medium text-blue-100">
                    NEW
                  </span>
                  <span className="text-[0.8rem] font-medium text-gray-600">
                    2vCPU / 4GB RAM -{" "}
                    <span className="text-sm font-semibold text-gray-700">
                      P280
                    </span>
                  </span>
                  <span className="block h-4 w-px bg-gray-800"></span>

                  <IoArrowForwardCircleSharp className="size-6 text-neutral-700" />
                </Link> */}
                <div className="col-span-7 flex flex-col items-center justify-center">
                  {/* <div className="flex items-center justify-center gap-1">
                    <Server className="h-4 w-4 text-gray-700" />
                    <p className="rounded-3xl border border-gray-700 bg-gray-600/10 px-3 py-0.5 font-sans text-xs font-semibold text-gray-700">
                      Windows VM
                    </p>
                  </div> */}
                  <h1 className={` ${pageHeadings} mt-2 hidden md:block`}>
                    Windows VPS for Business and Enterprise Applications
                  </h1>
                  <h1 className={` ${pageHeadingsCenter} mt-8 md:hidden`}>
                    Windows VPS for Business and Enterprise Applications
                  </h1>
                  <p
                    className={` ${sectionSubHeadings} mx-auto mt-6 max-w-2xl text-center`}
                  >
                    Deploy powerful Windows Server instances with full RDP
                    access and seamless integration with Microsoft technologies.
                  </p>

                  <div className="mt-6 md:mt-8">
                    <Link
                      href="#pricing-vps"
                      className={` ${primaryButton} inline-flex items-center justify-center gap-x-2`}
                    >
                      <span className="text-nowrap">Get Started</span>
                    </Link>
                  </div>

                  {/* Windows Server Editions */}
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    {["2019", "2022", "2025"].map((version) => (
                      <div
                        key={version}
                        className="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 shadow-sm"
                      >
                        <FaWindows className="h-5 w-5 text-gray-700" />
                        <span className="font-sans text-sm font-medium text-gray-700">
                          Server {version}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <img
                  src="/svg/windows-vps/windows-icon.svg"
                  alt="windows-vps"
                  className="col-span-5 mx-auto mt-4 w-[90%]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
