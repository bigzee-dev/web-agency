"use client";
import React, { useEffect, useRef } from "react";
import styles from "./logopanels.module.css";
import {
  sectionSubHeadings,
  smallTextHeadings,
} from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";

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

  return (
    <div
      className={`x-padding mx-auto max-w-7xl pb-8 pt-20 ${styles.carouselContainer}`}
    >
      <h3
        className={` ${montserrat.className} mb-2 w-full text-center text-4xl font-bold text-gray-900`}
      >
        Deploy your favourite Apps and CMS
      </h3>
      <div ref={trackRef} className={styles.carouselTrack}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={logo.src} alt={logo.alt} className={logo.className} />
          </div>
        ))}
      </div>
    </div>
  );
}
