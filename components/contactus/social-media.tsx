import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

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

export default function SocialMediaContacts() {
  return (
    <div className="isolate bg-gray-900 mt-6 p-2 overflow-hidden">
      <div className="relative font-sans ">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
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

        <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
          <div className="max-w-xl flex flex-col gap-y-6">
            <h6 className="text-neutral-300 text-3xl font-bold">Socials</h6>
            <dl className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
              {links.map((link) => (
                <button className="flex justify-center items-center gap-2  bg-neutral-300/10 py-2.5 px-3  outline outline-1 outline-offset-1 outline-white/25 rounded-lg min-w-52">
                  {link.icon}
                  <span className=" text-gray-300 font-medium">
                    {link.name}
                  </span>
                </button>
              ))}
            </dl>
          </div>
          {/* <h2 className="sm:text-4xl text-2xl font-bold mb-6">
            Explore the World
          </h2>
          <p className="sm:text-lg text-base text-center text-gray-200">
            Embark on unforgettable journeys. Book your dream vacation today!
          </p>

          <button
            type="button"
            className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Book Now
          </button> */}
        </div>
      </div>
    </div>
  );
}
