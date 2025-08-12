import Image from "next/image";
import clsx from "clsx";

// components
import ContactForm from "./contactform/contactform";

const stats = [
  {
    value: "8,000+",
    label: "Creators on the platform",
  },
  {
    value: "3%",
    label: "Flat platform fee",
  },

  {
    value: "$70M",
    label: "Paid out to creators",
  },
];

export default function CTA() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16">
        <div className="relative isolate grid grid-cols-1 overflow-hidden bg-gray-900 pt-0 shadow-2xl md:grid-cols-12 md:rounded-3xl">
          {/* Blur component */}
          {/* <div
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
          </div> */}
          <div className="relative order-2 col-span-1 hidden h-80 md:order-2 md:col-span-4 md:block md:h-full">
            <Image
              src="/img/tech-laptop.jpg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-2 col-span-1 grid grid-cols-1 justify-items-center md:order-1 md:col-span-8 lg:mx-0">
            {/* <ContactForm /> */}

            <section className="w-full px-8 py-16 text-white">
              <div className="w-full">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                  <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-5xl">
                    Trusted by Proffesionals countrywide
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
                      <div className="mb-3 text-3xl font-bold lg:text-4xl">
                        {stat.value}
                      </div>
                      <div className="font-sans text-sm text-slate-300 lg:text-base">
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
        </div>
      </div>
    </div>
  );
}
