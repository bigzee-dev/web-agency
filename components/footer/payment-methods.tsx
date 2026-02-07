import Image from "next/image";

const paymentMethods = [
  {
    name: "Bank Transfer",
    logo: "/paymentmethods/fnb-logo.svg",
    alt: "FNB Bank Transfer",
  },
  {
    name: "PayPal",
    logo: "/paymentmethods/paypal-icon.svg",
    alt: "PayPal",
  },
  {
    name: "Orange Money",
    logo: "/paymentmethods/omoney-logo.png",
    alt: "Orange Money",
  },
];

export default function PaymentMethods() {
  return (
    <div className="w-full border-t border-gray-600 px-8">
      <div className="mx-auto max-w-5xl py-5">
        <h3 className="mb-4 text-center text-xs font-medium tracking-wider text-neutral-300">
          We Accept These Payment Methods
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {paymentMethods.map((method) => (
            <div key={method.name} className="flex items-center gap-x-2">
              <Image
                src={method.logo}
                alt={method.alt}
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm font-medium text-neutral-300">
                {method.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
