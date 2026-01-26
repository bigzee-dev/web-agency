import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

const points = [
  <>
    Mandy Zee Investments T/A <strong>Deltaworx</strong> is a registered
    business in Botswana.
  </>,
  <>Our office is located at Plot 698 Old Mall, Maun .</>,
  <>
    We value open communication and are always here to help. You can reach us by
    phone at <strong>+267 72537524</strong>, by email at{" "}
    <strong>admin@deltaworx.co.bw</strong>, or{" "}
    <Link href="/contact-us" className="text-blue-600 hover:underline">
      send us a message
    </Link>
    .
  </>,
  <>
    You may also connect with us via our{" "}
    <Link href="#" className="text-blue-600 hover:underline">
      official social media channels
    </Link>{" "}
    for updates and inquiries.
  </>,
] as const;

export default function Inspire() {
  return (
    <section className="x-padding w-full pb-10 pt-6 md:py-20 md:pb-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-6 gap-y-12 lg:grid-cols-2 lg:gap-x-14">
          <div className="order-2 flex flex-col gap-y-7 md:order-1">
            <h1
              className={` ${montserrat.className} text-3xl font-semibold leading-tight text-secondary md:text-4xl`}
            >
              Deltaworx is your technology partner for forward-thinking and
              impactful online solutions.
            </h1>
            <ul className="list-disc space-y-2 pl-6 font-sans text-base text-gray-700">
              {points.map((point, idx) => (
                <li key={idx} className="leading-normal">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-1 h-[400px] overflow-hidden rounded-xl md:order-2 md:h-[450px] lg:h-[450px]">
            <Image
              src="/img/about-us/coding.jpg"
              alt="Team of entrepreneurs working together in a modern office space"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
