import { Inter } from "next/font/google";
import { Expletus_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const inter = Inter({ subsets: ["latin"] });
export const expletus = Expletus_Sans({ subsets: ["latin"] });
