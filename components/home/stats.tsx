import {
  sectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import { Badge } from "../ui/badge";

export default function Stats() {
  const stats = [
    {
      title: "Mobile Friendly",
      value: "100%",
      label: "Mobile responsiveness across all builds",
    },
    {
      title: "Botswana Based Support",
      value: "24/7",
      label: "We’re Here When You Need Us",
    },
    {
      title: "Uptime Guarantee",
      value: "99.9%",
      label: "Online. All the Time.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-transparent via-neutral-200/10 to-neutral-200/50 py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <Badge className="mb-4 bg-primary/20 text-sm text-blue-600 hover:bg-primary/20">
            Our Track Record
          </Badge>
          <h2 className={sectionHeadings}>
            {" "}
            Your Competitors are online,
            <br />
            why aren&apos;t you?
          </h2>
          <p className={sectionSubHeadings}>
            Join Hundreds of Businesses Already Winning with Deltaworx.
          </p>
        </div>

        <div className="grid gap-12 divide-y divide-gray-400 *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          {stats.map((stat, idx) => (
            <div className="space-y-4 px-3" key={idx}>
              {/* <span className="font-sans text-sm font-medium text-secondary">
                {stat.title}
              </span> */}
              <div className="text-6xl font-bold text-primary">
                {stat.value}
              </div>

              <p className="text-md text-secondary">
                <strong>{stat.title}: </strong>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
