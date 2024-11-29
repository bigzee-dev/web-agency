"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import TypingText from "./typingtext";

const tlds = [
  { name: ".com", price: 9.99, color: "text-blue-500" },
  { name: ".io", price: 39.99, color: "text-green-500" },
  { name: ".app", price: 12.99, color: "text-purple-500" },
  { name: ".online", price: 3.99, color: "text-yellow-500" },
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
      <form onSubmit={handleRedirect} className="flex gap-2 w-full mt-3 mb-4">
        <Input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g mywebsite.com"
          className="flex-grow bg-gray-100 text-gray-900 border-gray-600 placeholder:text-gray-500 placeholder:text-sm "
          style={{ fontSize: "1rem" }}
        />
        <Button
          type="button"
          onClick={handleRedirect}
          className="min-w-40 bg-neutral-100 text-primary hover:bg-neutral-200 hover:text-blue-600 border border-secondary"
        >
          <Search />
          Search Domain
        </Button>
      </form>

      <p className="text-center font-sans pt-2 text-md text-neutral-700">
        Securing the ideal domain name is a crucial first step in establishing
        your presence online. We offer a wide variety for you to select from.
      </p>

      <div className="w-full mt-auto grid grid-cols-4 sm:grid-cols-7 gap-1 text-center">
        {tlds.map((tld) => (
          <div key={tld.name} className="p-0.5">
            <div className={`${tld.color} text-lg font-semibold`}>
              {tld.name}
            </div>
            <div className="text-xs text-gray-600 mt-1">
              ${tld.price.toFixed(2)}/yr
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
