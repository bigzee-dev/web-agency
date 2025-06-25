import { LocateIcon, ArrowLeftRight, Tag } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";

const iconProps = {
  className: "w-6 h-6 text-neutral-400",
  size: "1.4em",
};

const tips = [
  {
    icon: <LocateIcon {...iconProps} />,
    title: "Think locally",
    description:
      "While it’s ideal to purchase a website name with .com, due to their popularity, a .com TLD can often be unavailable. Consider registering a country-specific extension like .co.uk, .us, or .pk if you target a particular country.",
  },
  {
    icon: <ArrowLeftRight {...iconProps} />,
    title: "Keep it simple",
    description:
      "Keep it short and avoid hyphens, numbers, slang, and easily misspelled words in your domains. Complex elements make website names much harder to reach and remember.",
  },
  {
    icon: <Tag {...iconProps} />,
    title: "Include your brand name",
    description:
      "A great address for your website should include your brand or the target keywords for your niche. A search result with a keyword in your site URL will offer better brand recognition and increase your website's traffic.",
  },
];

export default function Tips() {
  return (
    <div className="x-padding relative isolate bg-gray-800 mt-6 py-14 pb-8 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-15"
        />
      </div>
      <h2
        className={`${montserrat.className} max-w-3xl mx-auto text-3xl md:text-4xl font-bold text-center text-neutral-200 mb-16 `}
      >
        A few tips to help you buy a Domain
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-16 max-w-7xl mx-auto">
        {tips.map((tip, index) => {
          return (
            <div key={index} className="space-y-4">
              <div className="w-12 h-12 bg-neutral-300/10  rounded-lg flex items-center justify-center outline outline-1 outline-offset-1 outline-white/25 ">
                {tip.icon}
              </div>
              <h3 className="font-sans text-xl font-semibold text-thatgreen">
                {tip.title}
              </h3>
              <p className="font-sans text-md text-neutral-300/65 leading-relaxed">
                {tip.description}
              </p>
            </div>
          );
        })}
        {/* Keep it short */}
        {/* <div className="space-y-4">
          <div className="w-12 h-12 bg-neutral-300/10  rounded-lg flex items-center justify-center outline outline-1 outline-offset-1 outline-white/25 ">
            <Location className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-neutral-300">
            Keep it short
          </h3>
          <p className="text-neutral-300/65">
            While there is no minimum length for domain registration, we
            recommend buying a domain name that's under three words long. Longer
            website names are harder to read and won't stand out.
          </p>
        </div> */}

        {/* Less is more */}
        {/* <div className="space-y-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <ArrowLeftRight className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-purple-900">
            Less is more
          </h3>
          <p className="text-gray-600">
            Avoid hyphens, numbers, slang, and easily misspelled words in your
            domains. Complex elements make website names much harder to reach
            and remember.
          </p>
        </div> */}

        {/* Include your brand name */}
        {/* <div className="space-y-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Tag className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-purple-900">
            Include your brand name
          </h3>
          <p className="text-gray-600">
            A great address for your website should include your brand or the
            target keywords for your niche. A search result with a keyword in
            your site URL will offer better brand recognition and increase your
            website's traffic.
          </p>
        </div> */}
      </div>
    </div>
  );
}
