import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

export default function NeedHelpChoosing() {
  return (
    <div className="w-full">
      {/* Bottom CTA */}
      <div className="mx-auto mt-16 max-w-6xl rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center">
        <p
          className={` ${montserrat.className} mb-2 text-xl font-bold text-gray-800`}
        >
          Need Help Choosing?
        </p>
        <p className="mb-4 font-sans text-gray-600">
          Our team is available 24/7 to help you select the perfect Windows VPS
          configuration.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center font-sans text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Contact Support →
        </Link>
      </div>
    </div>
  );
}
