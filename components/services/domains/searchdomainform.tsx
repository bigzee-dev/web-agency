"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/domainsformselect";
import { Input } from "@/components/ui/domainsforminput";
import { IoSearch } from "react-icons/io5";
import { useCurrency } from "@/contexts/currency-context";

export default function SearchDomainForm() {
  const [domain, setDomain] = React.useState("");
  const [tld, setTld] = React.useState(".com");
  const { currency } = useCurrency();
  const currencyId = currency === "USD" ? 2 : 1;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (domain.trim() === "") {
      alert("Please enter a domain name.");
      return;
    }

    const fullDomain = `${domain}${tld}`;
    const url = `${process.env.NEXT_PUBLIC_WHMCS_URL}/cart.php?a=add&domain=register&query=${encodeURIComponent(
      fullDomain,
    )}&currency=${currencyId}`;
    window.open(url); // Open in a new browser tab
  };

  return (
    <div className="mx-auto mt-4 w-full max-w-3xl bg-neutral-200 px-2 py-5 md:px-5">
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-x-2 md:gap-x-4"
      >
        <div className="relative flex-1">
          <div className="absolute -top-[13px] left-[50px] bg-neutral-200 px-1">
            <span className="hidden px-1 text-xs text-primary md:block">
              Enter desired domain name <span className="text-primary">*</span>
            </span>
            <span className="block px-1 text-xs text-primary md:hidden">
              Enter domain name <span className="text-primary">*</span>
            </span>
          </div>
          <div className="flex overflow-hidden rounded-md border-2 border-primary">
            <Input
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="flex-1 border-0 text-gray-700 shadow-none focus-visible:ring-0"
              placeholder=""
            />
            <div className="text-grey-700 border-l border-gray-400">
              <Select value={tld} onValueChange={setTld}>
                <SelectTrigger className="w-[85px] border-0 shadow-none focus:ring-0 md:w-[100px]">
                  <SelectValue defaultValue=".com" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=".com">.com</SelectItem>
                  <SelectItem value=".net">.net</SelectItem>
                  <SelectItem value=".org">.org</SelectItem>
                  <SelectItem value=".online">.online</SelectItem>
                  <SelectItem value=".co">.co</SelectItem>
                  <SelectItem value=".app">.app</SelectItem>
                  <SelectItem value=".xyz">.xyz</SelectItem>
                  <SelectItem value=".store">.store</SelectItem>
                  <SelectItem value=".tech">.tech</SelectItem>
                  <SelectItem value=".io">.io</SelectItem>
                  <SelectItem value=".co.za">.co.za</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className={`h-full w-12 rounded-lg border-2 border-primary bg-primary text-white md:w-24`}
        >
          <span className="hidden md:block">Search</span>
          <span className="block md:hidden">
            <IoSearch size={20} />
          </span>
        </Button>
      </form>
    </div>
  );
}
