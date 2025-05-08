"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/domainsforminput";
import { Search } from "lucide-react";
import { TbAt } from "react-icons/tb";

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
    <div className="flex-1 flex flex-col  w-full max-w-2xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8  bg-neutral-300/10  outline outline-1 outline-offset-1 outline-white/30 rounded-lg">
          <TbAt
            className="text-yellow-400/70"
            size="1.25em"
            strokeWidth="1.6"
          />
        </div>
        <h4 className="font-sans text-2xl font-medium text-neutral-300">
          Domain Name Registration
        </h4>
      </div>
      <span className="font-sans font-normal text-sm text-blue-400 mt-1.5">
        * Securing the ideal domain name is a crucial first step in establishing
        your presence online.
      </span>
      <form onSubmit={handleRedirect} className="flex gap-2 w-full  mt-3 mb-4">
        <Input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g mybusiness.co.bw"
          className="flex-grow bg-gray-800 text-neutral-200 border border-gray-500/70 placeholder:text-neutral-500 placeholder:text-sm focus:ring-2 focus:ring-neutral-300"
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

      {/* <div className="w-full mt-7 grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-center z-30">
        {tlds.map((tld) => (
          <Link
            href="/"
            key={tld.name}
            className="flex flex-col items-center justify-center pt-0.5 pb-1 bg-neutral-300/10 rounded-lg"
          >
            <span className={`${tld.color} text-lg font-semibold`}>
              {tld.name}
            </span>
            <div className="text-xs text-neutral-300 font-medium">
              ${tld.price.toFixed(2)}/yr
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
