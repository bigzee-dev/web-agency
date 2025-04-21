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
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2
            className={` ${montserrat.className} max-w-6xl text-4xl md:text-5xl font-bold text-gray-800 leading-tight`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 text-transparent bg-clip-text">
              Clients
            </span>{" "}
            Review
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            We have worked with thousands of amazing people
          </p>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={goToPrevious}
            className="flex items-center justify-center h-12 w-12  p-2 rounded-xl border border-gray-400 hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="flex items-center justify-center h-12 w-12 p-2 rounded-xl border border-gray-400 hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/3">
          <div className="rounded-lg overflow-hidden bg-amber-100  h-[350px]">
            <Image
              src={currentTestimonial.image || "/placeholder.svg"}
              alt={currentTestimonial.name}
              width={667}
              height={1000}
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <blockquote className="text-xl md:text-xl text-gray-700 fobt-medium italic mb-8">
            "{currentTestimonial.quote}"
          </blockquote>
          <div>
            <h3 className="font-sans text-xl md:text-xl font-bold text-gray-900">
              {currentTestimonial.name}
            </h3>
            <p className="font-sans text-gray-600">
              {currentTestimonial.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
