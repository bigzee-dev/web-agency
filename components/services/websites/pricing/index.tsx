import PlansInfo from "./plans-info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import { oneTimePlans, monthlyPlans } from "./plansdata";

export default function PricingWebsites() {
  return (
    <div className="x-padding relative isolate mx-auto max-w-6xl py-20 pb-16">
      {/* Blur component for background effect */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[rgb(37,192,235)] to-[#89b9fc] opacity-15"
        />
      </div>
      {/* Heading */}
      <section>
        <h4 className={`text-gray-900 ${sectionHeadings} mb-6`}>
          Pricing Plans
        </h4>
      </section>
      {/* Top Border */}
      <div className="relative">
        <div className="h-px w-full bg-gray-400" />
        <div className="absolute left-0 top-0 h-px w-16 bg-white" />
        <div className="absolute left-0 top-0 h-px w-10 bg-black" />
        <div className="absolute left-0 top-0 flex items-center gap-2 pt-5"></div>
      </div>
      <Tabs defaultValue="onetime" className="mt-4">
        <TabsList>
          <TabsTrigger value="onetime">One-Time</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
        <TabsContent value="onetime">
          <PlansInfo plans={oneTimePlans} />
        </TabsContent>
        <TabsContent value="monthly" className="relative">
          <div className="absolute left-0 top-0 text-xs text-gray-600">
            <span className="text-gray-900">*</span> Monthly Payment Plans
            subject to a 12 month contract
          </div>
          <PlansInfo plans={monthlyPlans} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
