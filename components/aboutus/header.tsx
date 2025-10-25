import { montserrat } from "@/app/ui/fonts";

export default function AboutUsHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 pt-20 text-center">
      <h1
        className={` ${montserrat.className} max-w-6xl text-4xl font-semibold leading-tight text-gray-800 md:text-5xl lg:text-6xl`}
      >
        A{" "}
        <span className="inline-block rounded-md bg-[#30b8e6] px-4 py-1 text-white">
          Focused
        </span>{" "}
        Team Fueled by Passion for Technology and Real-World Impact
        <br />
      </h1>
      <p className="mx-auto mt-6 max-w-4xl text-md text-gray-600 md:text-lg">
        We bring together creativity, technology, and purpose to build digital
        solutions that make a difference.
      </p>
    </section>
  );
}
