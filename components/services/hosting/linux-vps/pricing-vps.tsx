import { montserrat } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pricingData = [
  {
    cpu: "Intel® Xeon®",
    vCores: 1,
    ram: "1GB",
    storage: "20GB",
    bandwidth: "1TB",
    price: "P95",
    popular: false,
  },
  {
    cpu: "Intel® Xeon®",
    vCores: 1,
    ram: "2GB",
    storage: "40GB",
    bandwidth: "1TB",
    price: "P130",
    popular: false,
  },
  {
    cpu: "Intel® Xeon®",
    vCores: 2,
    ram: "4GB",
    storage: "60GB",
    bandwidth: "3TB",
    price: "P190",
    popular: true,
  },
  {
    cpu: "Intel® Xeon®",
    vCores: 3,
    ram: "6GB",
    storage: "90GB",
    bandwidth: "5TB",
    price: "P250",
    popular: false,
  },
  {
    cpu: "Intel® Xeon®",
    vCores: 4,
    ram: "8GB",
    storage: "120GB",
    bandwidth: "10TB",
    price: "P320",
    popular: false,
  },
];

export default function PricingVpsTable() {
  return (
    <div className="x-padding w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-y-16 py-16">
        {/* Title */}
        <h1
          className={` ${montserrat.className} text-center text-3xl font-bold text-gray-800 md:text-5xl`}
        >
          The Right Price for a VPS
        </h1>

        {/* Desktop Table View */}
        <div className="hidden w-full md:block">
          <div className="overflow-hidden border border-secondary/30 bg-white shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-7 border-b border-secondary/30 bg-gray-50 text-primary">
              <div className="p-4 text-center font-medium">CPU</div>
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
                className="relative grid grid-cols-7 items-center border-b border-secondary/30 last:border-b-0 hover:bg-gray-50"
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
        <div className="space-y-4 md:hidden">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${plan.popular ? "ring-2 ring-purple-600" : ""}`}
            >
              {/* Popular Badge for Mobile */}
              {plan.popular && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                  Popular
                </div>
              )}

              <CardContent className="space-y-4 p-6">
                <div className="space-y-2 text-center">
                  <div className="text-lg font-medium text-gray-700">
                    {plan.cpu}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {plan.vCores}
                  </div>
                  <div className="text-gray-600">{plan.ram}</div>
                  <div className="text-gray-600">{plan.storage}</div>
                  <div className="text-gray-600">{plan.bandwidth}</div>
                  <div className="mt-4 text-xl font-semibold text-purple-600">
                    {plan.price}
                  </div>
                </div>

                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                  Order
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
