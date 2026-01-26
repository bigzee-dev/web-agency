"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FiCpu } from "react-icons/fi";
import { BsMemory } from "react-icons/bs";
import { TfiHarddrive } from "react-icons/tfi";
import { FaNetworkWired } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { notoSans, montserrat, merriweather } from "@/app/ui/fonts";
import { VpsPlan } from "./vpspricing";
import { useCurrency } from "@/contexts/currency-context";
import clsx from "clsx";

interface MobileCardViewProps {
  plans: VpsPlan[];
  billingType: "monthly" | "annual";
}

const infoContainerStyles =
  "mx-auto flex items-center justify-center text-xl text-gray-600";
const propertyStyles = "flex flex-1 items-center justify-start";
const planValueStyles = `${montserrat.className} flex flex-1 items-center justify-end text-base font-semibold text-gray-800`;
const iconStyles = "mr-2 inline-block text-gray-500";
const spanStyles = "text-xs font-normal text-gray-700";

export default function MobileCardView({
  plans,
  billingType,
}: MobileCardViewProps) {
  const isMonthly = billingType === "monthly";
  const { currency } = useCurrency();
  const currencyId = currency === "USD" ? 2 : 1;
  const currencySymbol = currency === "USD" ? "$" : "P";

  return (
    <div className="space-y-6 md:hidden">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`relative mx-auto w-4/5 min-w-[18rem] overflow-hidden rounded-2xl ring-1 ring-gray-300 ${plan.popular ? "ring-2 ring-primary" : ""}`}
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
                  <span
                    className={clsx(
                      "mr-[0.1rem]",
                      currency === "USD" && merriweather.className,
                      currency === "USD" && "text-[1.3rem]",
                    )}
                  >
                    {currencySymbol}
                  </span>
                  {isMonthly
                    ? plan.monthlyPrice[currency]
                    : plan.annualPrice[currency]}
                </span>
                <span className="text-xs text-gray-500">
                  {currency}/{isMonthly ? "mon" : "year"}
                </span>
              </div>
              <div className="space-y-3 border-t border-gray-300 px-2 pb-3 pt-5">
                <div className={infoContainerStyles}>
                  <div className={propertyStyles}>
                    <FiCpu className={iconStyles} />
                    <span className={spanStyles}>CPU</span>
                  </div>
                  <div className={planValueStyles}>{plan.vCores} vCPU</div>
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
                  <div className={planValueStyles}>{plan.bandwidth}</div>
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
              href={` ${isMonthly ? plan.monthlyUrl : plan.annualUrl}&currency=${currencyId} `}
              className="inline-flex w-full items-center justify-center rounded-3xl bg-primary px-4 py-2.5 text-md text-white"
            >
              Order
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
