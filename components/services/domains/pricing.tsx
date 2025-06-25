import { Box, ChevronsRight, Diamond, Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  ];

  return (
    <div className="w-full max-w-5xl mx-auto pb-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 bg-[#0e5ca0] text-white rounded-t-2xl">
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
            className="flex flex-col items-center text-center p-6"
          >
            {/* <div className="bg-[#1a6cb3] rounded-full p-4 mb-4">
              {item.icon}
            </div> */}
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-100">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow className="hidden md:table-row">
              <TableHead className="w-1/4 text-center">Domain</TableHead>
              <TableHead className="w-1/4 text-center">Registration</TableHead>
              <TableHead className="w-1/4 text-center">Transfer</TableHead>
              <TableHead className="w-1/4 text-center">Renewal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {domainExtensions.map((domain, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <TableCell className="text-gray-700 font-sans text-base font-medium text-center">
                  {domain.extension}
                </TableCell>
                <TableCell className="text-center">
                  {domain.registration.discounted ? (
                    <div>
                      <span className="line-through text-gray-500 mr-2">
                        {domain.registration.original}
                      </span>
                      <span className="text-[#0e5ca0] font-medium">
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
    </div>
  );
}
