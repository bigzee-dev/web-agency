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
    className: "",
  },
  {
    backgroundStyle: {},
    svg: "/svg/banking.svg",
    title: "Affordable Pricing",
    content:
      "We provide high-quality services that fit your budget, offering competitive rates without compromising on excellence. Get the solutions you need at a price that works for you.",
    className: "bg-gradient-to-r from-cyan-600 to-gray-800",
  },
  {
    backgroundStyle: {},
    svg: "/svg/customer-support.svg",
    title: "Dedicated Support",
    content:
      "Our team is here to assist you every step of the way, ensuring everything runs smoothly. Count on us for dependable support whenever you need it.",
    className: "bg-purple-800",
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

  return (
    <div className="w-full pt-20 pb-20 flex flex-col bg-gradient-to-b from-neutral-300/50 to-neutral-100">
      <div className="mx-auto max-w-7xl">
        <div className="lg:mx-0 px-4">
          <h2 className={homePageheadings}>Why Choose Us</h2>
          <div className="mt-8 py-2">
            <p className="italic font-sans text-3xl font-normal text-gray-600">
              We are Here to Help you{" "}
              <span
                className={` ${montserrat.className} font-extrabold text-gray-700 tracking-wide underline`}
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
          className="px-1 lg:px-4 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
            {cardData.map((card, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full flex flex-col">
                  <CardHeader
                    className={`flex justify-center items-center w-full max-w-[340px] mx-auto min-h-[160px] rounded-xl ${card.className}`}
                    style={card.backgroundStyle as React.CSSProperties}
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
  );
}
