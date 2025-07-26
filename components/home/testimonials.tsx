import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { montserrat } from "@/app/ui/fonts";
import { sectionSubHeadings } from "@/app/ui/customTailwindClasses";

interface Testimonial {
  quote: string;
  name: string;

  metric: string;
  metricLabel: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "With most people browsing the internet on their phones, all our projects are built to look great and work perfectly on all mobile devices.",
    name: " Mobile Friendly",
    metric: "100%",
    metricLabel: "Mobile responsiveness across all builds",
    image: "/img/home/coding.jpg",
  },
  {
    quote:
      "Have a question or need assistance? Our team is available every day with quick, helpful replies. No tech jargon, just clear answers.",
    name: "Support Availability",

    metric: "24/7",
    metricLabel: "We’re Here When You Need Us",
    image: "/img/tech-man.jpg",
  },
  {
    quote:
      "We use fast, secure servers with a 99.9% uptime guarantee — so your business stays online and ready for customers.",
    name: "Uptime Guarantee",

    metric: "99.9%",
    metricLabel: "Online. All the Time.",
    image: "/svg/hosting/hosting-servers.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      {/* Main content */}
      <div className="x-padding mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <Badge className="mb-4 bg-primary/20 text-sm text-blue-600 hover:bg-primary/20">
            Customer Testimonials
          </Badge>
          <h2
            className={` ${montserrat.className} mb-6 text-3xl font-bold tracking-normal text-gray-900 md:text-4xl lg:text-5xl`}
          >
            Your Competitors are online,
            <br />
            why aren&apos;t you?
          </h2>
          <p className={sectionSubHeadings}>
            Join Hundreds of Businesses Already Winning with Deltaworx.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="rounded-2xl bg-gray-200/65">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div className="mb-4 flex items-center gap-4 justify-self-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-300">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3
                      className={` ${montserrat.className} text-2xl font-semibold text-gray-900`}
                    >
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
                <p className="mb-4 text-md leading-6 text-gray-700">
                  {testimonial.quote}
                </p>

                <div className="border-t border-gray-400/70 pt-4">
                  <div className="mb-1 text-4xl font-bold text-primary">
                    {testimonial.metric}
                  </div>
                  <p className="font-sans text-xs font-medium text-gray-800">
                    {testimonial.metricLabel}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
