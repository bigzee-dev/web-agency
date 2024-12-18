"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { cards } from "./card-content";
import Image from "next/image";

export default function CarouselLrg() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full max-w-7xl mx-auto mt-12"
      >
        <CarouselContent className="">
          {cards.map((card, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center basis-1/2 md:basis-1/3 lg:basis-1/3"
            >
              <Card>
                <CardContent className="flex items-center justify-center p-0.5 max-w-[490x]">
                  <div className="relative">
                    <Image
                      src={card.imgUrl}
                      alt="img"
                      width={card.imgWidth}
                      height={card.imgHeight}
                      className="h-[500px] w-[360px] object-center object-cover rounded-2xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950 to-90% rounded-2xl z-0" />
                    <div className="absolute bottom-0 left-0 h-[40%] w-full px-4">
                      <h4 className="w-max text-2xl font-semibold pb-2 border-b border-neutral-500 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                        {card.title}
                      </h4>
                      <p className="text-md text-neutral-200/75 font-sans mt-4">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-10">
        <div className="flex items-center justify-center gap-2 py-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300 ease-in-out",
                current === index ? "bg-gray-800 w-2" : "bg-gray-400"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
