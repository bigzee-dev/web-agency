"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { FaRegStar } from "react-icons/fa6";
import { expletus } from "@/app/ui/fonts";

const cardData = [
  {
    backgroundStyle: {
      background:
        "radial-gradient(circle, rgba(80,80,80,0.9) 0%, rgba(64,64,64,1) 10%, rgba(24,24,24,1) 70%)",
    },
    svg: "/svg/helper.svg",
    title: "Custom Solutions",
    content:
      "We offer services tailored to everyone—from individuals to businesses and organisations. Our team creates personalised solutions to meet your unique needs.",
  },
  {
    backgroundStyle: {
      background: `
        radial-gradient(at 0% 0%, #D2691E 0%, transparent 50%),
        radial-gradient(at 100% 0%, #8B0000 0%, transparent 50%),
        radial-gradient(at 100% 100%, #D2691E 0%, transparent 50%),
        radial-gradient(at 0% 100%, #8B0000 0%, transparent 50%)
        `,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
    },
    svg: "/svg/success.svg",
    title: "Affordable Pricing",
    content:
      "We provide high-quality services that fit your budget, offering competitive rates without compromising on excellence. Get the solutions you need at a price that works for you.",
  },
  {
    backgroundStyle: {
      background: "#5f1f73",
    },
    svg: "/svg/customer-support.svg",
    title: "Dedicated Support",
    content:
      "Our team is here to assist you every step of the way, ensuring everything runs smoothly. Count on us for dependable support whenever you need it.",
  },
];

export default function Component() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  const starArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="bg-gradient-to-r from-red-600/50 via-purple-700/50 to-blue-600/50 p-2">
      <div className="w-full pt-24 pb-20 flex flex-col bg-neutral-100/80 rounded-xl">
        <div className="mx-auto max-w-7xl">
          <div className="lg:mx-0 px-4">
            <h2 className={homePageheadings}>Why Choose Us</h2>
            <div className="mt-8  px-4 py-2 bg-gray-800 w-max">
              <p className="text-3xl font-light text-gray-300">
                We are Here to Help you{" "}
                <span
                  className={` ${montserrat.className} font-extrabold text-blue-600 tracking-wide `}
                >
                  Grow your Brand and Revenue
                </span>
              </p>
            </div>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            className="px-4 py-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-10">
              {cardData.map((card, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="h-full flex flex-col">
                    <CardHeader
                      className="flex justify-center items-center w-full max-w-[340px] mx-auto min-h-[160px] rounded-2xl"
                      style={card.backgroundStyle}
                    >
                      <Image src={card.svg} height={75} width={75} alt="svg" />
                    </CardHeader>
                    <CardContent className="flex-grow mt-7 space-y-3">
                      <p className="w-full text-center text-gray-800 font-medium">
                        {card.title}
                      </p>
                      <p className="text-md text-gray-600 text-center leading-relaxed">
                        {card.content}
                      </p>
                    </CardContent>
                    {/* <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter> */}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="w-full h-full mt-4 flex items-center justify-center min-h-[300px]">
            <div className="grid grid-cols-1 justify-items-center w-full space-y-7 max-w-3xl mx-auto">
              <div className="flex gap-2">
                {starArray.map((star, index) => (
                  <div>
                    <FaRegStar className="text-gray-900" size="1.4em" />
                  </div>
                ))}
              </div>
              <h3
                className={` ${expletus.className} text-gray-900 text-3xl font-medium text-center`}
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
                  <p className="text-lg text-gray-800 font-medium">
                    Mrs Mosalagae
                  </p>
                  <p className="text-md text-gray-600 font-normal">
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
