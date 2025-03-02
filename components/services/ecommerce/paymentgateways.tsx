import { ArrowUpRight, Edit3, RefreshCw, TicketIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

export default function PaymentGateways() {
  return (
    <div className="w-full border-b border-gray-400">
      <div className=" max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="col-span-6">
          <div className="flex items-center gap-x-8">
            <img src="/svg/ecommerce/visa.svg" alt="Visa" className="h-20" />
            <img
              src="/svg/ecommerce/mastercard.svg"
              alt="Mastercard"
              className="h-12"
            />
            <img
              src="/svg/ecommerce/paypal.svg"
              alt="Paypal"
              className="h-28"
            />
          </div>
          <h1
            className={` ${montserrat.className} text-4xl md:text-5xl font-bold text-gray-900 -mt-3`}
          >
            Payment Gateways
          </h1>
          <p className="font-sans text-gray-700 leading-relaxed mt-6">
            Shopify is a prominent player in the realm of e-commerce software.
            We greatly appreciate working with Shopify due to its ability to
            prioritise user experience while seamlessly managing all other
            aspects. Whether you operate a medium, large, or enterprise-level
            e-commerce store, Shopify provides a familiar and comfortable
            environment for your business.
          </p>
        </div>

        {/* Right Column - Dashboard */}
        <div className="relative col-span-5 col-start-8">
          <div className="bg-indigo-100 rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <Image
              src="/img/ecommerce/credit-cards.jpg"
              alt="Payment Gateways"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
