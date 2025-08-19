import Image from "next/image";
import clsx from "clsx";

// components
import ContactForm from "./contactform/contactform";

const stats = [
  {
    value: "75%",
    label: "of people believe that a website’s credibility is based on design.",
  },
  {
    value: "94%",
    label:
      "of first impressions of a business are related to the website design.",
  },

  {
    value: "90%",
    label: "of users will exit out of a poorly designed website",
  },
];

export default function CTA() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16">
        <div className="relative isolate grid grid-cols-1 overflow-hidden bg-gray-900 pt-0 shadow-2xl md:grid-cols-12 md:rounded-3xl">
          <div className="order-2 col-span-1 grid grid-cols-1 justify-items-center md:order-2 md:col-span-8 lg:mx-0">
            {/* <ContactForm /> */}

            <section className="w-full px-8 py-16 text-white">
              <div className="w-full">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                  <h2 className="mb-6 text-4xl font-semibold md:text-4xl">
                    Why a Well-Designed Website Matters
                  </h2>
                  <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing possimus.
                  </p>
                </div>

                {/* Stats Grid - Desktop (4 columns) */}
                <div className="hidden gap-x-1.5 md:grid md:grid-cols-3">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={clsx(
                        "bg-slate-800/50 p-6 text-center",
                        index === 0 && "rounded-l-2xl",
                        index === 2 && "rounded-r-2xl",
                      )}
                    >
                      <div className="mb-4 text-3xl font-bold md:text-5xl">
                        {stat.value}
                      </div>
                      <div className="lg:md font-sans text-sm text-slate-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Grid - Mobile (1 column) */}
                <div className="space-y-6 md:hidden">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-slate-800/50 p-6 text-center"
                    >
                      <div className="mb-3 text-4xl font-bold">
                        {stat.value}
                      </div>
                      <div className="text-slate-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div className="relative order-2 col-span-1 hidden h-80 md:order-1 md:col-span-4 md:block md:h-full">
            <Image
              src="/img/emails/214.jpg"
              alt="img"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/15"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
