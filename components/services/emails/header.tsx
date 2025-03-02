import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function Header() {
  return (
    <div className="w-full bg-secondary py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-20 max-w-6xl">
          <div className="flex flex-col h-full col-span-8  gap-y-3">
            <h2
              className={` ${montserrat.className} text-6xl font-bold text-neutral-100 `}
            >
              Professional Email that builds your brand
            </h2>
            <p className="font-sans text-neutral-300 text-base font-normal max-w-4xl">
              Use these Tailwind CSS settings screen examples to build
              configuration and preference pages where users can update their
              account information.
            </p>
            <button
              className={` ${btnDimensions} bg-background text-secondary mt-auto `}
            >
              Get Started
            </button>
          </div>
          <div className="col-span-4">
            {" "}
            <Image
              src="/img/email2.png"
              alt="Logo"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
