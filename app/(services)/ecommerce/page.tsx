import EcommerceHeader from "@/components/services/ecommerce/header";
import Development from "@/components/services/ecommerce/development";
import Shopify from "@/components/services/ecommerce/shopify";
import WooCommerce from "@/components/services/ecommerce/woocommerce";
import PaymentGateways from "@/components/services/ecommerce/paymentgateways";
import StartToday from "@/components/services/ecommerce/start-today";
import Consultation from "@/components/shared/support/consultation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Development - Online Store Solutions | Botswana",
  description:
    "Build your online store with Deltaworx. E-commerce development using Shopify, WooCommerce, and custom solutions. Payment gateway integration, secure checkout, and full support in Botswana.",
  alternates: {
    canonical: "https://deltaworx.co.bw/ecommerce",
  },
};

const ecommerceText = "an eCommerce store?";

export default function Ecommerce() {
  return (
    <div className="pb-20">
      <EcommerceHeader />
      <Development />
      <Shopify />
      <WooCommerce />
      <PaymentGateways />
      <StartToday />
      <Consultation text={ecommerceText} href="#" />
      {/* <Faqs /> */}
    </div>
  );
}
