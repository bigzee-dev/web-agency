import { homePageheadings } from "@/app/ui/customTailwindClasses";
import Link from "next/link";

export default function OurProcess() {
  return (
    <div className="w-full py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className={homePageheadings}>Our Process</h2>
        <p className="max-w-2xl text-gray-600 mt-10 leading-loose mb-12">
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
        <Link
          href="/"
          className="text-center font-medium max-w-56 bg-blue-600 rounded-lg text-neutral-100 text-md font-medium px-4 py-2"
        >
          How we work
        </Link>
      </div>
    </div>
  );
}
