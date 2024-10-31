"use client";

import { useState } from "react";
import Form from "./form";
import { montserrat } from "@/app/ui/fonts";

const labelStyles = "block text-sm leading-6 text-gray-700 font-medium";
const inputStyles = "mt-1 text-gray-900";

export default function ContactUsForm({
  backgroundImage = "/img/fullwidth.jpg?height=1400&width=6997",
  overlayOpacity = 0.7,
}: {
  backgroundImage?: string;
  overlayOpacity?: number;
}) {
  return (
    <div className="relative w-full max-w-[1800px] mx-auto">
      <div className="flex flex-col items-center w-full pt-14 pb-10">
        <h2 className="text-center text-base/7 font-semibold text-blue-600">
          Contact Us
        </h2>
        <p
          className={` ${montserrat.className} mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl `}
        >
          Get in touch with us and lets discuss your project
        </p>
      </div>

      <div className="grid grid-cols-1">
        {/* Background Image */}
        <div
          className="col-start-1 row-start-1 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Overlay */}
        <div
          className="col-start-1 row-start-1 w-full h-full bg-gray-900 bg-opacity-90"
          // style={{ opacity: overlayOpacity }}
        >
          {/* Content */}
          <div className="w-full h-full flex items-center justify-center py-10 min-h-[300px]">
            <div className="grid grid-cols-1 justify-items-center w-full max-w-4xl mx-auto">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
