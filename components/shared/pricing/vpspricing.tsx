"use client";

import { montserrat, notoSans } from "@/app/ui/fonts";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiCpu } from "react-icons/fi";
import { BsMemory } from "react-icons/bs";
import { TfiHarddrive } from "react-icons/tfi";
import { FaNetworkWired } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import Link from "next/link";

export interface VpsPlan {
  cpu: string;
  vCores: number;
  ram: string;
  storage: string;
  bandwidth: string;
  network: string;
  monthlyPrice: string;
  annualPrice: string;
  popular: boolean;
  monthlyUrl: string;
  annualUrl: string;
}

interface VpsPricingTableProps {
  plans: VpsPlan[];
}

const infoContainerStyles =
  "mx-auto flex items-center justify-center text-xl text-gray-600";
const propertyStyles = "flex flex-1 items-center justify-start";
const planValueStyles = `${montserrat.className} flex flex-1 items-center justify-end text-base font-semibold text-gray-800`;
const iconStyles = "mr-2 inline-block text-gray-500";
const spanStyles = "text-xs font-normal text-gray-700";

export default function VpsPricingTable({ plans }: VpsPricingTableProps) {
  return (
    <div className="x-padding w-full" id="pricing-vps">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-y-8 pt-20 md:pt-32">
        {/* Title */}
        <h1
          className={`${montserrat.className} text-center text-3xl font-bold text-gray-800 md:text-5xl`}
        >
          The Right Price for a VPS
        </h1>

        {/* Tabs */}
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="mx-auto mb-8 grid w-full max-w-44 grid-cols-2 bg-gray-800">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual">Annual</TabsTrigger>
          </TabsList>

          {/* Monthly Pricing */}
          <TabsContent value="monthly" className="space-y-8">
            {/* Desktop Table View */}
            <div className="hidden w-full md:block">
              <div className="overflow-hidden border border-gray-500 bg-white shadow-sm">
                {/* Table Header */}
                <div className="grid grid-cols-7 border-b border-gray-500 bg-gray-50 text-primary">
                  <div className="p-4 text-center font-medium">Plan</div>
                  <div className="p-4 text-center font-medium">vCores</div>
                  <div className="p-4 text-center font-medium">RAM</div>
                  <div className="p-4 text-center font-medium">Storage</div>
                  <div className="p-4 text-center font-medium">Bandwidth</div>
                  <div className="p-4 text-center font-medium">Price*</div>
                  <div className="p-4"></div>
                </div>

                {/* Table Rows */}
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="relative grid grid-cols-7 items-center border-b border-gray-500 last:border-b-0 hover:bg-gray-50"
                  >
                    {plan.popular && (
                      <div className="absolute flex h-full w-5 items-center justify-center bg-primary">
                        <span className="-rotate-90 transform whitespace-nowrap text-xs font-medium text-white">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.cpu}
                    </div>
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.vCores}
                    </div>
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.ram}
                    </div>
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.storage}
                      <span className="text-xs text-gray-500"> NVMe</span>
                    </div>
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.bandwidth}
                    </div>
                    <div className="p-4 text-center text-xl font-semibold text-primary">
                      {plan.monthlyPrice}/
                      <span className="text-sm font-normal text-gray-500">
                        month
                      </span>
                    </div>
                    <div className="flex items-center justify-center p-4">
                      <Link
                        href={plan.monthlyUrl}
                        className="rounded-lg bg-primary px-4 py-2 text-md text-white hover:bg-primary/80"
                      >
                        Order
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="space-y-6 md:hidden">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative min-w-[18rem] overflow-hidden rounded-2xl ring-1 ring-gray-300 ${plan.popular ? "ring-2 ring-primary" : ""}`}
                >
                  {/* Popular Badge for Mobile */}
                  {plan.popular && (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-white">
                      Popular
                    </div>
                  )}

                  <CardContent className="space-y-4 bg-neutral-50 p-6">
                    <div className="space-y-3 text-center">
                      <div
                        className={`${notoSans.className} text-2xl font-medium text-gray-800`}
                      >
                        {plan.cpu}
                      </div>
                      <div className="mb-4 mt-4 flex flex-col items-center justify-center">
                        <span className="text-2xl font-semibold text-primary">
                          {plan.monthlyPrice}
                        </span>
                        <span className="text-xs text-gray-500">BWP/mon</span>
                      </div>
                      <div className="space-y-3 border-t border-gray-300 px-2 pb-3 pt-5">
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <FiCpu className={iconStyles} />
                            <span className={spanStyles}>CPU</span>
                          </div>
                          <div className={planValueStyles}>
                            {plan.vCores} vCPU
                          </div>
                        </div>
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <BsMemory className={iconStyles} />
                            <span className={spanStyles}>RAM</span>
                          </div>
                          <div className={planValueStyles}>{plan.ram}</div>
                        </div>
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <TfiHarddrive className={iconStyles} />
                            <span className={spanStyles}>Disk</span>
                          </div>
                          <div className={planValueStyles}>{plan.storage}</div>
                        </div>
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <GoArrowSwitch className={iconStyles} />
                            <span className={spanStyles}>Traffic</span>
                          </div>
                          <div className={planValueStyles}>
                            {plan.bandwidth}
                          </div>
                        </div>
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <FaNetworkWired className={iconStyles} />
                            <span className={spanStyles}>Network</span>
                          </div>
                          <div className={planValueStyles}>{plan.network}</div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={plan.monthlyUrl}
                      className="inline-flex w-full items-center justify-center rounded-3xl bg-primary px-4 py-2.5 text-md text-white"
                    >
                      Order
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Annual Pricing */}
          <TabsContent value="annual" className="space-y-8">
            {/* Desktop Table View */}
            <div className="hidden w-full md:block">
              <div className="overflow-hidden border border-gray-500 bg-white shadow-sm">
                {/* Table Header */}
                <div className="grid grid-cols-7 border-b border-gray-500 bg-gray-50 text-primary">
                  <div className="p-4 text-center font-medium">Plan</div>
                  <div className="p-4 text-center font-medium">vCores</div>
                  <div className="p-4 text-center font-medium">RAM</div>
                  <div className="p-4 text-center font-medium">Storage</div>
                  <div className="p-4 text-center font-medium">Bandwidth</div>
                  <div className="p-4 text-center font-medium">Price*</div>
                  <div className="p-4"></div>
                </div>

                {/* Table Rows */}
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="relative grid grid-cols-7 items-center border-b border-gray-500 last:border-b-0 hover:bg-gray-50"
                  >
                    {plan.popular && (
                      <div className="absolute flex h-full w-5 items-center justify-center bg-primary">
                        <span className="-rotate-90 transform whitespace-nowrap text-xs font-medium text-white">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.cpu}
                    </div>
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.vCores}
                    </div>
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.ram}
                    </div>
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.storage}
                      <span className="text-xs text-gray-500"> NVMe</span>
                    </div>
                    <div className="p-4 text-center font-medium text-gray-800">
                      {plan.bandwidth}
                    </div>
                    <div className="p-4 text-center text-xl font-semibold text-primary">
                      {plan.annualPrice}/
                      <span className="text-sm font-normal text-gray-500">
                        year
                      </span>
                    </div>
                    <div className="flex items-center justify-center p-4">
                      <Link
                        href={plan.annualUrl}
                        className="rounded-lg bg-primary px-4 py-2 text-md text-white hover:bg-primary/80"
                      >
                        Order
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="space-y-6 md:hidden">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative min-w-[18rem] overflow-hidden rounded-2xl ring-1 ring-gray-300 ${plan.popular ? "ring-2 ring-primary" : ""}`}
                >
                  {/* Popular Badge for Mobile */}
                  {plan.popular && (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-white">
                      Popular
                    </div>
                  )}

                  <CardContent className="space-y-4 bg-neutral-50 p-6">
                    <div className="space-y-3 text-center">
                      <div
                        className={`${notoSans.className} text-2xl font-medium text-gray-800`}
                      >
                        {plan.cpu}
                      </div>
                      <div className="mb-4 mt-4 flex flex-col items-center justify-center">
                        <span className="text-2xl font-semibold text-primary">
                          {plan.annualPrice}
                        </span>
                        <span className="text-xs text-gray-500">BWP/year</span>
                      </div>
                      <div className="space-y-3 border-t border-gray-300 px-2 pb-3 pt-5">
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <FiCpu className={iconStyles} />
                            <span className={spanStyles}>CPU</span>
                          </div>
                          <div className={planValueStyles}>
                            {plan.vCores} vCPU
                          </div>
                        </div>
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <BsMemory className={iconStyles} />
                            <span className={spanStyles}>RAM</span>
                          </div>
                          <div className={planValueStyles}>{plan.ram}</div>
                        </div>
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <TfiHarddrive className={iconStyles} />
                            <span className={spanStyles}>Disk</span>
                          </div>
                          <div className={planValueStyles}>{plan.storage}</div>
                        </div>
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <GoArrowSwitch className={iconStyles} />
                            <span className={spanStyles}>Traffic</span>
                          </div>
                          <div className={planValueStyles}>
                            {plan.bandwidth}
                          </div>
                        </div>
                        <div className={infoContainerStyles}>
                          <div className={propertyStyles}>
                            <FaNetworkWired className={iconStyles} />
                            <span className={spanStyles}>Network</span>
                          </div>
                          <div className={planValueStyles}>{plan.network}</div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={plan.annualUrl}
                      className="inline-flex w-full items-center justify-center rounded-3xl bg-primary px-4 py-2.5 text-md text-white"
                    >
                      Order
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
