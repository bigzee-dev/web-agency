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

import { Rocket } from "lucide-react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import {
  pageHeadingsCenter,
  primaryButton,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";

export default function HeaderVps() {
  const swiperContStyles =
    "flex items-center justify-center h-40 max-w-lg rounded-xl border  bg-gray-800 p-9";

  return (
    <>
      <main className="overflow-hidden">
        <section className="relative">
          <div className="relative py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="flex flex-col items-center sm:mx-auto sm:w-10/12 lg:mt-0 lg:w-4/5">
                <Link
                  href="/"
                  className="mx-auto flex w-fit items-center gap-3 rounded-md border border-gray-700/30 bg-red-100/20 p-1 pr-3"
                >
                  <span className="rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-red-300">
                    HOT
                  </span>
                  <span className="text-[0.8rem] font-medium text-gray-600">
                    1vCPU / 2GB RAM -{" "}
                    <span className="text-sm font-semibold text-gray-700">
                      P130
                    </span>
                  </span>
                  <span className="block h-4 w-px bg-gray-800"></span>

                  <IoArrowForwardCircleSharp className="size-6 text-neutral-700" />
                </Link>
                <h1 className={` ${pageHeadingsCenter} mt-8 hidden md:block`}>
                  Linux VPS Optimised for <br /> the Botswana market
                </h1>
                <h1 className={` ${pageHeadingsCenter} mt-8 md:hidden`}>
                  Linux VPS Optimised for the Botswana market
                </h1>
                <p
                  className={` ${sectionSubHeadings} mx-auto mt-6 max-w-2xl text-center`}
                >
                  Deploy scalable, enterprise-grade Linux VPS instances to power
                  your applications and digital infrastructure.
                </p>

                <div className="mt-6 md:mt-12">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/store/linux-vps`}
                    className={` ${primaryButton} inline-flex items-center justify-center gap-x-2`}
                  >
                    <Rocket className="size-4" />
                    <span className="text-nowrap">Get One Now</span>
                  </Link>
                </div>
              </div>

              <div className="x-auto relative mx-auto mt-8 max-w-lg sm:mt-12">
                <p className="mb-1 text-center font-sans text-sm font-medium text-gray-500">
                  Deploy your Favourite Tech Stack
                </p>
                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_60%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_85%)] dark:opacity-10"></div>
                <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

                <Swiper
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{ delay: 2500 }}
                  modules={[Autoplay, EffectCoverflow]}
                >
                  <SwiperSlide>
                    <div className={swiperContStyles}>
                      <img
                        src="/svg/linux-vps/docker.svg"
                        alt="Docker Logo"
                        className="h-40 w-auto"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={swiperContStyles}>
                      <img
                        src="/svg/linux-vps/nginx-title.svg"
                        alt="Docker Logo"
                        className="h-24 w-auto"
                      />
                      <img
                        src="/svg/linux-vps/nginx-logo.svg"
                        alt="Docker Logo"
                        className="h-36 w-auto"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={swiperContStyles}>
                      <img
                        src="/svg/linux-vps/nextjs.svg"
                        alt="Docker Logo"
                        className="h-36 w-auto"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
