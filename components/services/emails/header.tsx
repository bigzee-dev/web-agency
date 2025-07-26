import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import { whiteButton } from "@/app/ui/customTailwindClasses";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <div className="relative w-full bg-rose-700/60">
      <div className="inset-0 w-full bg-gradient-to-r from-gray-900 via-primary to-slate-600">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-6 py-12">
              {/* Email badge */}
              <div className="inline-block">
                <span className="font-semibold tracking-widest text-neutral-300">
                  EMAIL
                </span>
              </div>
              {/* Main heading */}
              <h1
                className={`${montserrat.className} mt-3 max-w-4xl text-4xl font-bold leading-tight text-neutral-100 md:text-5xl lg:text-6xl`}
              >
                Use a Professional Email Service
              </h1>

              <div className="my-6 space-y-4 text-md">
                <p className="max-w-[90%] font-sans font-normal text-neutral-300">
                  Setup a personalised email address using your domain name, e.g
                  <span className="text-neutral-400"> david@mywebsite.com</span>
                </p>
                <p className="max-w-[90%] font-sans font-normal text-neutral-300">
                  A business email address makes a great professional
                  impression. With BigZee, you can get a work email address for
                  each team or individual team member e.g{" "}
                  <span className="text-neutral-400">sales@mybusiness.com</span>
                  ,
                  <span className="text-neutral-400">
                    {" "}
                    support@mybusiness.com
                  </span>
                </p>
              </div>

              <Link
                href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/store/business-email`}
                className={` ${whiteButton} mt-2 inline-block`}
              >
                Compare Plans
              </Link>
              <div className="mt-5 flex items-center font-sans text-sm font-medium text-neutral-300">
                <span className="mr-2">
                  <IoShieldCheckmarkSharp
                    size="1.5em"
                    className="text-blue-400"
                  />
                </span>
                <span className="">7 day - money back - guarantee</span>
              </div>
            </div>
            <div className="relative col-span-6 flex items-center">
              {" "}
              <Image
                src="/img/emails/emails-filter.png"
                alt="Logo"
                width={1000}
                height={800}
                className="rounded-3xl bg-neutral-400/40 object-cover px-12 py-6"
              />
              <Badge
                variant="outline"
                className="absolute right-6 top-12 border-white/20 bg-gray-800/20 px-4 py-2 text-white"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-purple-400"></div>
                  <span>1 New msg</span>
                  <span className="font-semibold text-green-400">INBOX</span>
                </div>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
