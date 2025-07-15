import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";

export default function Consultation() {
  return (
    <div className="x-padding w-full">
      <section className="mx-auto max-w-7xl pb-16 pt-12">
        <h1
          className={` ${montserrat.className} flex items-center text-5xl font-bold leading-tight text-gray-900`}
        >
          Request a <br /> Consultation
          <span className="contact__shape">
            <img src="/svg/contact-animated-arrow.svg" alt="" />
          </span>
        </h1>

        <div className="grid w-full grid-cols-12 rounded-2xl">
          <div className="col-span-7 flex flex-col gap-y-8 border-t-2 border-primary pt-2">
            <h3
              data-sal="slide-down"
              data-sal-delay={100}
              data-sal-duration={800}
              className="bg-gradient-to-r from-cyan-600 via-primary to-blue-600 bg-clip-text font-sans text-4xl font-extrabold leading-normal text-neutral-300 text-transparent"
            >
              24/7 World-Class Support
            </h3>
            <p
              data-sal="slide-down"
              data-sal-delay={200}
              data-sal-duration={800}
              className="max-w-xl text-base text-gray-600"
            >
              Ran into trouble? Contact our Customer Success team any time via
              live chat or email. Ran into trouble? Contact our Customer Success
              team any time via live chat or email.
            </p>
            <div
              className="feature"
              data-sal="slide-down"
              data-sal-delay={300}
              data-sal-duration={800}
            >
              <ul className="space-y-2 font-sans text-md text-gray-600">
                <li className="feature__item">
                  Receive professional WordPress support
                </li>
                <li className="feature__item">
                  Our specialists are available round
                </li>
              </ul>
            </div>
            <div className="mt-auto w-full">
              <button
                className={` ${btnDimensions} bg-primary text-neutral-200`}
              >
                Get Support
              </button>
            </div>
          </div>
          <div
            className="col-span-4 border-t-2 border-primary bg-gradient-to-r from-primary/40 via-primary/80 to-secondary"
            data-sal="slide-left"
            data-sal-delay={400}
            data-sal-duration={800}
          >
            <Image
              src="/img/hosting/consultation.png"
              alt=""
              width={750}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
