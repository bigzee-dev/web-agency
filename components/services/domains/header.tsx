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
            <div className="space-y-8">
              <div>
                <h1
                  className={` ${montserrat.className} text-4xl text-neutral-300 font-bold `}
                >
                  Domains
                </h1>
                <p className="font-sans text-3xl text-neutral-400 mt-2">
                  Search and register a domain in minutes
                </p>
              </div>

              <form onSubmit={handleCheck} className="flex gap-2">
                <div className="flex-1 flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter your domain name"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="flex-1 text-gray-700 text-lg h-12 bg-white/90 border-neutral-400 placeholder:text-gray-500 "
                  />
                  <Select value={selectedTLD} onValueChange={setSelectedTLD}>
                    <SelectTrigger className="w-[120px] h-12 text-gray-700 bg-white/90 border-neutral-400 outline-none focus:ring-0">
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
                  className="flex justify-center h-12 px-8 bg-[#33bff2] text-gray-800 text-md font-medium"
                >
                  Check
                  <Search className="ml-1 h-4 w-4" />
                </Button>
              </form>

              <p className="text-sm text-neutral-400">
                Already bought a domain?{" "}
                <a href="#" className="text-neutral-300 underline">
                  Transfer it to BigZee
                </a>
              </p>

              <div className="space-y-4">
                <TypingText />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {availableTLDs.map((tld) => (
                    <div key={tld.extension} className=" ">
                      <div className="text-neutral-300 text-lg font-medium">
                        .{tld.extension}
                      </div>
                      <div className="text-neutral-400">${tld.price}/year</div>
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
