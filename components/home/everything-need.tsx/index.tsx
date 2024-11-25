"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { cards } from "./card-content";

export default function EverythingCarousel() {
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
        // ref={emblaRef} // Use ref to store the Embla instance
        className="w-full max-w-5xl mx-auto mt-12"
        opts={{
          align: "start",
          loop: false,
        }}
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}
      >
        <CarouselContent className="">
          {cards.map((card, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent
                    className={`relative flex flex-col items-center justify-center px-2 pt-4 pb-0 min-h-72 rounded-xl ${card.className}`}
                  >
                    {index === 0 || index === 2 ? (
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent rounded-xl z-0" />
                    ) : null}
                    <div className="mb-auto px-2 relative z-10">
                      <h4
                        className={clsx("text-xl font-semibold", {
                          "text-neutral-100": index === 0 || index === 2,
                          "text-primary": index !== 0 && index !== 2,
                        })}
                      >
                        {card.title}
                      </h4>
                      <p
                        className={clsx("font-sans text-md mt-1", {
                          "text-neutral-200": index === 0 || index === 2,
                          "text-gray-800": index !== 0 && index !== 2,
                        })}
                      >
                        {card.text}
                      </p>
                    </div>
                    {(index === 1 || index === 3 || index === 0) &&
                    card.imgUrl ? (
                      <Image
                        src={card.imgUrl}
                        height={card.height}
                        width={card.width}
                        alt="img"
                        className={card.imgClass}
                      />
                    ) : null}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="m-8">
        <div className="flex items-center justify-center gap-2 py-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-500 ease-in-out",
                current === index ? "bg-gray-700 w-2" : "bg-primary/50"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
