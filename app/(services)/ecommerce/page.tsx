import EcommerceHeader from "@/components/services/ecommerce/header";
import Development from "@/components/services/ecommerce/development";
import Shopify from "@/components/services/ecommerce/shopify";
import WooCommerce from "@/components/services/ecommerce/woocommerce";
import PaymentGateways from "@/components/services/ecommerce/paymentgateways";
import SupportOne from "@/components/shared/support/support-one";
import Faqs from "@/components/services/ecommerce/faqs";

export default function Ecommerce() {
  return (
    <div className="pb-20">
      <EcommerceHeader />
      <Development />
      <Shopify />
      <WooCommerce />
      <PaymentGateways />
      <SupportOne />
      <Faqs />
    </div>
  );
}
