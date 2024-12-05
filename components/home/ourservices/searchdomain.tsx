"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import TypingText from "./typingtext";
import Link from "next/link";

const tlds = [
  { name: ".com", price: 9.99, color: "text-red-500" },
  { name: ".io", price: 39.99, color: "text-green-500" },
  { name: ".app", price: 12.99, color: "text-purple-500" },
  { name: ".online", price: 3.99, color: "text-yellow-500" },
  { name: ".co.bw", price: 11.99, color: "text-green-500" },
  //   { name: ".org", price: 12.99, color: "text-indigo-400" },
  //   { name: ".tech", price: 39.99, color: "text-pink-400" },
];

export default function DomainSearch() {
  const [domain, setDomain] = useState("");

  const handleRedirect = () => {
    if (domain.trim() === "") {
      alert("Please enter a domain name.");
      return;
    }
    const url = `https://domains.bigzee.app/cart.php?a=add&domain=register&query=${encodeURIComponent(
      domain
    )}`;
    window.location.href = url; // Redirect to the external website
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior (if inside a form)
      handleRedirect();
    }
  };

  return (
    <div className="h-full flex flex-col items-center max-w-2xl mx-auto">
      <TypingText />
      <form onSubmit={handleRedirect} className="flex gap-2 w-full mt-4 mb-4">
        <Input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g mywebsite.com"
          className="flex-grow bg-neutral-200 text-gray-800 border-primary placeholder:text-gray-500 placeholder:text-sm focus:ring focus:ring-2 focus:ring-neutral-300"
          style={{ fontSize: "1rem" }}
        />
        <Button
          type="button"
          onClick={handleRedirect}
          className="min-w-40 bg-neutral-200 text-md font-sans font-medium text-secondary hover:bg-neutral-100 hover:text-blue-600 border border-secondary transition duration-300 ease-in-out"
        >
          <Search />
          Search
        </Button>
      </form>

      <p className="border-l-4 border-neutral-400 font-sans pl-4 mt-2 text-md text-neutral-300">
        Securing the ideal domain name is a crucial first step in establishing
        your presence online. We offer a wide variety for you to select from.
      </p>

      <div className="w-full mt-7 grid grid-cols-5 sm:grid-cols-3 gap-1 text-center">
        {tlds.map((tld) => (
          <Link
            href="/"
            key={tld.name}
            className="flex flex-col items-center justify-center p-0.5 border border-gray-400 hover:bg-primary/50"
          >
            <div className={`${tld.color} text-lg font-semibold`}>
              {tld.name}
            </div>
            <div className="text-xs text-neutral-400 font-medium">
              ${tld.price.toFixed(2)}/yr
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
