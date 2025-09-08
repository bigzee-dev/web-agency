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
import { primaryButton } from "@/app/ui/customTailwindClasses";

export default function SearchDomainForm() {
  const [domain, setDomain] = React.useState("");
  const [tld, setTld] = React.useState(".com");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle domain search logic here
    console.log(`Searching for ${domain}${tld}`);
  };

  return (
    <div className="mx-auto mt-4 w-full max-w-3xl bg-neutral-200 px-5 py-5">
      <form onSubmit={handleSearch} className="flex items-center gap-4">
        <div className="relative flex-1">
          <div className="absolute -top-[13px] left-[50px] bg-neutral-200 px-1">
            <span className="px-1 text-xs text-primary">
              Enter desired domain name <span className="text-primary">*</span>
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
                <SelectTrigger className="w-[100px] border-0 shadow-none focus:ring-0">
                  <SelectValue defaultValue=".com" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=".com">.com</SelectItem>
                  <SelectItem value=".net">.net</SelectItem>
                  <SelectItem value=".org">.org</SelectItem>
                  <SelectItem value=".io">.io</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className={`h-full w-24 rounded-lg bg-primary text-white`}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
