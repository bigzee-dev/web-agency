import HeaderVps from "@/components/services/hosting/linux-vps/header";
import GetStartedVps from "@/components/services/hosting/linux-vps/getstarted";
import VpsPricingTable from "@/components/shared/pricing/vpspricing";
import { linuxVpsPricingData } from "@/components/services/hosting/linux-vps/pricing-data";
import VpsFeatures from "@/components/services/hosting/linux-vps/features";
import LinuxDistributions from "@/components/services/hosting/linux-vps/os-list";
import WhyBuyVps from "@/components/services/hosting/linux-vps/whybuyvps";
import FaqsVps from "@/components/services/hosting/linux-vps/faqs-vps";
import Consultation from "@/components/shared/support/consultation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linux VPS Hosting - Cloud Virtual Servers | Deltaworx",
  description:
    "High-performance Linux VPS hosting in Botswana. Get dedicated resources, full root access, and choice of Ubuntu, Debian, CentOS. Scalable cloud virtual private servers with 99.9% uptime.",
  keywords: [
    "Linux VPS Botswana",
    "cloud VPS",
    "virtual private server",
    "Ubuntu server",
    "Debian hosting",
    "CentOS VPS",
    "dedicated server",
    "root access",
  ],
};

export default function Page() {
  return (
    <>
      <HeaderVps />
      <GetStartedVps />
      <VpsPricingTable plans={linuxVpsPricingData} />
      <VpsFeatures />
      <LinuxDistributions />
      <WhyBuyVps />
      <Consultation
        text="our Linux Cloud VPS?"
        href={`${process.env.WHMCS_URL}/index.php?rp=/store/linux-vps`}
      />
      <FaqsVps />
    </>
  );
}
