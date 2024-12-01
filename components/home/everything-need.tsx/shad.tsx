import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { slides } from "./card-content";
import Image from "next/image";

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl mx-auto mt-12"
    >
      <CarouselContent className="">
        {slides.map((card, index) => (
          <CarouselItem className="flex justify-center basis-1/2 md:basis-1/3 lg:basis-1/3">
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center p-2 max-w-[370px]">
                  <div className="relative">
                    <Image
                      src="/img/tech-man.jpg"
                      alt="img"
                      width={667}
                      height={1000}
                      className="w-full h-full rounded-2xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950 to-90% rounded-2xl z-0" />
                    <div className="absolute bottom-0 left-0 height-[50%] bg-red-600"></div>
                    hello
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
