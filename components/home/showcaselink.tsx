"use client";

import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";
import { useCurrency } from "@/contexts/currency-context";
import { cairo, lora } from "@/app/ui/fonts";

const price = { BWP: "35", USD: "2.50" };

export default function Showcaselink() {
  const { currency } = useCurrency();
  const currencySymbol = currency === "USD" ? "$" : "P";

  return (
    <div>
      <Link
        href="/emails"
        className="flex w-max items-center justify-center gap-x-3 rounded-lg border border-gray-400 bg-primary/10 py-1 pl-1 pr-1.5 shadow-sm hover:bg-primary/15"
      >
        <p
          className={` ${cairo.className} rounded-lg bg-slate-700 px-2 py-0.5 text-md font-semibold tracking-wide text-neutral-100`}
        >
          New
        </p>

        <span
          className={` ${cairo.className} text-md font-semibold text-gray-700`}
        >
          Business Email
        </span>
        <p className={`font-sans text-base font-semibold text-gray-700`}>
          <span className={lora.className}>{currencySymbol}</span>
          {price[currency]}
        </p>
        <span className="text-gray-400">|</span>
        <span>
          <IoArrowForwardCircle className="text-slate-700" size="1.6em" />
        </span>
      </Link>
    </div>
  );
}
