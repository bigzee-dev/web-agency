import EcommerceHeader from "@/components/services/ecommerce/header";
import Development from "@/components/services/ecommerce/development";
import Shopify from "@/components/services/ecommerce/shopify";
import WooCommerce from "@/components/services/ecommerce/woocommerce";
import PaymentGateways from "@/components/services/ecommerce/paymentgateways";
import Consultation from "@/components/services/hosting/consultation";
import Faqs from "@/components/services/ecommerce/faqs";

export default function Ecommerce() {
  return (
    <div className="pb-20">
      <EcommerceHeader />
      <Development />
      <Shopify />
      <WooCommerce />
      <PaymentGateways />
      <Consultation />
      <Faqs />
    </div>
  );
}
