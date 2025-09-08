import Header from "@/components/services/hosting/web-hosting/header";
import SetupAccount from "@/components/services/hosting/web-hosting/setup-account";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import HostingFeatures from "@/components/services/hosting/web-hosting/features";
import LogoPanel from "@/components/services/hosting/web-hosting/logo-panel";
import StartToday from "@/components/services/ecommerce/start-today";
import SupportOne from "@/components/shared/support/support-one";
import FaqsWebsites from "@/components/services/hosting/web-hosting/faqs";

export default function Page() {
  return (
    <div>
      <Header />
      <SetupAccount />
      <PricingPlans plan="hosting" />
      <HostingFeatures />
      <LogoPanel />
      <StartToday />
      <SupportOne />
      <FaqsWebsites />
    </div>
  );
}
