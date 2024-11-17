"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import TypingText from "./typingtext";

import Link from "next/link";

const tlds = [
  { name: ".com", price: 9.99, color: "text-red-400" },
  { name: ".io", price: 39.99, color: "text-green-400" },
  { name: ".app", price: 12.99, color: "text-purple-400" },
  { name: ".online", price: 3.99, color: "text-yellow-500" },
  { name: ".co.bw", price: 11.99, color: "text-green-500" },
  //   { name: ".org", price: 12.99, color: "text-indigo-400" },
  //   { name: ".tech", price: 39.99, color: "text-pink-400" },
];

export default function Domains() {
  return (
    <div className="h-full flex flex-col items-center w-full pt-2">
      <TypingText />
      <p className="font-sans pt-3 text-md text-neutral-300 text-center max-w-xl mx-auto">
        Securing the ideal domain is a crucial first step in establishing your
        presence online. We offer a wide variety for you to select from.
      </p>
      <div className="mt-auto w-full grid grid-cols-5 sm:grid-cols-5 gap-1 text-center">
        {tlds.map((tld) => (
          <div key={tld.name} className="p-0.5">
            <div className={`${tld.color} text-lg font-semibold`}>
              {tld.name}
            </div>
            <div className="text-xs text-gray-300/80 mt-1">
              ${tld.price.toFixed(2)}/yr
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
