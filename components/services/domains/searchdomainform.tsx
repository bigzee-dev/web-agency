"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function DomainSearch() {
  const [domain, setDomain] = React.useState("");
  const [tld, setTld] = React.useState(".com");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle domain search logic here
    console.log(`Searching for ${domain}${tld}`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex items-center gap-4">
        <div className="relative flex-1">
          <div className="absolute -top-[10px] left-[50px] px-1 bg-white">
            <span className="text-purple-700 text-sm">
              Enter desired domain name{" "}
              <span className="text-purple-700">*</span>
            </span>
          </div>
          <div className="flex border-2 border-purple-700 rounded-md overflow-hidden">
            <Input
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="flex-1 border-0 focus-visible:ring-0 shadow-none"
              placeholder="yourow"
            />
            <div className="border-l border-gray-200">
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
          className="bg-purple-600 hover:bg-purple-700 px-8"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
