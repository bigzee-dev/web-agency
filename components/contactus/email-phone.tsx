import { Mails, Phone } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";
import { BiCopy } from "react-icons/bi";

export default function EmailAndPhone() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-2  mt-8 outline outline-1 outline-offset-1 outline-gray-400 py-3  bg-gray-200/50 rounded-lg ">
      <div className="flex flex-col gap-2.5 pl-8 pr-8 border-r border-gray-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="p-1.5 bg-gray-800 text-neutral-300 rounded-lg">
              <Mails size="1.6em" strokeWidth={2} />
            </div>{" "}
            <span
              className={` ${montserrat.className} text-gray-800 text-xl font-bold `}
            >
              Email
            </span>
          </div>
          <BiCopy size="1.4em" className="text-gray-700" />
        </div>
        <p className="font-sans text-md  text-gray-600 ml-6 underline">
          admin@bigzee.app
        </p>
      </div>
      <div className="flex flex-col gap-2.5 pl-8">
        <div className="flex items-center gap-x-2 ">
          <div className="p-1.5 bg-gray-800 text-neutral-300 rounded-lg">
            <Phone size="1.6em" strokeWidth={2} />{" "}
          </div>
          <span
            className={` ${montserrat.className} text-gray-800 text-xl font-bold `}
          >
            Phone
          </span>
        </div>

        <p className="font-sans text-md  text-gray-600 ml-6 underline">
          (267) 77810825
        </p>
      </div>
    </div>
  );
}
