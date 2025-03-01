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
    <div className="w-full bg-gradient-to-b from-secondary to-primary py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-20 max-w-6xl">
          <div className="col-span-7  space-y-3">
            <div className="">
              <div>
                <h1
                  className={` ${montserrat.className} text-5xl text-neutral-300 font-bold `}
                >
                  Domains
                </h1>
                <div className="flex items-center font-sans text-lg text-neutral-400 mt-2">
                  Search and register a domain in minutes e.g <TypingText />
                </div>
              </div>

              <form onSubmit={handleCheck} className="flex gap-2 mt-8">
                <div className="flex-1 flex gap-2 h-11">
                  <Input
                    type="text"
                    placeholder="Enter your domain name"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="flex-1 text-gray-700 text-lg h-full bg-white/90 border-neutral-400 placeholder:text-gray-400 "
                  />
                  <Select value={selectedTLD} onValueChange={setSelectedTLD}>
                    <SelectTrigger className="w-[120px] h-full text-gray-700 bg-white/90 border-neutral-400 outline-none focus:ring-0">
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
                  className="flex justify-center items-center text-base px-8 h-11 bg-gray-900/20  border border-thatgreen text-thatgreen font-medium "
                >
                  Check
                  <Search className="ml-1 h-4 w-4" />
                </Button>
              </form>

              <p className="text-sm text-neutral-400 mt-6 tracking-wider">
                Already bought a domain?{" "}
                <a href="#" className="text-neutral-300 underline">
                  Transfer it to BigZee
                </a>
              </p>

              <div className="space-y-4 mt-20">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {availableTLDs.map((tld) => (
                    <div key={tld.extension} className=" ">
                      <div className="text-neutral-300 text-lg font-medium">
                        .{tld.extension}
                      </div>
                      <div className="text-neutral-400 text-base">
                        ${tld.price}/year
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            {" "}
            <Image
              src="/img/email2.png"
              alt="Logo"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
