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
      extension: ".africa",
      registration: { original: "$14.95", discounted: "$8.95" },
      transfer: "$14.95",
      renewal: "$14.95",
    },
    {
      extension: ".agency",
      registration: { original: "$21.95", discounted: "$8.95" },
      transfer: "$21.95",
      renewal: "$21.95",
    },
    {
      extension: ".apartments",
      registration: { original: "$49.95", discounted: null },
      transfer: "$47.95",
      renewal: "$49.95",
    },
    {
      extension: ".art",
      registration: { original: "$15.95", discounted: "$9.95" },
      transfer: "$15.95",
      renewal: "$15.95",
    },
    {
      extension: ".biz",
      registration: { original: "$20.95", discounted: "$10.95" },
      transfer: "$20.95",
      renewal: "$20.95",
    },
    {
      extension: ".cc",
      registration: { original: "£36.99", discounted: "£33.29" },
      transfer: "£36.99",
      renewal: "£36.99",
    },
    {
      extension: ".ch",
      registration: { original: "£22.99", discounted: "£20.69" },
      transfer: "£22.99",
      renewal: "£22.99",
    },
    {
      extension: ".art",
      registration: { original: "$15.95", discounted: "$9.95" },
      transfer: "$15.95",
      renewal: "$15.95",
    },
    {
      extension: ".biz",
      registration: { original: "$20.95", discounted: "$10.95" },
      transfer: "$20.95",
      renewal: "$20.95",
    },
    {
      extension: ".cc",
      registration: { original: "£36.99", discounted: "£33.29" },
      transfer: "£36.99",
      renewal: "£36.99",
    },
    {
      extension: ".ch",
      registration: { original: "£22.99", discounted: "£20.69" },
      transfer: "£22.99",
      renewal: "£22.99",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl pb-12 pt-4">
      <h2 className={sectionHeadings}>Available Tld&apos;s</h2>
      {/* Header Section */}
      <div className="mt-12 grid grid-cols-1 rounded-t-2xl bg-slate-700 text-white md:grid-cols-4">
        {[
          {
            icon: <Box className="h-6 w-6" />,
            title: "Extensions",
            description: "TLD, gTLD, ccTLD, Etc.",
          },
          {
            icon: <Users className="h-6 w-6" />,
            title: "Registration",
            description: "For new registration",
          },
          {
            icon: <ChevronsRight className="h-6 w-6" />,
            title: "Transfer",
            description: "To tranfer from other registrar",
          },
          {
            icon: <Diamond className="h-6 w-6" />,
            title: "Renewal",
            description: "To renew your Domain",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 text-center"
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
              <TableHead className="w-1/4 text-center text-gray-600">
                Domain
              </TableHead>
              <TableHead className="w-1/4 text-center text-gray-600">
                Registration
              </TableHead>
              <TableHead className="w-1/4 text-center text-gray-600">
                Transfer
              </TableHead>
              <TableHead className="w-1/4 text-center text-gray-600">
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
                      <span className="font-medium text-[#0e5ca0]">
                        {domain.registration.discounted}
                      </span>
                    </div>
                  ) : (
                    domain.registration.original
                  )}
                </TableCell>
                <TableCell className="text-center text-gray-800">
                  {domain.transfer}
                </TableCell>
                <TableCell className="text-center text-gray-900">
                  {domain.renewal}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Search Bar */}
      <div className="mx-auto mt-16 flex w-full max-w-xl items-center gap-2 rounded-xl border-2 border-gray-800 bg-neutral-100 p-3">
        <Input
          type="text"
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
      </div>
    </div>
  );
}
