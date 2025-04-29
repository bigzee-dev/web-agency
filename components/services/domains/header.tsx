"use client";

// import * as React from "react";
import { useState, FormEvent } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/domainsforminput";
import SearchDomainForm from "./searchdomainform";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/domainsformselect";
import Image from "next/image";
import TypingText from "@/components/home/ourservices/typingtext";
import TldSlider from "./tldslider";
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
    <div className="relative w-full bg-purple-900/50">
      <div className="inset-0 w-full bg-gradient-to-r from-secondary via-secondary/60 to-transparent pt-14 pb-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-10 max-full">
            <div className="col-span-6">
              {/* Domains badge */}
              <div className="inline-block bg-neutral-100 px-6 py-2 rounded-md mb-6">
                <span className="font-bold text-primary text-2xl tracking-wide">
                  Domains
                </span>
              </div>
              {/* Main heading */}
              <h1
                className={` ${montserrat.className} max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 leading-tight`}
              >
                Search for and register a domain in minutes
              </h1>
              {/* <div className="flex items-center font-sans text-lg text-neutral-300 mt-2">
                    <p>Search and register a domain in minutes </p>
                    <span className="text-sm text-neutral-400 ml-2 mr-1">
                      {" "}
                      e.g:{" "}
                    </span>{" "}
                    <TypingText />
                  </div> */}

              {/* <form
                onSubmit={handleCheck}
                className="flex gap-3 mt-5 py-4 px-4 border-y border-white/25 bg-background"
              >
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
              </form> */}
              <SearchDomainForm />
              <p className="font-sans text-sm text-neutral-200 mt-3">
                Already bought a domain?{" "}
                <a href="#" className="text-neutral-200/85 underline">
                  Transfer it to BigZee
                </a>
              </p>
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
        <TldSlider />
      </div>
    </div>
  );
}
