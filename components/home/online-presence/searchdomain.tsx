"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/domainsforminput";
import { Search } from "lucide-react";
import { TbAt } from "react-icons/tb";
import { AtSign, type LucideIcon } from "lucide-react";
import { notoSans } from "@/app/ui/fonts";
import Slider from "./slider";

export default function DomainSearch() {
  const [domain, setDomain] = useState("");

  const handleRedirect = () => {
    if (domain.trim() === "") {
      alert("Please enter a domain name.");
      return;
    }
    const url = `https://domains.bigzee.app/cart.php?a=add&domain=register&query=${encodeURIComponent(
      domain,
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
    <div className="flex w-full flex-col px-2 py-9 sm:px-4 md:px-16">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-lg bg-yellow-500/10 p-2">
          <AtSign className="h-6 w-6 text-yellow-500/75" />
        </div>
        <h4
          className={` ${notoSans.className} text-xl font-medium text-neutral-300`}
        >
          Domain Name Registration
        </h4>
      </div>
      <span className="mt-4 font-sans text-sm font-normal text-blue-400">
        * Securing the ideal domain name is a crucial first step in establishing
        your presence online.
      </span>
      <form onSubmit={handleRedirect} className="mt-2 flex w-full gap-2">
        <Input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g mybusiness.co.bw"
          className="flex-grow border border-gray-500/70 bg-gray-800 text-neutral-200 placeholder:text-sm placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-300"
          style={{ fontSize: "1rem" }}
        />
        <Button
          type="button"
          onClick={handleRedirect}
          className="min-w-40 rounded-lg border border-secondary bg-neutral-200 font-sans text-md font-medium text-secondary transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-blue-600"
        >
          <Search />
          Search
        </Button>
      </form>
      <Slider />
    </div>
  );
}
