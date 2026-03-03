import HeaderVps from "@/components/services/hosting/windows-vps/header";
import GetStartedVps from "@/components/services/hosting/windows-vps/getstarted";
import VpsPricingTable from "@/components/shared/pricing/vpspricing";
import { windowsVpsPricingData } from "@/components/services/hosting/windows-vps/pricing-data";
import NeedHelpChoosing from "@/components/services/hosting/windows-vps/needhelpchoosing";
import VpsFeatures from "@/components/services/hosting/windows-vps/features";
import WindowsVersions from "@/components/services/hosting/windows-vps/versions-list";
import WhyBuyVps from "@/components/services/hosting/windows-vps/whybuyvps";
import ManageInstance from "@/components/services/hosting/windows-vps/manage";
import FaqsVps from "@/components/services/hosting/windows-vps/faqs-vps";
import Consultation from "@/components/shared/support/consultation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windows VPS for Business and Enterprise Applications | Botswana",
  description:
    "Windows VPS Hosting in Botswana. Run windows applications on our high performance virtual servers. Perfect for developers and businesses in Botswana.",
  alternates: {
    canonical: "https://deltaworx.co.bw/windows-vps",
  },
};

export default function Page() {
  return (
    <>
      <HeaderVps />
      <GetStartedVps />
      <VpsPricingTable plans={windowsVpsPricingData} />
      <NeedHelpChoosing />
      <VpsFeatures />
      <WindowsVersions />
      <ManageInstance />
      <WhyBuyVps />

      <Consultation
        text="our Windows Cloud VPS?"
        href={`${process.env.WHMCS_URL}/index.php?rp=/store/windows-vps`}
      />
      <FaqsVps />
    </>
  );
}
