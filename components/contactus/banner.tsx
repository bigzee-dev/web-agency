import { sectionHeadings } from "@/app/ui/customTailwindClasses";

export default function Banner() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-28">
      <h2
        className={` ${sectionHeadings} mx-auto max-w-3xl text-pretty text-center leading-relaxed`}
      >
        Our Support Team Is Available{" "}
        <span className="text-primary">24/7/365</span>
      </h2>
      <p className="mx-auto mt-8 max-w-3xl text-pretty text-center text-lg text-gray-600">
        We look forward to hearing from you! Whether you have a question about
        our services, need assistance, or just want to say hello, we're here to
        help.
      </p>
    </div>
  );
}
