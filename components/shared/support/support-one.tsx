import { sectionHeadings } from "@/app/ui/customTailwindClasses";

export default function SupportOne() {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className={`${sectionHeadings} flex items-center`}>
        Get in touch
        <span className="mb-3 ml-3">
          <img
            src="/svg/contact-animated-arrow.svg"
            alt=""
            className="max-h-32"
          />
        </span>
      </h1>
      <p className="max-w-[32rem] text-gray-600">
        Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie
        a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada
        et magna.
      </p>
      <div className="relative my-9 overflow-hidden rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 p-6">
        {/* background pattern */}
        <img
          src="/img/bg-pattern.png"
          alt="bg-pattern"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex h-full w-full items-center justify-end">
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
