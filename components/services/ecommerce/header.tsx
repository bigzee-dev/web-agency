import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";

export default function EcommerceHeeader() {
  return (
    <div className="relative h-[35rem] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/img/ecommerce/cart-laptop.jpg"
        alt="Background image of person using mobile device"
        fill
        className="object-cover object-right"
        priority
      />

      {/* Content overlay */}
      <div className="absolute inset-0 grid grid-cols-3 bg-black/30">
        <div className="col-span-1 bg-secondary"></div>
        <div className="col-span-1 bg-gradient-to-r from-secondary to-transparent"></div>
        <div className="col-span-1 bg-transparent"></div>
      </div>
      <div className="absolute inset-0 mx-auto max-w-7xl py-16">
        {/* Ecommerce badge */}
        <div className="inline-block">
          <span className="font-semibold tracking-widest text-neutral-300">
            ECOMMERCE
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={` ${montserrat.className} mt-3 max-w-3xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
        >
          We Build Powerful E-Commerce Websites That Help You Sell More and Grow
          Faster
        </h1>

        {/* Scroll down indicator */}
        <div className="absolute bottom-12 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
          <div className="mb-2 flex h-12 w-8 items-center justify-center rounded-full border-2 border-white/70">
            <ChevronDown className="h-5 w-5 animate-bounce text-white" />
          </div>
          <span className="font-sans text-sm text-white">
            Scroll Down to learn more
          </span>
        </div>
      </div>
    </div>
  );
}
