"use client";
import React from "react";

import Link from "next/link";

import { FaWindows } from "react-icons/fa";
import {
  pageHeadings,
  pageHeadingsCenter,
  primaryButton,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";

export default function HeaderVps() {
  return (
    <>
      <main className="x-padding w-full overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl gap-x-16 gap-y-8 px-6 py-16 md:mt-0 md:grid-cols-12 md:px-12 md:py-24 md:pt-20">
          <div className="order-2 flex flex-col items-center justify-center md:order-1 md:col-span-7">
            <h1 className={` ${pageHeadings} mt-2 hidden md:block`}>
              Windows VPS for Business and Enterprise Applications
            </h1>
            <h1 className={` ${pageHeadingsCenter} mt-8 md:hidden`}>
              Windows VPS for Business and Enterprise Applications
            </h1>
            <p
              className={` ${sectionSubHeadings} mx-auto mt-6 max-w-2xl text-center`}
            >
              Deploy powerful Windows Server instances with full RDP access and
              seamless integration with Microsoft technologies.
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
            className="order-1 mx-auto mt-4 w-[90%] md:order-2 md:col-span-5"
          />
        </div>
      </main>
    </>
  );
}
