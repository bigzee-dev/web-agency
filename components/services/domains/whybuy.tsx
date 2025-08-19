import { montserrat } from "@/app/ui/fonts";
import { sectionSubHeadings } from "@/app/ui/customTailwindClasses";

const whyBuyFeatures = [
  {
    title: "24/7 live technical support",
    description:
      "Our Customer Success team is here for you any time of the day. We&apos;ve made our domain name registration process as easy as possible, but everyone needs a helping hand sometimes. Just contact us – we will be happy to assist.",
  },
  {
    title: "Trusted Domain Registrar",
    description:
      "Hostinger is an ICANN-accredited registrar and web host trusted by millions of people worldwide. We offer a comprehensive registration service with more than 100 domain extensions so that you can have plenty of choices.",
  },
  {
    title: "Instant setup and easy control",
    description:
      "Once you have registered your domain, you can manage it through our dashboard, including tasks such as <strong>updating DNS records</strong>, <strong>configuring Nameservers</strong>, and <strong>renewing your Domain</strong>.",
  },
];

export default function WhyBuy() {
  return (
    <section className="w-full px-4 py-16 md:px-6 md:pt-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2
          className={` ${montserrat.className} mb-4 flex items-end justify-center text-3xl font-bold text-gray-800 md:text-4xl`}
        >
          Why Buy Domain Names at DeltaWorx?&nbsp;
          <div className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="url(#gradient)"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#fde047" /> {/* yellow-400 */}
                  <stop offset="100%" stopColor="#7dd3fc" />{" "}
                  {/* sky-300 (light blue) */}
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                fill="url(#gradient)"
              />
            </svg>
          </div>
        </h2>
        <p className={` ${sectionSubHeadings} mb-12 text-center`}>
          Hostinger offers reliable domain registration services with instant
          activation, dedicated live support, and full DNS management.
        </p>

        <ul className="disc mx-auto grid max-w-xl list-disc grid-cols-1 gap-12 pl-5">
          {whyBuyFeatures.map((feature, idx) => (
            <li key={idx} className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p
                className="font-sans text-md leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
