"use client";

import { montserrat } from "@/app/ui/fonts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DesktopTableView from "./vps-desktop-table";
import MobileCardView from "./vps-mobile-cards";

export interface VpsPlan {
  cpu: string;
  vCores: number;
  ram: string;
  storage: string;
  bandwidth: string;
  network: string;
  monthlyPrice: { BWP: string; USD: string };
  annualPrice: { BWP: string; USD: string };
  popular: boolean;
  monthlyUrl: string;
  annualUrl: string;
}

interface VpsPricingTableProps {
  plans: VpsPlan[];
}

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
            <DesktopTableView plans={plans} billingType="monthly" />
            <MobileCardView plans={plans} billingType="monthly" />
          </TabsContent>

          {/* Annual Pricing */}
          <TabsContent value="annual" className="space-y-8">
            <DesktopTableView plans={plans} billingType="annual" />
            <MobileCardView plans={plans} billingType="annual" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
