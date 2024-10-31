import { Inter } from "next/font/google";
import { Expletus_Sans } from "next/font/google"; /* this font is used for the logo */
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const expletus = Expletus_Sans({
  subsets: ["latin"],
  display: "swap",
});
