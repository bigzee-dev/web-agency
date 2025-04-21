"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";
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
    svg: "/svg/support.svg",
    title: "Dedicated Support",
    content:
      "Our team is here to assist you every step of the way, ensuring everything runs smoothly. Count on us for dependable support whenever you need it.",
    className: "bg-slate-600",
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
    <div className="relative isolate x-padding w-full pt-24 pb-20">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[rgb(37,192,235)] to-[#89b9fc] opacity-15"
        />
      </div>
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="space-y-20"
        >
          <div className="text-center">
            <h2 className={` ${sectionHeadings}`}>Why Choose Us</h2>
            <p className="italic font-sans text-3xl font-normal text-gray-600 mt-10 mb-3">
              We are Here to Help you{" "}
              <span
                className={` ${montserrat.className} text-3xl font-extrabold text-gray-700 tracking-wide underline`}
              >
                Grow your Brand and Revenue
              </span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
            {cardData.map((card, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full flex flex-col items-center gap-2">
                  <CardHeader
                    className={`relative flex flex-col justify-center items-center gap-2 overflow-hidden w-full min-w-[300px] max-w-[320px] h-[150px] rounded-xl ${card.className}`}
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
                    {/* <p className=" text-white/80 font-semibold ">
                      {card.title}
                    </p> */}
                  </CardHeader>
                  <CardContent className=" space-y-2 pt-3 text-center ">
                    <p className="w-full text-base text-gray-800 font-semibold">
                      {card.title}
                    </p>
                    <p className="font-sans text-md text-gray-700 font-normal  pb-0 leading-relaxed">
                      {card.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
