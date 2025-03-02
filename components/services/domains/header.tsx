"use client";

// import * as React from "react";
import { useState, FormEvent } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

              <form onSubmit={handleCheck} className="flex gap-2 mt-8">
                <div className="flex-1 flex gap-2 h-10">
                  <Input
                    type="text"
                    placeholder="Enter your domain name"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="flex-1 text-neutral-300 text-lg h-full bg-black/10 border-white/25 placeholder:text-neutral-500 "
                  />
                  <Select value={selectedTLD} onValueChange={setSelectedTLD}>
                    <SelectTrigger className="w-[120px] h-full text-neutral-500 bg-black/10 border-white/25 outline-none focus:ring-0">
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
                  className="font-sans flex justify-center items-center  px-8 h-10 bg-neutral-100  text-secondary text-base font-medium "
                >
                  Check
                  <Search className="ml-1 h-4 w-4" />
                </Button>
              </form>

              <p className="font-sans text-sm text-neutral-400 mt-6">
                Already bought a domain?{" "}
                <a href="#" className="text-neutral-300 underline">
                  Transfer it to BigZee
                </a>
              </p>

              <div className="space-y-4 mt-8 pt-6 border-t border-white/25">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {availableTLDs.map((tld) => (
                    <div key={tld.extension} className=" ">
                      <div className="text-neutral-300 font-medium">
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
              src="/img/hosting/hero.png"
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
