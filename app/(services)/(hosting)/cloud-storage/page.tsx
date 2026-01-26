import Header from "@/components/services/hosting/cloud-storage/header";
import SetupAccount from "@/components/services/hosting/cloud-storage/setup-account";
import AccessMethods from "@/components/services/hosting/cloud-storage/access-methods";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import ControlPanel from "@/components/services/hosting/cloud-storage/control-panel";
import UseCases from "@/components/services/hosting/cloud-storage/use-cases";

import Rule321 from "@/components/services/hosting/cloud-storage/321rule";
import CloudStorageSupport from "@/components/services/hosting/cloud-storage/support";
import CloudStorageFAQs from "@/components/services/hosting/cloud-storage/faqs";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Cloud Storage - Secure Storage Box | Deltaworx",
  description:
    "Professional cloud storage with SSH/FTP/SFTP access, rsync/rclone support, and modern web GUI. Secure, fast, and reliable storage from 100GB to 1TB. No bandwidth limits.",
  keywords: [
    "cloud storage Botswana",
    "storage box",
    "FTP storage",
    "SFTP storage",
    "rsync backup",
    "network drive",
    "secure file storage",
  ],
};

export default function CloudStoragePage() {
  return (
    <div>
      <Header />
      <SetupAccount />
      <PricingPlans
        plan="cloudstorage"
        display="lg:max-w-7xl lg:grid-cols-4 lg:gap-x-6"
      />
      <AccessMethods />
      <ControlPanel />
      <UseCases />
      <Rule321 />

      <CloudStorageSupport />
      <CloudStorageFAQs />
    </div>
  );
}
