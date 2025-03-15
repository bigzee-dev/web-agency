"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { expletus } from "@/app/ui/fonts";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { DropdownMenu } from "./dropdown-menu";
import { Separator } from "@/components/ui/separator";

const iconProps = {
  size: "1.4em",
  strokeWidth: 1,
};

const navigation = [
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Our Process", href: "#" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="x-padding w-full sticky top-0 bg-background z-50  text-neutral-100">
      <div className="max-w-7xl mx-auto py-2.5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 text-2xl">
          <div className="flex items-center h-[45px]">
            <Image
              src="/img/logo/bigzee-full-logo-color.png"
              height={75}
              width={400}
              alt="svg"
              className="object-cover  h-full w-auto"
            />
          </div>
          {/* <h6
            className={` ${expletus.className} tracking-wider font-extrabold text-gray-900`}
          >
            bigZee
          </h6> */}
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex justify-around lg:gap-x-14">
            {/* {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-secondary text-md font-semibold"
              >
                {item.name}
              </a>
            ))} */}
            <DropdownMenu />
          </div>

          <div className="flex items-center justify-center bg-primary font-sans text-md rounded-4xl px-4 py-2">
            <a
              href="https://domains.bigzee.app"
              className="text-md font-sans font-medium text-center text-neutral-100"
            >
              Client Login
            </a>
          </div>
        </div>

        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 text-neutral-200 bg-gray-800 z-50 lg:hidden overflow-hidden"
            style={{ maxWidth: "100vw" }}
          >
            <div className="container mx-auto px-6 md:px-8 py-4 flex flex-col h-full">
              <div className="flex justify-end">
                <button onClick={toggleMenu} aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
