import { Inter } from "next/font/google";
import { Expletus_Sans } from "next/font/google"; /* this font is used for the logo */
import { Montserrat } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Cairo } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const notoSans = Noto_Sans({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const expletus = Expletus_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const cairo = Cairo({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});
