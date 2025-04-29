import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import {
  btnDimensions,
  grayButton,
  whiteButton,
} from "@/app/ui/customTailwindClasses";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className="relative w-full bg-rose-700/80">
      <div className="inset-0 w-full bg-gradient-to-r from-secondary via-secondary/50 to-transparent">
        <div className="relative isolate overflow-hidden max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-6 relative py-14 ">
              {/* Email badge */}
              <div className="inline-block bg-neutral-100 px-6 py-2 rounded-md mb-6">
                <span className="font-bold text-primary text-2xl tracking-wide">
                  Email
                </span>
              </div>
              {/* Main heading */}
              <h1
                className={` ${montserrat.className} max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 leading-tight`}
              >
                Get a Professional Email address
              </h1>

              <div className="space-y-2 my-4 text-md">
                <p className="font-sans text-neutral-300 font-normal max-w-[90%]">
                  Setup a personalised email address using your domain name, e.g
                  david@mywebsite.com.
                </p>
                <p className="font-sans text-neutral-300 font-normal max-w-[90%]">
                  A business email address makes a great professional
                  impression. With BigZee, you can get a work email address for
                  each team or individual team member e.g sales@mybusiness.com,
                  support@mybusiness.com
                </p>
              </div>

              <button className={` ${whiteButton} mt-3 bg-opacity-50`}>
                Get Started
              </button>
              <div className="flex items-center font-sans text-white  font-medium text-sm mt-5">
                <span className="mr-2">
                  <IoShieldCheckmarkSharp size="1.5em" className="" />
                </span>
                <span className="">7 day - money back - guarantee</span>
              </div>
            </div>
            <div className="col-span-6 pt-14">
              {" "}
              <Image
                src="/img/emails/email1.png"
                alt="Logo"
                width={1000}
                height={800}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
