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

const cardData = [
  {
    backgroundStyle: {
      background:
        "radial-gradient(circle, rgba(80,80,80,0.9) 0%, rgba(64,64,64,1) 10%, rgba(24,24,24,1) 70%)",
    },
    svg: "/svg/internet-connection.svg",
    title: "Custom Solutions",
    content:
      "We deliver tailored websites designed to meet your unique business needs and brand identity.",
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
    svg: "/svg/cloud-computing.svg",
    title: "Expertise with Latest Tech",
    content:
      "Our team uses cutting-edge technologies to build fast, responsive, and future-proof websites.",
  },
  {
    backgroundStyle: {
      background: "#5f1f73",
    },
    svg: "/svg/cpu-z.svg",
    title: "Reliable Support",
    content:
      "We provide dedicated support and ensure your project is delivered on time, every time.",
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
    <div className="container mx-auto pt-20 flex flex-col">
      <div className="mx-auto max-w-2xl lg:mx-0 px-4">
        <h2 className={homePageheadings}>Why Choose Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Building your brand's online presence.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        className="px-4 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 pt-14 border-t border-gray-400">
          {cardData.map((card, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full flex flex-col bg-red">
                <CardHeader
                  className="flex justify-center items-center w-full max-w-[330px] mx-auto min-h-[150px] rounded-2xl"
                  style={card.backgroundStyle}
                >
                  <Image src={card.svg} height={70} width={70} alt="svg" />
                </CardHeader>
                <CardContent className="flex-grow mt-6 space-y-3">
                  <p className="w-full text-center text-gray-800 font-medium">
                    {card.title}
                  </p>
                  <p className="text-md text-gray-500 text-center leading-relaxed">
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
  );
}
