import Link from "next/link";
import Image from "next/image";
import { btnDimensions } from "@/app/ui/customTailwindClasses";

export default function Consultation() {
  return (
    <>
      <section className="max-w-6xl mx-auto py-16">
        <h1 className="flex items-center text-6xl font-bold text-gray-800 leading-tight">
          Request a <br /> Consultation
          <span className="contact__shape">
            <img src="/svg/contact-animated-arrow.svg" alt="" />
          </span>
        </h1>

        <div className="w-full border-t border-b border-gray-300">
          <div className="w-full flex justify-between bg-gradient-to-r from-transparent via-transparent to-secondary py-4 rounded-2xl">
            <div className="flex flex-col gap-y-8">
              <h3
                data-sal="slide-down"
                data-sal-delay={100}
                data-sal-duration={800}
                className="font-sans text-neutral-300 text-4xl font-extrabold  bg-gradient-to-r from-cyan-600 via-primary to-blue-600 text-transparent bg-clip-text leading-normal"
              >
                24/7 World-Class Support
              </h3>
              <p
                data-sal="slide-down"
                data-sal-delay={200}
                data-sal-duration={800}
                className="max-w-xl text-gray-600 text-base"
              >
                Ran into trouble? Contact our Customer Success team any time via
                live chat or email. Ran into trouble? Contact our Customer
                Success team any time via live chat or email.
              </p>
              <div
                className="feature"
                data-sal="slide-down"
                data-sal-delay={300}
                data-sal-duration={800}
              >
                <ul className="font-sans text-md text-gray-600 space-y-2">
                  <li className="feature__item">
                    Receive professional WordPress support
                  </li>
                  <li className="feature__item">
                    Our specialists are available round
                  </li>
                </ul>
              </div>
              <div className="w-full mt-auto">
                <button
                  href="/support"
                  className={` ${btnDimensions} bg-primary text-neutral-200 `}
                >
                  Get Support
                </button>
              </div>
            </div>
            <div
              className="w-[400px] "
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
        </div>
      </section>
    </>
  );
}
