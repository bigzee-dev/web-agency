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

export default function SearchDomainForm() {
  const [domain, setDomain] = React.useState("");
  const [tld, setTld] = React.useState(".com");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle domain search logic here
    console.log(`Searching for ${domain}${tld}`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-neutral-200 px-4 py-5 mt-4">
      <form onSubmit={handleSearch} className="flex items-center gap-4">
        <div className="relative flex-1">
          <div className="absolute -top-[13px] left-[50px] px-1 bg-neutral-200">
            <span className="text-primary text-xs px-1">
              Enter desired domain name <span className="text-primary">*</span>
            </span>
          </div>
          <div className="flex border-2 border-primary rounded-md overflow-hidden">
            <Input
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="flex-1 text-gray-700 border-0 focus-visible:ring-0 shadow-none"
              placeholder=""
            />
            <div className="text-grey-700 border-l border-gray-400">
              <Select value={tld} onValueChange={setTld}>
                <SelectTrigger className="w-[100px] border-0 focus:ring-0 shadow-none">
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
          className="bg-primary text-neutral-100 hover:bg-purple-700 px-8"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
