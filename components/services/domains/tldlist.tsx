import { montserrat, notoSans } from "@/app/ui/fonts";

export default function TldList() {
  const tlds = [
    ".ae",
    ".ag",
    ".agency",
    ".ai",
    ".am",
    ".app",
    ".asia",
    ".at",
    ".be",
    ".bio",
    ".biz",
    ".blog",
    ".business",
    ".bz",
    ".ca",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1
        className={` ${montserrat.className} text-center text-3xl font-bold text-gray-800 mb-10 `}
      >
        Checkout our List of available TLD&apos;s
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-7xl mx-auto">
        {tlds.map((tld) => (
          <div
            key={tld}
            className={` ${notoSans.className} bg-[#2E1065]/5 flex items-center justify-center px-4 py-2 rounded-full border border-[#2E1065]/20 text-secondary font-medium `}
          >
            {tld}
          </div>
        ))}
      </div>
    </div>
  );
}
