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
        radial-gradient(at 20.16452673169042% 81.84416905428343%, #653957 0px, transparent 50%), radial-gradient(at 88.48314715099974% 77.73409069566222%, #66479e 0px, transparent 50%), radial-gradient(at 71.52889333181726% 23.40957673823391%, #8c4d9d 0px, transparent 50%), radial-gradient(at 15.248796334412654% 19.835595556824153%, #a45192 0px, transparent 50%), radial-gradient(at 49.658909115357% 49.32094030345465%, #7f8290 0px, transparent 50%) #000000;
      `,
      mixBlendMode: "normal",
      // filter: "blur(1px)",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
    },
    svg: "/svg/money-cash.svg",
    title: "Affordable Pricing",
    content:
      "We provide high-quality services that fit your budget, offering competitive rates without compromising on excellence. Get the solutions you need at a price that works for you.",
  },
  {
    backgroundStyle: {
      background: "rgb(8 145 178)",
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
    <div className="bg-gradient-to-r from-cyan-500/60 via-cyan-700/60 to-primary/80 p-2">
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
                      <p className="font-sans text-md text-gray-600 font-normal text-center leading-relaxed">
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
        </div>
      </div>
    </div>
  );
}
