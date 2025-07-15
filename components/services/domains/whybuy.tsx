import { montserrat } from "@/app/ui/fonts";

export default function WhyBuy() {
  return (
    <section className="px-4 py-16 md:px-6 md:pt-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2
          className={` ${montserrat.className} mb-4 text-3xl font-bold text-gray-800 md:text-4xl`}
        >
          Why Buy Domain Names at DeltaWorx?
        </h2>
        <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
          Hostinger offers reliable domain registration services with instant
          activation, dedicated live support, and full DNS management.
        </p>

        <ul className="disc grid max-w-4xl list-disc grid-cols-1 gap-12 pl-5">
          {/* 24/7 Support */}
          <li className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              24/7 live technical support
            </h3>
            <p className="font-sans text-md leading-relaxed text-gray-700">
              Our Customer Success team is here for you any time of the day.
              We&apos;ve made our domain name registration process as easy as
              possible, but everyone needs a helping hand sometimes. Just
              contact us – we will be happy to assist.
            </p>
          </li>

          {/* Trusted Registrar */}
          <li className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Trusted domain registrar
            </h3>
            <p className="font-sans text-md leading-relaxed text-gray-700">
              Hostinger is an ICANN-accredited registrar and web host trusted by
              millions of people worldwide. We offer a comprehensive
              registration service with more than 100 domain extensions so that
              you can have plenty of choices.
            </p>
          </li>

          {/* Instant Setup */}
          <li className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Instant setup and easy control
            </h3>
            <p className="font-sans text-md leading-relaxed text-gray-700">
              Once you complete your domain search, we&apos;ll guide you through
              the website domain registration process. It only takes a few
              clicks, and no technical knowledge is required.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
