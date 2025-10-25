"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
    name: "Marvin McKinney",
    title: "Founder",
    image: "/img/tech-laptop.jpg",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    name: "Jane Cooper",
    title: "CEO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "Robert Johnson",
    title: "CTO",
    image: "/placeholder.svg?height=400&width=400",
  },
];

export function ClientTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="to transparent w-full bg-gradient-to-b from-neutral-200/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2
              className={` ${montserrat.className} max-w-6xl text-4xl font-bold leading-tight text-gray-800 md:text-5xl`}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Clients
              </span>{" "}
              Review
            </h2>
            <p className="mt-4 text-lg text-gray-700 md:text-xl">
              We have worked with thousands of amazing people
            </p>
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={goToPrevious}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-400 bg-primary p-2 text-neutral-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-400 bg-primary p-2 text-neutral-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="w-full md:w-1/3">
            <div className="h-[350px] overflow-hidden rounded-lg bg-amber-100">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                width={667}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center md:w-2/3">
            <blockquote className="fobt-medium mb-8 text-xl italic text-gray-700 md:text-xl">
              &quot;{currentTestimonial.quote}&quot;
            </blockquote>
            <div>
              <h3 className="font-sans text-xl font-bold text-gray-900 md:text-xl">
                {currentTestimonial.name}
              </h3>
              <p className="font-sans text-gray-600">
                {currentTestimonial.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
