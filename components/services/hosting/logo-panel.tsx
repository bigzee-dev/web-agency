"use client";
import React, { useEffect, useRef } from "react";
import styles from "./logopanels.module.css";

const logos = [
  { src: "/svg/hosting/cpanel.svg", alt: "cpanel", className: "h-44" },
  { src: "/svg/hosting/wordpress.svg", alt: "wordpress", className: "h-52" },
  { src: "/svg/hosting/nodejs.svg", alt: "nodejs", className: "h-36" },
  { src: "/svg/hosting/php.svg", alt: "php", className: "h-36" },
  { src: "/svg/hosting/mysql.svg", alt: "mysql", className: "h-36" },
  { src: "/svg/hosting/html5.svg", alt: "html5", className: "h-24" },
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
      }, 5000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`x-padding max-w-7xl mx-auto ${styles.carouselContainer}`}>
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
