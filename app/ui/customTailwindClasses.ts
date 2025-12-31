import { montserrat } from "@/app/ui/fonts";

export const pageHeadings = ` ${montserrat.className} text-gray-900 text-5xl md:text-6xl font-bold glb-headings-lineheight text-center`;
export const pageHeadingsCenter = ` ${montserrat.className} text-gray-900 text-5xl md:text-6xl font-bold glb-headings-lineheight text-center`;
export const sectionHeadings = ` ${montserrat.className} text-gray-900 text-4xl md:text-5xl font-bold`;
export const longSectionHeadings = ` ${montserrat.className} text-gray-800 text-[2.5rem] md:text-4xl font-bold`;

export const smallTextHeadings = "text-center text-base/7 font-semibold";

export const sectionSubHeadings = "text-lg leading-relaxed text-gray-600";

export const btnDimensions =
  "text-center font-sans py-2.5 md:py-[0.72rem] px-3 min-w-48 md:w-max md:min-w-44 text-base font-medium md:text-[1.01rem]  rounded-[0.63rem] hover:pointer";

export const primaryButton = ` ${btnDimensions} text-white bg-primary`;

export const grayButton = ` ${btnDimensions} text-white bg-[#2a3441]`;

export const whiteButton = ` ${btnDimensions} bg-[#faf9f5]/95 text-secondary`;

export const greenButton = ` ${btnDimensions} bg-blue-300 text-gray-900`;

export const transparentButton = ` ${btnDimensions} text-neutral-100 border border-neutral-300/50 bg-blue-300/10`;

export const lightBgButton = ` ${btnDimensions} text-primary  bg-[#faf9f5]/95 shadow-[inset_0_0_0_1px_#005878]`;
