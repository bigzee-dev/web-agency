import { montserrat } from "@/app/ui/fonts";

export default function AboutUsHero() {
  return (
    <section className="pt-20 pb-14 px-4 max-w-6xl mx-auto text-center">
      <h1
        className={` ${montserrat.className} max-w-6xl text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight`}
      >
        We&apos;re An{" "}
        <span className="inline-block bg-[#30b8e6] text-white px-4 py-1 rounded-md">
          Independent
        </span>{" "}
        Team Of
        <br />
        Designers, Developers & Strategists.
      </h1>
      <p className="text-gray-600 max-w-4xl mx-auto text-md md:text-base mt-6">
        As a team, we have grown and evolved significantly over the years. We
        have honed our skills and developed a seamless blend of remote and
        in-office work, implementing our efficient processes.
      </p>
    </section>
  );
}
