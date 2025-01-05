import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";

const iconProps = {
  className: "text-gray-400",
  size: "1.4em",
};

const links = [
  {
    name: "facebook",
    icon: <FaFacebook {...iconProps} />,
  },
  {
    name: "whatsapp",
    icon: <IoLogoWhatsapp {...iconProps} />,
  },
];

export default function SocialMedia() {
  return (
    <div className="w-full isolate bg-gray-900 overflow-hidden py-16">
      <div className="relative font-sans ">
        <div
          aria-hidden="true"
          className="absolute left-1/2 -top-8 -z-10 -translate-x-1/2 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-25"
          />
        </div>
        {/* <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}

        <div className="relative z-50 max-w-4xl mx-auto flex flex-col gap-8 justify-center">
          <Image
            src="/img/contact-us.png"
            alt="Banner Image"
            width={494}
            height={260}
            className="absolute right-0 top-0 w-[300px] h-auto rounded-lg"
          />
          <div className="space-y-4 max-w-lg">
            <p className="text-md font-medium text-gray-400">
              Lets Discuss your Project
            </p>
            <p className="text-3xl font-extrabold text-gray-300">Contact Us</p>
            <p className="font-sans text-gray-400 text-base font-normal">
              Use these Tailwind CSS settings screen examples to build
              configuration and preference pages where users can update their
              account information, change settings, and customize their
              experience. These page examples are designed and built by the
              Tailwind CSS team, and include a variety of different styles and
              layouts.
            </p>
          </div>
          {/* <div className="outline outline-1 outline-offset-1 outline-white/25 py-3 px-7 rounded-lg bg-gray-900/50">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="flex flex-col gap-y-3 col-span-10">
                <h6 className="text-neutral-400 text-xl font-semibold">
                  Socials
                </h6>
                <div className="max-w-lg grid grid-cols-1 gap-x-6 md:grid-cols-2 mt-auto">
                  {links.map((link) => (
                    <button className="flex justify-center items-center gap-2  bg-neutral-300/10 py-2 px-3  outline outline-1 outline-offset-1 outline-white/25 rounded-lg min-w-52">
                      {link.icon}
                      <span className=" text-gray-300 font-medium">
                        {link.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <img src="/svg/connections.svg " alt="" className="w-20 h-20" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
