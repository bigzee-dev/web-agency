"use client";

// import * as React from "react";
import { useState, FormEvent } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/domainsforminput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/domainsformselect";
import Image from "next/image";
import TypingText from "@/components/home/ourservices/typingtext";
import { montserrat } from "@/app/ui/fonts";

interface DomainTLD {
  extension: string;
  price: number;
}

const availableTLDs: DomainTLD[] = [
  { extension: "com", price: 18.95 },
  { extension: "co.zw", price: 5.0 },
  { extension: "co.za", price: 6.88 },
  { extension: "africa", price: 8.95 },
  { extension: "co.bw", price: 18.95 },
  { extension: "app", price: 5.0 },
  { extension: "online", price: 6.88 },
  { extension: "net", price: 8.95 },
];

export default function Header() {
  const [domain, setDomain] = useState("");
  const [selectedTLD, setSelectedTLD] = useState("com");

  const handleCheck = (e: FormEvent) => {
    e.preventDefault();
    const searchUrl = `https://domains.bigzee.app/cart.php?a=add&domain=register&query=${domain}.${selectedTLD}`;
    window.location.href = searchUrl;
  };
  return (
    <div className="w-full bg-secondary py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-10 max-full">
          <div className="col-span-6">
            <div className="pr-12">
              <div>
                <h1
                  className={` ${montserrat.className} text-6xl text-neutral-100 font-bold `}
                >
                  Domains
                </h1>
                <div className="flex items-center font-sans text-lg text-neutral-400 mt-2">
                  Search and register a domain in minutes e.g <TypingText />
                </div>
              </div>

              <form
                onSubmit={handleCheck}
                className="relative isolate overflow-hidden flex gap-3 mt-5 py-4 px-4 border-y border-white/25 bg-background"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl"
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="aspect-[900/300] w-[20rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-35"
                  />
                </div>
                <div className="flex-1 flex gap-3 h-10">
                  <Input
                    type="text"
                    placeholder="Enter your domain name"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="flex-1 text-secondary text-lg h-full bg-neutral-200/50 border border-gray-400/70 placeholder:text-gray-500  placeholder:font-light"
                  />
                  <Select value={selectedTLD} onValueChange={setSelectedTLD}>
                    <SelectTrigger className="w-[120px] h-full text-secondary bg-neutral-200/50 border border-gray-400/70">
                      <SelectValue defaultValue="com" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTLDs.map((tld) => (
                        <SelectItem
                          className="text-gray-600"
                          key={tld.extension}
                          value={tld.extension}
                        >
                          .{tld.extension}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="font-sans flex justify-center items-center  px-8 h-10 bg-primary text-neutral-100 text-md font-medium outline outline-1 outline-offset-1 outline-primary"
                >
                  Check
                  <Search className="ml-1 h-4 w-4" />
                </Button>
              </form>

              <p className="font-sans text-sm text-neutral-400 mt-2">
                Already bought a domain?{" "}
                <a href="#" className="text-neutral-300/85 underline">
                  Transfer it to BigZee
                </a>
              </p>

              <div className="space-y-4 pt-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pl-8">
                  {availableTLDs.map((tld) => (
                    <div key={tld.extension} className=" ">
                      <div className="text-thatgreen font-medium">
                        .{tld.extension}
                      </div>
                      <div className="font-sans text-neutral-400 text-md">
                        P{tld.price}/year
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 col-start-8">
            {" "}
            <Image
              src="/img/domains/domains-hero.png"
              alt="Logo"
              width={1000}
              height={1000}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
