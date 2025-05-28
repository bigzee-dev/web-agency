import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";

export default function Personal() {
  return (
    <div className="x-padding mx-auto px-4 py-12 md:py-20 border-y border-gray-400 bg-primary/5">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:gap-16 max-w-6xl mx-auto">
        <div className="space-y-4">
          <h2
            className={` ${montserrat.className} text-4xl text-gray-800 font-medium tracking-tight md:text-5xl lg:text-6xl`}
          >
            <span className="block">Honest.</span>
            <span className="block">Reliable.</span>
            <span className="block">Personal.</span>
          </h2>
        </div>
        <div className="pl-12 space-y-6 border-l border-gray-400">
          <h3
            className={` ${montserrat.className} text-3xl font-medium tracking-tight md:text-4xl`}
          >
            Doing things differently since day dot.
          </h3>
          <div className="font-sans space-y-4 leading-relaxed text-gray-600">
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
