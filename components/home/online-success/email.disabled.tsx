import { Badge } from "@/components/ui/badge";
import { ChevronRight, Lock } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";

const features = [
  "Visually stunning, responsive and secure websites",
  "Expert web development services",
  "FREE website migration",
];

export default function Websites() {
  return (
    <div className="relative isolate overflow-hiddenvw-full bg-gray-800 text-white rounded-3xl p-6 md:p-10 md:px-12">
      <div
        aria-hidden="true"
        className="absolute left-1/4 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#89a6fc] opacity-20"
        />
      </div>
      <Badge className="absolute top-12 left-12 bg-[#6558F5] hover:bg-[#6558F5] text-white uppercase">
        Business Email
      </Badge>

      <div className="absolute top-10 right-12 flex items-center gap-2 bg-white text-[#2D1576] px-4 py-2 rounded-full">
        <Lock className="w-4 h-4" />
        <span className="text-sm font-medium">SSL certificate</span>
        <Badge
          variant="secondary"
          className="bg-[#E3F9E5] text-[#14532D] hover:bg-[#E3F9E5] hover:text-[#14532D]"
        >
          ACTIVE
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 mt-16">
        <div className="col-span-7">
          <h2 className="text-4xl text-neutral-200 font-bold mb-7">
            Look professional and communicate with confidence
            <br />
            <span className="text-blue-400">Email that means business</span>
          </h2>
          <p className="font-sans text-md text-neutral-300 leading-relaxed">
            Our Email service helps you and your team stay connected, look
            professional, and build trust — with secure, easy-to-manage email on
            your domain.
          </p>
          <ul className="text-neutral-300/85 mt-6 space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="font-sans text-md flex items-center gap-x-3"
              >
                <FaCheck
                  aria-hidden="true"
                  className="h-auto w-2.5 flex-none text-gray-400"
                />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/websites"
            className={` ${montserrat.className} w-max flex items-center mt-8 text-center text-2xl font-semibold text-blue-400 `}
          >
            Learn More
            <ChevronRight
              aria-hidden="true"
              className="flex-none text-blue-400 font-medium pl-2"
              size="1.35em"
            />
          </Link>
        </div>
        <div className="col-span-5  border border-gray-700 rounded-lg">
          <img src="/svg/emails.svg" alt="emails" className="w-full" />
        </div>
      </div>
    </div>
  );
}
