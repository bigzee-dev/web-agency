"use client";

import Image from "next/image";
import TldSlider from "./tldslider";
import { montserrat } from "@/app/ui/fonts";

// components
import SearchDomainForm from "./searchdomainform";

export default function Header() {
  return (
    <div className="relative w-full bg-purple-900/50">
      <div className="inset-0 w-full bg-gradient-to-r from-secondary via-secondary/60 to-transparent pt-12 pb-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-10 max-full">
            <div className="col-span-6">
              {/* Domains badge */}
              <div className="inline-block">
                <span className="font-semibold text-neutral-300 tracking-widest">
                  DOMAIN NAMES
                </span>
              </div>
              {/* Main heading */}
              <h1
                className={` ${montserrat.className} max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mt-3 leading-tight`}
              >
                Search for and register a domain in minutes
              </h1>

              <SearchDomainForm />
              <p className="font-sans text-sm text-neutral-200 mt-3">
                Already bought a domain?{" "}
                <a href="#" className="text-neutral-200/85 underline">
                  Transfer it to BigZee
                </a>
              </p>
            </div>
            <div className="col-span-4 col-start-8">
              {" "}
              <Image
                src="/img/domains/domains-hero.png"
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
