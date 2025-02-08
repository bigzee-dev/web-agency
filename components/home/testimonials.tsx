import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { montserrat } from "@/app/ui/fonts";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  metric: string;
  metricLabel: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The A/B testing helped us refine our email campaigns, resulting in a huge increase in open rates.",
    name: "Frederic Hill",
    title: "Founder & CEO",
    metric: "+ 120 %",
    metricLabel: "Increase in ad awareness in the first month",
    image: "/img/tech-lady.png",
  },
  {
    quote:
      "Our social media engagement soared within the first month of using this software.",
    name: "Safaa Sampson",
    title: "Account Executive",
    metric: "+ 10 k",
    metricLabel: "New followers in the last 4 months",
    image: "/img/tech-lady.png",
  },
  {
    quote:
      "This software allowed us to increase our lead generation, leading to a rise in conversions.",
    name: "Brendan Buck",
    title: "Marketing Manager",
    metric: "+ 50 %",
    metricLabel: "Increase in paid bookings vs last year",
    image: "/img/tech-lady.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative corner images */}
      <div className="absolute left-4 top-24">
        <div className="relative">
          <Image
            src="/img/tech-lady.png"
            alt=""
            width={80}
            height={80}
            className="rounded-full"
          />
          <svg
            className="absolute -bottom-8 -right-8 text-primary/20"
            width="90"
            height="90"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M0 0L100 100"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
      <div className="absolute right-4 bottom-0">
        <div className="relative">
          <Image
            src="/img/tech-lady.png"
            alt=""
            width={80}
            height={80}
            className="rounded-full"
          />
          <svg
            className="absolute -top-8 -left-8 text-primary/20"
            width="70"
            height="70"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M100 0L0 100"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="x-padding max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="bg-primary/20 text-sm text-blue-700 hover:bg-primary/20 mb-4">
            Customer Testimonials
          </Badge>
          <h2
            className={` ${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-normal`}
          >
            Your Competitors are automating,
            <br />
            why aren&apos;t you?
          </h2>
          <p className="text-lg text-neutral-700">
            Join Thousands of Stores Already Winning with EmailWish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-200/65 rounded-xl">
              <CardContent className="p-6">
                <p className="font-sans text-gray-700 text-lg mb-6  leading-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={58}
                    height={58}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="font-sans text-sm text-gray-700">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-300">
                  <div className="text-3xl font-bold mb-1">
                    {testimonial.metric}
                  </div>
                  <p className="font-sans text-md text-gray-700 font-medium">
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
