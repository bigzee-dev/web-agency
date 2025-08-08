"use client";

import Image from "next/image";
import TldSlider from "./tldslider";
import { montserrat } from "@/app/ui/fonts";

// components
import SearchDomainForm from "./searchdomainform";

export default function Header() {
  return (
    <div className="relative w-full bg-gray-900">
      <div className="inset-0 w-full bg-gradient-to-r from-secondary via-secondary/60 to-transparent pb-2 pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-full grid grid-cols-12 gap-10">
            <div className="col-span-6">
              {/* Domains badge */}
              <div className="inline-block">
                <span className="font-semibold tracking-widest text-neutral-300">
                  DOMAIN NAMES
                </span>
              </div>
              {/* Main heading */}
              <h1
                className={` ${montserrat.className} mt-3 max-w-4xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
              >
                Search for and register a domain in minutes
              </h1>

              <SearchDomainForm />
              <p className="mt-3 text-sm text-neutral-200/85">
                Already bought a domain?{" "}
                <a href="#" className="text-neutral-200/85 underline">
                  Transfer it to Deltaworx
                </a>
              </p>
            </div>
            <div className="col-span-4 col-start-8">
              {" "}
              <Image
                src="/img/domains/domains-hero-filter.png"
                alt="Logo"
                width={1000}
                height={1000}
                className=""
              />
            </div>
          </div>
        </div>
        <TldSlider />
      </div>
    </div>
  );
}
