"use client";
import React, { useEffect, useRef } from "react";
import styles from "./logopanels.module.css";
import { montserrat } from "@/app/ui/fonts";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const logos = [
  { src: "/svg/hosting/cpanel.svg", alt: "cpanel", className: "h-36" },
  { src: "/svg/hosting/wordpress.svg", alt: "wordpress", className: "h-48" },
  { src: "/svg/hosting/nodejs.svg", alt: "nodejs", className: "h-28" },
  { src: "/svg/hosting/php.svg", alt: "php", className: "h-32" },
  { src: "/svg/hosting/mysql.svg", alt: "mysql", className: "h-32" },
  { src: "/svg/hosting/html5.svg", alt: "html5", className: "h-20" },
];

export default function LogoPanel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    let interval: NodeJS.Timeout;

    if (track) {
      interval = setInterval(() => {
        track.style.transition = "transform 0.4s ease-in-out";
        track.style.transform = `translateX(-20%)`; // Move by one item width (20%)

        setTimeout(() => {
          track.appendChild(track.firstElementChild as Node);
          track.style.transition = "none";
          track.style.transform = `translateX(0)`;
        }, 500);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, []);

  const swiperContStyles =
    "flex items-center justify-center h-40 max-w-lg rounded-xl border  border-gray-400 bg-neutral-200/50 p-9 shadow-md";

  return (
    <div
      className={`x-padding mx-auto max-w-7xl pb-2 pt-20 ${styles.carouselContainer}`}
    >
      <h3
        className={` ${montserrat.className} mb-2 w-full text-center text-4xl font-bold text-gray-900`}
      >
        Deploy your favourite Apps and CMS
      </h3>
      {/* Carousel Track for desktops*/}
      <div
        ref={trackRef}
        className={` ${styles.carouselTrack} hidden gap-x-6 px-4 md:block md:gap-x-0 md:px-0`}
      >
        {logos.map((logo, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={logo.src} alt={logo.alt} className={logo.className} />
          </div>
        ))}
      </div>
      {/* Carousel Track for mobile */}
      <div className="x-auto relative mx-auto mt-8 max-w-lg sm:mt-12 md:hidden">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 2500 }}
          modules={[Autoplay, EffectCoverflow]}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className={swiperContStyles}>
                <img src={logo.src} alt={logo.alt} className={logo.className} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
