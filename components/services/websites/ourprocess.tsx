import Image from "next/image";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";

const processSteps = [
  {
    number: "/ 01",
    title: "Discover",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...",
  },
  {
    number: "/ 02",
    title: "Build",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...",
  },
  {
    number: "/ 03",
    title: "Deliver",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum reprehenderit in voluptate velit esse cillum dolore...",
  },
];

export default function OurProcess() {
  return (
    <div className="x-padding h-full w-full px-4 py-14 md:py-16">
      <div className="mx-auto md:max-w-6xl">
        <div className="max-full mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="order-1 flex-1 md:order-2">
            <h2 className={`text-gray-900 ${sectionHeadings} mb-3`}>
              Our Process
            </h2>
            <h5 className="font-sans text-2xl font-medium text-secondary md:text-3xl">
              From idea to launch, our process gets your website online — fast
              and flawlessly.
            </h5>
          </div>

          <div className="order-2 flex flex-1 items-center justify-center overflow-clip py-4 md:order-1 md:justify-start md:px-0 md:py-0">
            <Image
              src="/img/process-numbers.png"
              alt="img"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 font-sans md:grid-cols-3">
          {processSteps.map((step, idx) => (
            <div key={idx}>
              <div className="text-lg font-light text-gray-500">
                {step.number}
              </div>
              <div className="mt-2">
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {step.title}
                </h3>
                <p className="font-sans text-md leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
