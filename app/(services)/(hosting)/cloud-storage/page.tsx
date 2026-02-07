import Header from "@/components/services/hosting/cloud-storage/header";
import SetupAccount from "@/components/services/hosting/cloud-storage/setup-account";
import UseCases from "@/components/services/hosting/cloud-storage/use-cases";
import PricingPlans from "@/components/shared/pricing/pricing-plans";
import ControlPanel from "@/components/services/hosting/cloud-storage/control-panel";

import Rule321 from "@/components/services/hosting/cloud-storage/321rule";
import CloudStorageSupport from "@/components/services/hosting/cloud-storage/support";
import CloudStorageFAQs from "@/components/services/hosting/cloud-storage/faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Storage - Secure Storage Box | Botswana",
  description:
    "Secure cloud storage with SSH/FTP/SFTP access, rsync/rclone support, and modern web GUI. Backup your critical data and access it from anywhere in Botswana.",
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
      <UseCases />
      <ControlPanel />

      <Rule321 />

      <CloudStorageSupport />
      <CloudStorageFAQs />
    </div>
  );
}
