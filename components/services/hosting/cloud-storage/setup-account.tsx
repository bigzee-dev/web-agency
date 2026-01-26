import SetupCard from "./setup-card";
import { montserrat } from "@/app/ui/fonts";

export default function SetupAccount() {
  return (
    <div className="x-padding mx-auto max-w-7xl pt-20 md:pb-14">
      <h2
        className={` ${montserrat.className} mb-14 text-center text-3xl font-bold text-gray-900 md:text-4xl`}
      >
        Setup Your Cloud Storage in a Few Clicks
      </h2>

      <div className="grid gap-8 px-4 md:grid-cols-3 md:gap-12 md:px-0">
        <SetupCard number="01" title="Choose a Storage Plan">
          Starting small? Go with the{" "}
          <span className="font-semibold">BWP 60/mo</span> 100GB plan. Need more
          space? Select the <span className="font-semibold">BWP 180/mo</span>{" "}
          500GB plan or <span className="font-semibold">BWP 260/mo</span> 1TB
          plan. You can always upgrade as your needs grow.
        </SetupCard>

        <SetupCard number="02" title="Proceed to Checkout">
          After selecting your desired Storage Plan, proceed to checkout. Once
          you&apos;ve completed the payment process, your storage will be
          provisioned and you&apos;ll receive your access credentials.
        </SetupCard>

        <SetupCard number="03" title="Connect and Upload">
          Finally, connect to your cloud storage using SSH, FTP, SFTP, or the
          web-based file manager. Upload your files, set up automated backups
          with rsync or rclone, and manage your data securely.
        </SetupCard>
      </div>
    </div>
  );
}
