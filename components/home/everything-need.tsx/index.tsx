"use client";

// import { Smartphone } from "lucide-react";
// import { Monitor } from "lucide-react";
// import { LaptopMinimal } from "lucide-react";
import Slide from "./slide";
import CarouselSize from "./shad";

export default function EverythingCarousel() {
  return (
    // <div className="flex flex-row gap-4 w-[600px] mx-auto overflow-x-auto scrollbar-thin p-2 cursor-grab active:cursor-grabbing touch-pan-x ">
    //   {cards.map((card, index) => (
    //     <Card className="min-h-[500px] min-w-[350px] inline-block">
    //       <CardContent
    //         className={`relative flex flex-col items-center justify-center px-2 py-6 min-h-[500px] rounded-xl ${card.className}`}
    //       >
    //         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 to-90% rounded-xl z-0" />

    //         <div className="mt-auto px-2 relative z-10">
    //           <h4 className="text-xl font-semibold text-neutral-200 pb-1 border-b border-gray-400">
    //             {card.title}
    //           </h4>
    //           <p className="font-sans text-md mt-4 text-gray-300">
    //             {card.text}
    //           </p>
    //         </div>
    //         {/* {index === 0 ? (
    //                   <div className="flex gap-6 max-w-[75%] mx-auto text-indigo-600 pb-11 z-10">
    //                     <Monitor size="3.2em" strokeWidth={1.5} />
    //                     <Smartphone size="3.2em" strokeWidth={1.5} />
    //                     <LaptopMinimal size="3.2em" strokeWidth={1.5} />
    //                   </div>
    //                 ) : null} */}
    //         {/* {(index === 1 || index === 3) && card.imgUrl ? (
    //             <Image
    //               src={card.imgUrl}
    //               height={card.height}
    //               width={card.width}
    //               alt="img"
    //               className={card.imgClass}
    //             />
    //           ) : null} */}
    //       </CardContent>
    //     </Card>
    //   ))}
    // </div>
    <>
      <CarouselSize />
    </>
  );
}
