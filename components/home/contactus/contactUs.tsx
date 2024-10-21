"use client";

import { useState } from "react";
import Form from "./form";

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
      <div className="flex flex-col items-center w-full py-10">
        <h2 className="text-neutral-100 text-4xl font-bold mb-6 bg-blue-600 max-w-fit transform -rotate-2">
          Contact Us
        </h2>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          Get in touch with our team and find out what solution best fits for
          you.
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
