"use client";

import * as React from "react";
import { Box, ChevronsRight, Diamond, Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DomainPricingTable() {
  const domainExtensions = [
    {
      extension: ".com",
      registration: { original: "P299.00", discounted: "P247.00" },
      transfer: "P247.00",
      renewal: "P257.00",
    },
    {
      extension: ".net",
      registration: { original: "P319.00", discounted: "P275.00" },
      transfer: "P275.00",
      renewal: "P349.00",
    },
    {
      extension: ".org",
      registration: { original: "P271.00", discounted: null },
      transfer: "P271.00",
      renewal: "P334.00",
    },
    {
      extension: ".online",
      registration: { original: "P616.00", discounted: null },
      transfer: "P616.00",
      renewal: "P616.00",
    },
    {
      extension: ".co",
      registration: { original: "P566.00", discounted: null },
      transfer: "P566.00",
      renewal: "P685.00",
    },
    {
      extension: ".app",
      registration: { original: "P375.00", discounted: "P337.00" },
      transfer: "P337.00",
      renewal: "P412.00",
    },
    {
      extension: ".xyz",
      registration: { original: "P282.00", discounted: null },
      transfer: "P282.00",
      renewal: "P350.00",
    },
    {
      extension: ".store",
      registration: { original: "P962.00", discounted: null },
      transfer: "P962.00",
      renewal: "P962.00",
    },
    {
      extension: ".tech",
      registration: { original: "P1132.00", discounted: null },
      transfer: "P1132.00",
      renewal: "P1132.00",
    },
    {
      extension: ".io",
      registration: { original: "P962.00", discounted: null },
      transfer: "P962.00",
      renewal: "P1145.00",
    },
    {
      extension: ".co.za",
      registration: { original: "P97.00", discounted: null },
      transfer: "P97.00",
      renewal: "P116.00",
    },
  ];

  const [domain, setDomain] = React.useState("");

  return (
    <div className="x-padding mx-auto w-full max-w-5xl pb-12 pt-4" id="pricing">
      <h2 className={sectionHeadings}>Available Tld&apos;s</h2>
      {/* Header Section */}
      <div className="mt-12 grid grid-cols-2 rounded-t-2xl bg-gray-800 text-white md:grid-cols-4">
        {[
          {
            icon: <Box className="h-6 w-6" />,
            title: "Extensions",
            description: "TLD, gTLD, ccTLD, Etc.",
          },
          {
            icon: <Users className="h-6 w-6" />,
            title: "Registration",
            description: "Register Domain",
          },
          {
            icon: <ChevronsRight className="h-6 w-6" />,
            title: "Transfer",
            description: "Transfer from other Registrar",
            hideOnMd: true,
          },
          {
            icon: <Diamond className="h-6 w-6" />,
            title: "Renewal",
            description: "Renew your Domain",
            hideOnMd: true,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 text-center ${
              item.hideOnMd ? "hidden md:block" : ""
            }`}
          >
            <h3 className="mb-1 text-xl font-semibold text-neutral-100">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-300">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow className="hidden md:table-row">
              <TableHead className="w-1/4 text-center text-secondary">
                Domain
              </TableHead>
              <TableHead className="w-1/4 text-center text-secondary">
                Registration
              </TableHead>
              <TableHead className="w-1/4 text-center text-secondary">
                Transfer
              </TableHead>
              <TableHead className="w-1/4 text-center text-secondary">
                Renewal
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {domainExtensions.map((domain, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <TableCell className="text-center font-sans text-base font-medium text-gray-700">
                  {domain.extension}
                </TableCell>
                <TableCell className="text-center">
                  {domain.registration.discounted ? (
                    <div>
                      <span className="mr-2 text-gray-500 line-through">
                        {domain.registration.original}
                      </span>
                      <span className="font-medium text-primary">
                        {domain.registration.discounted}
                      </span>
                    </div>
                  ) : (
                    domain.registration.original
                  )}
                </TableCell>
                <TableCell className="hidden text-center text-gray-800 md:table-cell">
                  {domain.transfer}
                </TableCell>
                <TableCell className="hidden text-center text-gray-900 md:table-cell">
                  {domain.renewal}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Search Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (domain.trim() === "") {
            alert("Please enter a domain name.");
            return;
          }
          const fullDomain = `${domain}`;
          const url = `${process.env.NEXT_PUBLIC_WHMCS_URL}/cart.php?a=add&domain=register&query=${encodeURIComponent(
            fullDomain,
          )}`;
          setDomain("");
          window.open(url);
        }}
        className="mx-auto mt-16 flex w-full max-w-xl items-center gap-2 rounded-xl border-2 border-gray-800 bg-neutral-100 p-3"
      >
        <Input
          id="pricing-domain"
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Search for domain"
          className="border border-gray-400 bg-background placeholder:text-sm placeholder:text-gray-500"
        />
        <Button
          type="submit"
          variant="default"
          className="rounded-lg bg-gray-800 text-neutral-200"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
