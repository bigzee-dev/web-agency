import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";

export default function EcommerceHeeader() {
  return (
    <div className="relative w-full h-[35rem] overflow-hidden">
      {/* Background image */}
      <Image
        src="/img/ecommerce/cart-laptop.jpg"
        alt="Background image of person using mobile device"
        fill
        className="object-cover object-right"
        priority
      />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/30 grid grid-cols-3">
        <div className="col-span-1 bg-secondary"></div>
        <div className="col-span-1 bg-gradient-to-r from-secondary to-transparent"></div>
        <div className="col-span-1 bg-transparent"></div>
      </div>
      <div className="absolute inset-0 max-w-7xl mx-auto py-12">
        {/* Ecommerce badge */}
        <div className="inline-block">
          <span className="font-semibold text-neutral-300 tracking-widest">
            ECOMMERCE
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={` ${montserrat.className} max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mt-3 leading-tight`}
        >
          We Build Powerful E-Commerce Websites That Help You Sell More and Grow
          Faster
        </h1>

        {/* Scroll down indicator */}
        <div className="absolute bottom-12 left-1/4 transform -translate-x-1/2 flex flex-col items-center">
          <div className="border-2 border-white/70 rounded-full w-8 h-12 flex items-center justify-center mb-2">
            <ChevronDown className="text-white w-5 h-5 animate-bounce" />
          </div>
          <span className="font-sans text-white text-sm">
            Scroll Down to learn more
          </span>
        </div>
      </div>
    </div>
  );
}
