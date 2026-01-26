"use client";

import { useCurrency } from "@/contexts/currency-context";
import { montserrat } from "@/app/ui/fonts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const currencies = [
  { code: "BWP", name: "Botswana Pula", flagSrc: "/svg/flags/flag-bw.svg" },
  { code: "USD", name: "US Dollar", flagSrc: "/svg/flags/flag-us.svg" },
] as const;

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  const currentCurrency =
    currencies.find((c) => c.code === currency) || currencies[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`$ flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800`}
        aria-label="Select currency"
      >
        <Image
          src={currentCurrency.flagSrc}
          alt={`${currentCurrency.name} flag`}
          width={20}
          height={15}
          className="object-contain"
        />
        <span>{currentCurrency.code}</span>
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={` ${montserrat.className} z-50`}
      >
        {currencies.map((curr) => (
          <DropdownMenuItem
            key={curr.code}
            onClick={() => setCurrency(curr.code)}
            className="flex cursor-pointer items-center gap-3"
          >
            <Image
              src={curr.flagSrc}
              alt={`${curr.name} flag`}
              width={24}
              height={18}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-medium">{curr.code}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {curr.name}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
