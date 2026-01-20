import Link from "next/link";
import { VpsPlan } from "./vpspricing";

interface DesktopTableViewProps {
  plans: VpsPlan[];
  billingType: "monthly" | "annual";
}

export default function DesktopTableView({
  plans,
  billingType,
}: DesktopTableViewProps) {
  const isMonthly = billingType === "monthly";

  return (
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
              {isMonthly ? plan.monthlyPrice : plan.annualPrice}/
              <span className="text-sm font-normal text-gray-500">
                {isMonthly ? "month" : "year"}
              </span>
            </div>
            <div className="flex items-center justify-center p-4">
              <Link
                href={isMonthly ? plan.monthlyUrl : plan.annualUrl}
                className="rounded-lg bg-primary px-4 py-2 text-md text-white hover:bg-primary/80"
              >
                Order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
