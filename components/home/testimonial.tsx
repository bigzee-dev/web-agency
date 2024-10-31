import { montserrat } from "@/app/ui/fonts";
import { expletus } from "@/app/ui/fonts";
import { FaRegStar } from "react-icons/fa6";
import Image from "next/image";

export default function Testimonial({
  backgroundImage = "/img/fullwidth.jpg?height=1400&width=6997",
  overlayOpacity = 0.7,
}: {
  backgroundImage?: string;
  overlayOpacity?: number;
}) {
  const starArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="relative w-full max-w-[1800px] mx-auto">
      {/* <div className="flex flex-col items-center w-full pt-14 pb-10">
        <h2 className="text-center text-base/7 font-semibold text-blue-600">
          Contact Us
        </h2>
        <p
          className={` ${montserrat.className} mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl `}
        >
          Get in touch with us and lets discuss your project
        </p>
      </div> */}

      <div className="grid grid-cols-1">
        {/* Background Image */}
        <div
          className="col-start-1 row-start-1 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Overlay */}
        <div
          className="col-start-1 row-start-1 w-full h-full bg-gray-900 bg-opacity-90"
          // style={{ opacity: overlayOpacity }}
        >
          {/* Content */}
          <div className="w-full h-full flex items-center justify-center py-14 min-h-[300px]">
            <div className="grid grid-cols-1 justify-items-center w-full space-y-6 max-w-3xl mx-auto">
              <div className="flex gap-3">
                {starArray.map((star, index) => (
                  <div>
                    <FaRegStar className="text-neutral-400" size="1.6em" />
                  </div>
                ))}
              </div>
              <h3
                className={` ${expletus.className} text-neutral-300 text-3xl font-medium text-center`}
              >
                “I didn’t know a thing about icon design until I read this book.
                Now I can create any icon I need in no time. Great resource!”
              </h3>
              <div className="h-32 mt-8 w-max-xl flex gap-4 items-center">
                <Image
                  src="/img/tech-lady.png"
                  alt="image"
                  width={627}
                  height={627}
                  className="h-full w-auto object-contain"
                />
                <div>
                  <p className="text-lg text-neutral-300 font-medium">
                    Mrs Mosalagae
                  </p>
                  <p className="text-md text-neutral-400 font-normal">
                    Business Lady
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
