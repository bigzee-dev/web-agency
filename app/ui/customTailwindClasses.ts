import { montserrat } from "@/app/ui/fonts";

export const pageHeadings = ` ${montserrat.className} text-gray-800 text-4xl md:text-6xl font-bold glb-headings-lineheight`;
export const sectionHeadings = ` ${montserrat.className} text-gray-800 text-4xl md:text-5xl font-bold`;
export const smallTextHeadings =
  "text-center text-base/7 font-semibold text-blue-600";

export const btnDimensions =
  "font-sans text-center py-2 px-3 w-max min-w-52 text-md font-semibold rounded-md";

export const primaryButton = ` ${btnDimensions} text-white bg-primary`;

export const grayButton = ` ${btnDimensions} text-white bg-gray-800`;

export const whiteButton = ` ${btnDimensions} text-blue-950  bg-neutral-200`;

export const greenButton = ` ${btnDimensions} text-gray-900 bg-blue-400`;
