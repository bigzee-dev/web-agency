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
      <div className="absolute inset-0 max-w-7xl mx-auto py-14">
        {/* E-Commerce badge */}
        <div className="inline-block bg-neutral-100 px-6 py-2 rounded-md mb-6">
          <span className="font-bold text-primary text-2xl tracking-wide">
            E-Commerce
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={` ${montserrat.className} max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 leading-tight`}
        >
          Generate more sales on your website with user-focused design and
          functionality.
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
