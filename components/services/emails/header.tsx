import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import {
  btnDimensions,
  grayButton,
  greenButton,
  whiteButton,
} from "@/app/ui/customTailwindClasses";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className="relative w-full bg-rose-700/60">
      <div className="inset-0 w-full bg-gradient-to-r from-gray-900 via-primary to-slate-600">
        <div className="relative isolate overflow-hidden max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-6 relative py-12 ">
              {/* Email badge */}
              <div className="inline-block">
                <span className="font-semibold text-neutral-300 tracking-widest">
                  EMAIL
                </span>
              </div>
              {/* Main heading */}
              <h1
                className={` ${montserrat.className} max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mt-3 leading-tight`}
              >
                Get a Professional Email address
              </h1>

              <div className="space-y-3 my-5 text-md">
                <p className="font-sans text-neutral-300 font-normal max-w-[90%]">
                  Setup a personalised email address using your domain name, e.g
                  <span className="text-neutral-400"> david@mywebsite.com</span>
                </p>
                <p className="font-sans text-neutral-300 font-normal max-w-[90%]">
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

              <button className={` ${whiteButton} mt-3 `}>Get Started</button>
              <div className="flex items-center font-sans text-neutral-300  font-medium text-sm mt-5">
                <span className="mr-2">
                  <IoShieldCheckmarkSharp
                    size="1.5em"
                    className="text-blue-400"
                  />
                </span>
                <span className="">7 day - money back - guarantee</span>
              </div>
            </div>
            <div className="col-span-6 flex items-end">
              {" "}
              <Image
                src="/img/emails/email1.png"
                alt="Logo"
                width={1000}
                height={800}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
