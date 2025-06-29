import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

// components
import ContactForm from "./contactform/contactform";

export default function CTA() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16">
        <div className="relative isolate grid grid-cols-12 overflow-hidden bg-slate-800 pt-16 shadow-2xl md:rounded-3xl md:pt-24 lg:gap-x-24 lg:pt-0">
          {/* Blur component */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#477cf0] to-[#6799e8] opacity-15"
            />
          </div>
          <div className="relative col-span-4 h-full">
            <Image
              src="/img/tech-laptop.jpg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-8 mx-auto flex max-w-2xl justify-center text-center lg:mx-0 lg:flex-auto lg:text-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
