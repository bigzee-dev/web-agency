import Image from "next/image";

export default function DigitalRealEstate() {
  return (
    <div className="grid grid-cols-12 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl max-w-7xl mx-auto  mt-20 border border-gray-300">
      <div className="relative h-full col-span-4">
        <Image
          src="/img/domains/domain-design.jpg"
          alt="img"
          fill
          className="object-cover rounded-l-2xl"
        />
      </div>
      <div className="col-span-8 text-center p-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Your domain is your digital real estate
        </h3>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Just like prime real estate in the physical world, premium domains in
          the digital space command attention, drive traffic, and build lasting
          value. Every day without the right domain is a missed opportunity to
          strengthen your brand, improve your search rankings, and connect with
          your target audience.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">73%</div>
            <p className="text-sm text-muted-foreground">
              of consumers judge credibility based on domain quality
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2.5x</div>
            <p className="text-sm text-muted-foreground">
              higher click-through rates with branded domains
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">46%</div>
            <p className="text-sm text-muted-foreground">
              increase in brand recall with memorable domains
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
