import { Badge } from "@/components/ui/badge";
import { ChevronRight, Lock } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";
import { EmailIcon } from "@/components/icons";

const features = [
  "Professional custom email addresses (you@yourdomain.com)",
  "Reliable and secure email hosting with spam protection",
  "Free setup and configuration assistance",
  "Seamless integration with your domain and website",
];

export default function Email() {
  return (
    <div className="relative isolate w-full overflow-hidden rounded-3xl bg-gray-800 p-4 pt-5 text-white sm:p-5 md:p-8 md:px-12">
      {/* Blur component */}
      <div
        aria-hidden="true"
        className="absolute left-1/4 top-0 -z-10 -translate-x-1/2 overflow-hidden blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#89a6fc] opacity-15"
        />
      </div>
      <Badge className="absolute left-12 top-12 hidden bg-[#6558F5] uppercase text-white hover:bg-[#6558F5] lg:block">
        BUSINESS EMAIL
      </Badge>

      <div className="absolute right-12 top-10 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-[#2D1576] lg:flex">
        <Lock className="h-4 w-4" />
        <span className="text-sm font-medium">Delivered</span>
        <Badge
          variant="secondary"
          className="bg-[#E3F9E5] uppercase text-[#14532D] hover:bg-[#E3F9E5] hover:text-[#14532D]"
        >
          SUCCESS
        </Badge>
      </div>

      <Badge
        className={`flex max-w-max items-center gap-1.5 bg-neutral-100 text-center font-semibold text-slate-800 lg:hidden`}
      >
        <EmailIcon size="size-5" />
        BUSINESS EMAIL
      </Badge>
      <div className="mt-4 grid grid-cols-1 items-start gap-x-8 gap-y-8 lg:mt-20 lg:grid-cols-12">
        <div className="pt-1 lg:col-span-7">
          <h2
            className={`mb-4 text-3xl font-bold text-neutral-300 md:mb-6 md:text-4xl`}
          >
            Look professional and communicate with confidence
            <br />
            <span className="text-blue-400">Email that means business</span>
          </h2>
          <p className="font-sans text-base leading-relaxed text-neutral-300">
            Our Email service helps you and your team stay connected, look
            professional, and build trust — with secure, easy-to-manage email on
            your domain.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-300/90">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-x-3 font-sans text-md"
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
            href="/emails"
            className={` ${montserrat.className} mx-auto mt-6 flex w-max items-center text-center text-xl font-semibold text-blue-400 md:text-2xl lg:ml-0 lg:mr-auto lg:mt-10 lg:text-start`}
          >
            Professional Email{" "}
            <ChevronRight
              aria-hidden="true"
              className="flex-none font-medium text-blue-400 lg:pl-2"
              size="1.35em"
            />
          </Link>
        </div>
        <div className="relative rounded-2xl border border-gray-600/70 bg-gray-900/30 lg:col-span-5">
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid h-full w-full grid-cols-8 grid-rows-8">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-white/15"></div>
              ))}
            </div>
          </div>
          <img src="/svg/emails.svg" alt="emails" className="w-full" />
        </div>
      </div>
    </div>
  );
}
