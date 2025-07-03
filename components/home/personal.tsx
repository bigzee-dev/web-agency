import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";

export default function Personal() {
  return (
    <div className="x-padding mx-auto border-y border-gray-400 bg-primary/5 px-4 py-12 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
        <div className="space-y-4">
          <h2
            className={` ${montserrat.className} text-4xl font-medium tracking-tight text-gray-900 md:text-5xl lg:text-6xl`}
          >
            <span className="block">Honest.</span>
            <span className="block">Reliable.</span>
            <span className="block md:text-primary">Personal.</span>
          </h2>
        </div>
        <div className="space-y-6 border-l border-gray-400 pl-8 md:pl-12">
          <h3
            className={` ${montserrat.className} text-2xl font-semibold tracking-tight text-primary md:text-3xl md:text-gray-900`}
          >
            Doing things differently since day one.
          </h3>
          <div className="space-y-4 font-sans text-md leading-relaxed text-gray-600">
            <p>
              Krystal is, and always will be, fiercely independent. We set out
              to challenge the big faceless hosting corporations, and we&apos;ll
              never sell to them or anyone else. We choose exactly how we
              operate and forge our own path, creating a premium service
              that&apos;s uncompromisingly good for our clients and for the
              planet.
            </p>
            <p>
              Our clients love us because of our unwavering commitment to
              service, ethics and quality, and this can be seen throughout our
              entire operations. From our clear and fair pricing to our
              custom-built infrastructure and award-winning support.
            </p>
          </div>
          <Button
            size="lg"
            className={` ${btnDimensions} bg-primary text-neutral-100`}
          >
            About us
          </Button>
        </div>
      </div>
    </div>
  );
}
