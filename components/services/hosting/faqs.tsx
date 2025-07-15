import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqsWebsites() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-12 gap-x-20 pb-4 pt-20">
      <div className="col-span-6">
        <h3 className="text-4xl font-bold text-gray-800">
          Frequently asked questions
        </h3>
        <p className="mt-4 text-gray-600">
          Can’t find the answer you’re looking for? Reach out to our{" "}
          <span className="text-blue-700">customer support</span> team.
        </p>
      </div>
      <div className="col-span-6">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              A domain name is the online address for your website. The IP
              address is a unique string of numbers and other characters that is
              used across the Internet to access websites from any device or
              location. Think of a domain like a contact number in your phone.
              Instead of typing a series of complicated numbers (IP address)
              into a browser, you type in a domain name. A domain name can be
              followed by many unique TLDs, giving you a chance to stand out
              online.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              A domain name is the online address for your website. The IP
              address is a unique string of numbers and other characters that is
              used across the Internet to access websites from any device or
              location. Think of a domain like a contact number in your phone.
              Instead of typing a series of complicated numbers (IP address)
              into a browser, you type in a domain name. A domain name can be
              followed by many unique TLDs, giving you a chance to stand out
              online.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
