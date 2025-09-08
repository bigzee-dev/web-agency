import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq {
  title: string;
  answer: string;
}

interface FaqsProps {
  faqs: Faq[];
  heading?: string;
  subheading?: string;
}

export default function Faqs({
  faqs,
  heading = "Frequently asked questions",
  subheading = "Can’t find the answer you’re looking for? Reach out to our customer support team.",
}: FaqsProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-12 gap-x-20 py-16">
      <div className="col-span-6">
        <h3 className="text-4xl font-bold text-gray-800">{heading}</h3>
        <p className="mt-4 text-gray-600">{subheading}</p>
      </div>
      <div className="col-span-6">
        <Accordion
          type="single"
          collapsible
          defaultValue={faqs.length > 0 ? `item-0` : undefined}
          className="w-full"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
