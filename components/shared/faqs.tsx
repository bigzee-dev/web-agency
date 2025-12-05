import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/faqs/faqs-accordion";

interface Faq {
  title: string;
  answer: string;
}

interface FaqsProps {
  faqs: Faq[];
  heading?: string;
  subheading?: React.ReactNode;
}

export default function Faqs(props: FaqsProps) {
  const { faqs, heading = "Frequently asked questions", subheading } = props;

  const defaultSubheading = (
    <>
      Can’t find the answer you’re looking for? Reach out to our{" "}
      <a href="/contact-us" className="text-blue-600">
        customer support
      </a>{" "}
      team.
    </>
  );

  return (
    <div className="x-padding">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-20 gap-y-5 py-24 md:grid-cols-12">
        <div className="col-span-1 pt-2 md:col-span-6">
          <h3 className="text-4xl font-bold text-gray-800">{heading}</h3>
          <p className="mt-4 text-gray-600">
            {subheading ?? defaultSubheading}
          </p>
        </div>
        <div className="col-span-1 md:col-span-6">
          <Accordion
            type="single"
            collapsible
            defaultValue={faqs.length > 0 ? `item-0` : undefined}
            className="w-full"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                <AccordionContent>
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
