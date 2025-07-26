import { btnDimensions, sectionHeadings } from "@/app/ui/customTailwindClasses";

export default function SupportOne() {
  return (
    <div className="mx-auto max-w-7xl pt-12">
      <h1 className={`${sectionHeadings} flex items-center`}>
        Get in Touch
        <span className="mb-3 ml-3">
          <img
            src="/svg/contact-animated-arrow.svg"
            alt=""
            className="max-h-32"
          />
        </span>
      </h1>

      <div className="relative mb-9 overflow-hidden rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 p-6 pl-12">
        {/* background pattern */}
        <img
          src="/img/bg-pattern.png"
          alt="bg-pattern"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="via gray-900/20 absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-gray-900/35 via-gray-900/20 to-gray-900/10"></div>
        <div className="relative z-10 flex h-full w-full items-center justify-between">
          <div>
            <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className={` ${btnDimensions} bg-white text-secondary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
              >
                Get Started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <img
            src="/svg/customer-support.svg"
            alt="support"
            className="relative z-10 w-[30rem]"
          />
        </div>
      </div>
    </div>
  );
}
