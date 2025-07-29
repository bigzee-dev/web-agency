import { montserrat } from "@/app/ui/fonts";
import { sectionSubHeadings } from "@/app/ui/customTailwindClasses";

const whyBuyFeatures = [
  {
    title: "24/7 live technical support",
    description:
      "Our Customer Success team is here for you any time of the day. We&apos;ve made our domain name registration process as easy as possible, but everyone needs a helping hand sometimes. Just contact us – we will be happy to assist.",
  },
  {
    title: "Trusted domain registrar",
    description:
      "Hostinger is an ICANN-accredited registrar and web host trusted by millions of people worldwide. We offer a comprehensive registration service with more than 100 domain extensions so that you can have plenty of choices.",
  },
  {
    title: "Instant setup and easy control",
    description:
      "Once you have registered your domain, you can manage it through our dashboard, including tasks such as updating DNS records, configuring nameservers, and renewing your domain.",
  },
];

export default function WhyBuy() {
  return (
    <section className="px-4 py-16 md:px-6 md:pt-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2
          className={` ${montserrat.className} mb-4 text-3xl font-bold text-gray-800 md:text-4xl`}
        >
          Why Buy Domain Names at DeltaWorx?
        </h2>
        <p className={` ${sectionSubHeadings} mb-12 max-w-3xl`}>
          Hostinger offers reliable domain registration services with instant
          activation, dedicated live support, and full DNS management.
        </p>

        <ul className="disc grid max-w-4xl list-disc grid-cols-1 gap-12 pl-5">
          {whyBuyFeatures.map((feature, idx) => (
            <li key={idx} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p
                className="text-md leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
