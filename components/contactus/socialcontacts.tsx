import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const iconProps = {
  className: "text-neutral-100",
  size: "1.4em",
};

const links = [
  {
    name: "Facebook",
    icon: <FaFacebook {...iconProps} />,
  },
  {
    name: "WhatsApp",
    icon: <IoLogoWhatsapp {...iconProps} />,
  },
];

export default function SocialContacts() {
  return (
    <div className="max-w-4xl mx-auto mt-8 outline outline-1 outline-offset-1 outline-white/25 py-3 pb-4 px-8 rounded-lg bg-gradient-to-b from-gray-900 to-primary">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="flex flex-col gap-y-3 col-span-10">
          <h6 className="text-neutral-300 text-xl font-semibold">Socials</h6>
          <div className="max-w-lg grid grid-cols-1 gap-x-6 md:grid-cols-2 mt-auto">
            {links.map((link) => (
              <button className="flex justify-center items-center gap-2  bg-neutral-400/30 py-2 px-3  outline outline-1 outline-offset-1 outline-white/50 rounded-lg min-w-52">
                {link.icon}

                <span className="font-sans text-md text-neutral-100 font-medium">
                  {link.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center col-span-2 opacity-80">
          <img src="/svg/social-contact.svg " alt="" className="w-20 h-20" />
        </div>
      </div>
    </div>
  );
}
