"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { homePageheadings } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";

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
    className: "bg-opacity-60",
  },
  {
    backgroundStyle: {},
    svg: "/svg/banking.svg",
    title: "Affordable Pricing",
    content:
      "We provide high-quality services that fit your budget, offering competitive rates without compromising on excellence. Get the solutions you need at a price that works for you.",
    className: "bg-gradient-to-b from-secondary to-primary",
  },
  {
    backgroundStyle: {},
    svg: "/svg/customer-support.svg",
    title: "Dedicated Support",
    content:
      "Our team is here to assist you every step of the way, ensuring everything runs smoothly. Count on us for dependable support whenever you need it.",
    className: "bg-green-900 bg-opacity-75",
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
        staggerChildren: 0.2,
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

  return (
    <div className="w-full pt-24 pb-16  bg-gradient-to-b from-neutral-300/50 to-neutral-100">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="">
          <h2 className={homePageheadings}>Why Choose Us</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className=""
        >
          <div className="grid grid-cols-2 gap-14">
            <div className="mt-8">
              <p className="italic font-sans text-3xl font-normal text-gray-600">
                We are Here to Help you{" "}
                <span
                  className={` ${montserrat.className} font-extrabold text-gray-700 tracking-wide underline`}
                >
                  Grow your Brand and Revenue
                </span>
              </p>
            </div>
            {cardData.map((card, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full flex gap-2">
                  <CardHeader
                    className={`relative flex flex-col justify-center items-center gap-2 overflow-hidden w-full min-w-[300px] h-[150px] rounded-xl ${card.className}`}
                    style={card.backgroundStyle as React.CSSProperties}
                  >
                    {" "}
                    <Image
                      src={card.svg}
                      height={75}
                      width={75}
                      alt="svg"
                      className="z-30 block m-0"
                      style={{ lineHeight: 0 }}
                    />
                    <p className="font-sans text-white/80 font-bold ">
                      {card.title}
                    </p>
                    {/* {index === 1 && (
                      <div className="absolute top-0 left-0 h-full">
                        <div className="relative w-full h-full z-10">
                          <img
                            src="/img/contact-us.png"
                            alt=""
                            className="object-cover"
                          />
                          <div className="absolute top-0 right-0 h-full w-full bg-secondary/90 z-20"></div>
                        </div>
                      </div>
                    )} */}
                  </CardHeader>
                  <CardContent className="space-y-1 pt-2">
                    {/* <p className="w-full  text-gray-700 font-semibold">
                      {card.title}
                    </p> */}
                    <p className="font-sans text-md text-gray-600 font-normal  pb-0 leading-relaxed">
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
  );
}
