import HeaderVps from "@/components/services/hosting/linux-vps/header";
import GetStartedVps from "@/components/services/hosting/linux-vps/getstarted";
import PricingVpsTable from "@/components/services/hosting/linux-vps/pricing-vps";
import VpsFeatures from "@/components/services/hosting/linux-vps/features";
import LinuxDistributions from "@/components/services/hosting/linux-vps/os-list";
import WhyBuyVps from "@/components/services/hosting/linux-vps/whybuyvps";
import FaqsVps from "@/components/services/hosting/linux-vps/faqs-vps";
import Consultation from "@/components/shared/support/consultation";

export default function Page() {
  return (
    <>
      <HeaderVps />
      <GetStartedVps />
      <PricingVpsTable />
      <VpsFeatures />
      <LinuxDistributions />
      <WhyBuyVps />
      <Consultation text="our Linux VPS service?" />
      <FaqsVps />
    </>
  );
}
