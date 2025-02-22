import { MessageSquare, CreditCard, FileText } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";

export default function WhyBuy() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={` ${montserrat.className} text-3xl md:text-4xl font-bold text-gray-800 mb-4 `}
        >
          Why Buy Domain Names at BigZee?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Hostinger offers reliable domain registration services with instant
          activation, dedicated live support, and full DNS management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 24/7 Support */}
          <div className="space-y-4">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary">
              24/7 live technical support
            </h3>
            <p className="text-muted-foreground">
              Our Customer Success team is here for you any time of the day.
              We've made our domain name registration process as easy as
              possible, but everyone needs a helping hand sometimes. Just
              contact us – we will be happy to assist.
            </p>
          </div>

          {/* Trusted Registrar */}
          <div className="space-y-4">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary">
              Trusted domain registrar
            </h3>
            <p className="text-muted-foreground">
              Hostinger is an ICANN-accredited registrar and web host trusted by
              millions of people worldwide. We offer a comprehensive
              registration service with more than 100 domain extensions so that
              you can have plenty of choices.
            </p>
          </div>

          {/* Instant Setup */}
          <div className="space-y-4">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary">
              Instant setup and easy control
            </h3>
            <p className="text-muted-foreground">
              Once you complete your domain search, we'll guide you through the
              website domain registration process. It only takes a few clicks,
              and no technical knowledge is required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
