import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import Link from "next/link";
interface PricingCardProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  price: number;
  originalPrice: number;
}

function PricingCard({
  logoSrc,
  logoAlt,
  title,
  price,
  originalPrice,
}: PricingCardProps) {
  return (
    <div className="flex flex-col items-start rounded-3xl bg-white px-8 py-6 text-center shadow-md">
      {/* Logo */}
      <div className="mb-4 flex h-16 items-center justify-center">
        <img
          src={logoSrc || "/placeholder.svg"}
          alt={logoAlt}
          className="max-h-full"
        />
      </div>

      {/* Title */}
      <h2 className="mb-4 text-base leading-relaxed text-gray-600">{title}</h2>

      {/* Pricing Section */}
      <div className="mb-6">
        <p className="mb-1 text-start text-sm text-gray-800">Starts at</p>
        <div className="flex flex-col items-start justify-center gap-2">
          {originalPrice > price && (
            <span className="text-lg text-gray-400 line-through">
              P{originalPrice.toFixed(2)}
            </span>
          )}
          <div>
            <span className="text-4xl font-semibold text-gray-800">
              P{price.toFixed(2)}
            </span>
            <span className="text-base text-gray-600">/year</span>
          </div>
        </div>
      </div>

      {/* Register Button */}
      <Link
        href={`${process.env.NEXT_PUBLIC_WHMCS_URL}/cart.php?a=add&domain=register`}
        className="w-full rounded-lg bg-primary px-6 py-2.5 font-semibold text-white"
      >
        Register
      </Link>
    </div>
  );
}

export default function MonthSpecials() {
  const pricingData = [
    {
      id: "com",
      logoSrc: "/img/domains/com.png",
      logoAlt: ".com",
      title: "A timeless and popular domain.",
      price: 247.0,
      originalPrice: 299.0,
    },
    {
      id: "net",
      logoSrc: "/img/domains/net.png",
      logoAlt: ".net",
      title: "Staying true to the roots",
      price: 275.0,
      originalPrice: 319.0,
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-y-12 bg-gray-50 px-4 pb-4 pt-20">
      <h2 className={sectionHeadings}> This Months Specials</h2>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {pricingData.map((card) => (
          <PricingCard
            key={card.id}
            logoSrc={card.logoSrc}
            logoAlt={card.logoAlt}
            title={card.title}
            price={card.price}
            originalPrice={card.originalPrice}
          />
        ))}
      </div>
    </main>
  );
}
