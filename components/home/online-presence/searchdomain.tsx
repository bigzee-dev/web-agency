"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/domainsforminput";
import { Search } from "lucide-react";
import { AtSign } from "lucide-react";
import { notoSans } from "@/app/ui/fonts";
import Slider from "./slider";

export default function DomainSearch() {
  const [domain, setDomain] = useState("");

  const handleRedirect = () => {
    if (domain.trim() === "") {
      alert("Please enter a domain name.");
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_WHMCS_URL}/cart.php?a=add&domain=register&query=${encodeURIComponent(
      domain,
    )}`;
    window.location.href = url; // Redirect to the external website
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior (if inside a form)
      handleRedirect();
    }
  };

  return (
    <div className="flex h-[15rem] w-full flex-col px-8 py-9 sm:px-4 md:h-full md:gap-y-7 md:px-16">
      <div className="flex items-center gap-x-3">
        <div
          className={`mb-7 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-primary via-cyan-700 to-secondary p-3 md:mb-0`}
        >
          <AtSign className="h-6 min-h-6 text-neutral-300" />
        </div>
        <h4
          className={` ${notoSans.className} text-xl font-medium text-neutral-300`}
        >
          Domain Name Registration
        </h4>
      </div>
      <form onSubmit={handleRedirect} className="flex h-auto w-full gap-2">
        <Input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g mybusiness.co.bw"
          className="flex-grow border border-gray-500/70 bg-gray-800 text-neutral-200 placeholder:text-sm placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-300"
          style={{ fontSize: "1rem", textDecoration: "none" }}
        />
        <Button
          type="button"
          onClick={handleRedirect}
          className="min-w-28 rounded-lg bg-[#5e6368] py-1.5 font-sans text-base font-normal text-neutral-100 transition duration-300 ease-in-out md:min-w-40"
        >
          <Search />
          Search
        </Button>
      </form>
      <div className="mt-6 md:mt-auto">
        <Slider />
      </div>
    </div>
  );
}
