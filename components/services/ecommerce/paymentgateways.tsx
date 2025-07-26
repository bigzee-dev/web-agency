import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

export default function PaymentGateways() {
  return (
    <div className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 pb-4 pt-0 md:grid-cols-12 lg:gap-16">
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
            className={` ${montserrat.className} -mt-3 text-4xl font-bold text-gray-900 md:text-5xl`}
          >
            Payment Gateways
          </h1>
          <p className="mt-6 font-sans leading-relaxed text-gray-700">
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
          <div className="relative overflow-hidden">
            <Image
              src="/img/ecommerce/credit-cards.jpg"
              alt="Payment Gateways"
              width={1000}
              height={1000}
              className="grayscale filter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
