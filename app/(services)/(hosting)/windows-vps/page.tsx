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
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Windows VPS - Cloud Windows Virtual Machines | Deltaworx",
  description:
    "Run Windows Server with full RDP access, high performance compute, and Microsoft applications. Support team based in Botswana",
  keywords: [
    "Windows VPS Botswana",
    "Windows Server hosting",
    "cloud Windows server",
    "RDP access",
    "Windows Server 2019",
    "Windows Server 2022",
    "Microsoft hosting",
  ],
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
