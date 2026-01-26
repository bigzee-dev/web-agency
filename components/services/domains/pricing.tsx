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
import { useCurrency } from "@/contexts/currency-context";
import clsx from "clsx";
import { merriweather } from "@/app/ui/fonts";
import { domainExtensions } from "./extensionsdata";

export default function DomainPricingTable() {
  const { currency } = useCurrency();
  const currencyId = currency === "USD" ? 2 : 1;
  const currencySymbol = currency === "USD" ? "$" : "P";

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
                  {domain.registration[currency].discounted ? (
                    <div>
                      <span className="mr-2 text-gray-500 line-through">
                        <span
                          className={clsx(
                            "mr-[0.25rem]",
                            currency === "USD" && merriweather.className,
                            currency === "USD" && "text-[0.85rem]",
                          )}
                        >
                          {currencySymbol}
                        </span>
                        {domain.registration[currency].original}
                      </span>
                      <span className="font-medium text-primary">
                        <span
                          className={clsx(
                            "mr-[0.25rem]",
                            currency === "USD" && merriweather.className,
                            currency === "USD" && "text-[0.85rem]",
                          )}
                        >
                          {currencySymbol}
                        </span>
                        {domain.registration[currency].discounted}
                      </span>
                    </div>
                  ) : (
                    <span>
                      <span
                        className={clsx(
                          "mr-[0.25rem]",
                          currency === "USD" && merriweather.className,
                          currency === "USD" && "text-[0.85rem]",
                        )}
                      >
                        {currencySymbol}
                      </span>
                      {domain.registration[currency].original}
                    </span>
                  )}
                </TableCell>
                <TableCell className="hidden text-center text-gray-800 md:table-cell">
                  <span
                    className={clsx(
                      "mr-[0.25rem]",
                      currency === "USD" && merriweather.className,
                      currency === "USD" && "text-[0.85rem]",
                    )}
                  >
                    {currencySymbol}
                  </span>
                  {domain.transfer[currency]}
                </TableCell>
                <TableCell className="hidden text-center text-gray-900 md:table-cell">
                  <span
                    className={clsx(
                      "mr-[0.25rem]",
                      currency === "USD" && merriweather.className,
                      currency === "USD" && "text-[0.85rem]",
                    )}
                  >
                    {currencySymbol}
                  </span>
                  {domain.renewal[currency]}
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
          )}&currency=${currencyId}`;
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
