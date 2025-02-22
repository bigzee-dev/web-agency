import { Button } from "@/components/ui/button";
import { btnDimensions } from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
export default function NeedMore() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h2
        className={` ${montserrat.className} mb-4 text-4xl font-medium tracking-tight text-gray-800 `}
      >
        Need more? Get a custom plan
      </h2>
      <p className="mb-8 text-gray-600">
        If you need more than 50 email accounts or want Private Email for more
        than 20 domains, reach out, and one of our team will create a custom
        plan for your business.
      </p>
      <Button
        size="lg"
        className={` ${btnDimensions} bg-primary text-white hover:bg-blue-500 px-8 `}
      >
        Get in touch
      </Button>
    </section>
  );
}
