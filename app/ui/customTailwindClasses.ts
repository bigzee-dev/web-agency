import { montserrat } from "@/app/ui/fonts";

export const pageHeadings = ` ${montserrat.className} text-gray-900 text-5xl md:text-6xl font-bold glb-headings-lineheight text-center lg:text-left`;
export const pageHeadingsCenter = ` ${montserrat.className} text-gray-900 text-5xl md:text-6xl font-bold glb-headings-lineheight text-center`;
export const sectionHeadings = ` ${montserrat.className} text-gray-900 text-4xl md:text-5xl font-bold`;
export const longSectionHeadings = ` ${montserrat.className} text-gray-900 text-3xl md:text-4xl font-bold`;

export const smallTextHeadings =
  "text-center text-base/7 font-semibold text-blue-600";

export const sectionSubHeadings =
  "text-[1.05rem] leading-relaxed text-gray-600";

export const btnDimensions =
  "text-center font-sans py-2.5 md:py-[0.72rem] px-3 w-max min-w-44 text-base font-medium md:text-[1.01rem]  rounded-[0.63rem] hover:pointer";

export const primaryButton = ` ${btnDimensions} text-white bg-primary`;

export const grayButton = ` ${btnDimensions} text-white bg-gray-800`;

export const whiteButton = ` ${btnDimensions} text-secondary bg-[#faf9f5] font-medium`;

export const greenButton = ` ${btnDimensions} text-gray-900 bg-blue-400`;
