import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-br from-secondary to-primary py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12">
          <div className="flex flex-col col-span-6 gap-y-3">
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
          <div className="col-span-5 col-start-8">
            {" "}
            <Image
              src="/img/emails/email2.png"
              alt="Logo"
              width={500}
              height={400}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
