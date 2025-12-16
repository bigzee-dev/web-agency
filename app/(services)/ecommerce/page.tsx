import EcommerceHeader from "@/components/services/ecommerce/header";
import Development from "@/components/services/ecommerce/development";
import Shopify from "@/components/services/ecommerce/shopify";
import WooCommerce from "@/components/services/ecommerce/woocommerce";
import PaymentGateways from "@/components/services/ecommerce/paymentgateways";
import StartToday from "@/components/services/ecommerce/start-today";
import Consultation from "@/components/shared/support/consultation";
// import Faqs from "@/components/services/ecommerce/faqs";

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
      <Consultation text={ecommerceText} />
      {/* <Faqs /> */}
    </div>
  );
}
