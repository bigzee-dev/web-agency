import { greenButton } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

export default function NeedHelpChoosing() {
  return (
    <div className="w-full">
      {/* Bottom CTA */}
      <div
        className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-2xl"
        style={{
          backgroundImage: "url('/img/windows-vps/networking.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/65" />

        {/* Content */}
        <div className="relative z-10 p-8 text-center">
          <p
            className={`${montserrat.className} mb-2 text-xl font-bold text-white`}
          >
            Need Help Choosing?
          </p>
          <p className="mb-4 font-sans text-gray-200">
            Our team is available 24/7 to help you select the perfect Windows
            VPS configuration.
          </p>
          <Link
            href="/contact"
            className={` ${greenButton} mt-4 inline-flex px-6`}
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  );
}
