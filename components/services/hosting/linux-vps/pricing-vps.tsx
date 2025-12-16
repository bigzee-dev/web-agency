import { montserrat } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FiCpu } from "react-icons/fi";
import { BsMemory } from "react-icons/bs";
import { TfiHarddrive } from "react-icons/tfi";
import { FaNetworkWired } from "react-icons/fa";

const pricingData = [
  {
    cpu: "LVPS-1",
    vCores: 1,
    ram: "1GB",
    storage: "15GB",
    bandwidth: "1TB",
    price: "P85",
    popular: false,
  },
  {
    cpu: "LVPS-2",
    vCores: 1,
    ram: "2GB",
    storage: "30GB",
    bandwidth: "5TB",
    price: "P120",
    popular: false,
  },
  {
    cpu: "LVPS-4",
    vCores: 2,
    ram: "4GB",
    storage: "60GB",
    bandwidth: "10TB",
    price: "P180",
    popular: true,
  },
  {
    cpu: "LVPS-6",
    vCores: 3,
    ram: "6GB",
    storage: "90GB",
    bandwidth: "10TB",
    price: "P240",
    popular: false,
  },
  {
    cpu: "LVPS-8",
    vCores: 4,
    ram: "8GB",
    storage: "120GB",
    bandwidth: "20TB",
    price: "P300",
    popular: false,
  },
  {
    cpu: "LVPS-12",
    vCores: 6,
    ram: "12GB",
    storage: "180GB",
    bandwidth: "20TB",
    price: "P420",
    popular: false,
  },
];

const infoContainerStyles =
  "mx-auto flex w-[10rem] items-center justify-center text-xl text-gray-600";
const propertyStyles = "flex flex-1 items-center justify-start pl-2";

const planValueStyles =
  "pl-6 flex flex-1 items-center justify-start text-base text-gray-800";
const iconStyles = "mr-2 inline-block text-primary";
const spanStyles = "text-xs font-normal text-gray-500";

export default function PricingVpsTable() {
  return (
    <div className="x-padding w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-y-16 pb-12 pt-20 md:pt-32">
        {/* Title */}
        <h1
          className={` ${montserrat.className} text-center text-3xl font-bold text-gray-800 md:text-5xl`}
        >
          The Right Price for a VPS
        </h1>

        {/* Desktop Table View */}
        <div className="hidden w-full md:block">
          <div className="overflow-hidden border border-gray-400 bg-white shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-7 border-b border-gray-400 bg-gray-50 text-primary">
              <div className="p-4 text-center font-medium">Plan</div>
              <div className="p-4 text-center font-medium">vCores</div>
              <div className="p-4 text-center font-medium">RAM</div>
              <div className="p-4 text-center font-medium">Storage</div>
              <div className="p-4 text-center font-medium">Bandwidth</div>
              <div className="p-4 text-center font-medium">Price*</div>
              <div className="p-4"></div>
            </div>

            {/* Table Rows */}

            {pricingData.map((plan, index) => (
              <div
                key={index}
                className="relative grid grid-cols-7 items-center border-b border-gray-400 last:border-b-0 hover:bg-gray-50"
              >
                {plan.popular && (
                  <div
                    key={index}
                    className="absolute flex h-full w-5 items-center justify-center bg-primary"
                  >
                    <span className="-rotate-90 transform whitespace-nowrap text-xs font-medium text-white">
                      Popular
                    </span>
                  </div>
                )}
                <div className="p-4 text-center text-gray-800">{plan.cpu}</div>
                <div className="p-4 text-center text-gray-800">
                  {plan.vCores}
                </div>
                <div className="p-4 text-center text-gray-800">{plan.ram}</div>
                <div className="p-4 text-center text-gray-800">
                  {plan.storage}
                  <span className="text-xs text-gray-500"> NVMe</span>
                </div>
                <div className="p-4 text-center text-gray-800">
                  {plan.bandwidth}
                </div>
                <div className="p-4 text-center text-xl font-semibold text-primary">
                  {plan.price}/
                  <span className="text-sm font-normal text-gray-500">
                    month
                  </span>
                </div>
                <div className="flex items-center justify-center p-4">
                  <Button className="rounded-lg bg-primary px-6 text-white hover:bg-primary/80">
                    Order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="space-y-6 md:hidden">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className={`relative min-w-[18rem] overflow-hidden rounded-2xl ring-1 ring-gray-300 ${plan.popular ? "ring-primary" : ""}`}
            >
              {/* Popular Badge for Mobile */}
              {plan.popular && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-white">
                  Popular
                </div>
              )}

              <CardContent className="space-y-5 p-6">
                <div className="space-y-3 text-center">
                  <div
                    className={` ${montserrat.className} text-xl font-bold text-secondary`}
                  >
                    {plan.cpu}
                  </div>
                  <div className={infoContainerStyles}>
                    <div className={propertyStyles}>
                      <FiCpu className={iconStyles} />
                      <span className={spanStyles}>vCpu</span>
                    </div>
                    <div className={planValueStyles}>{plan.vCores} cores</div>
                  </div>
                  <div className={infoContainerStyles}>
                    <div className={propertyStyles}>
                      <BsMemory className={iconStyles} />
                      <span className={spanStyles}>Ram</span>
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
                      <FaNetworkWired className={iconStyles} />
                      <span className={spanStyles}>Traffic</span>
                    </div>
                    <div className={planValueStyles}>{plan.bandwidth}</div>
                  </div>

                  <div className="mt-4 text-2xl font-bold text-gray-800">
                    {plan.price}
                  </div>
                </div>

                <Button className="w-full bg-primary text-white">Order</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
