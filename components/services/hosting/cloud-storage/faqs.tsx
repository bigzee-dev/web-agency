import Faqs from "@/components/shared/faqs";

const cloudStorageFaqs = [
  {
    title: "How do I access my Storage Box?",
    answer:
      "You can access your Storage Box in multiple ways: through our web-based control panel, via FTP/SFTP clients like FileZilla, as a mounted network drive on your computer, or using command-line tools like rsync and rclone. We provide detailed setup guides for each method.",
  },
  {
    title: "Is my data encrypted?",
    answer:
      "Yes! All data transfers are encrypted using SSL/TLS or SSH protocols. Your files are stored securely on our servers with regular backups. We never scan or analyze your files - your data is yours alone.",
  },
  {
    title: "Can I upgrade my storage plan later?",
    answer:
      "Absolutely! You can upgrade to a larger storage plan at any time through your account dashboard. The upgrade is instant, and you'll only pay the prorated difference for the remaining billing period.",
  },
  {
    title: "What happens if I exceed my storage limit?",
    answer:
      "You'll receive email notifications when you reach 80% and 90% of your storage limit. If you reach 100%, you won't be able to upload new files until you either delete some files or upgrade to a larger plan. Existing files remain accessible.",
  },
  {
    title: "Do you provide backups of my data?",
    answer:
      "We maintain redundant copies of your data for hardware failure protection. However, Storage Box is designed for you to backup YOUR data. We recommend maintaining your own backup strategy and not using this as your only copy.",
  },
  {
    title: "Can I share files with others?",
    answer:
      "Yes! You can generate secure download links through the web interface with optional expiration dates and password protection. You can also create separate user accounts with specific folder permissions for team collaboration.",
  },
  {
    title: "Is there a bandwidth limit?",
    answer:
      "No! There are no bandwidth restrictions. You can upload and download as much as you need without worrying about additional charges or throttling.",
  },
  {
    title: "Can I use this for website hosting?",
    answer:
      "Storage Box is designed for file storage and backups, not for hosting websites. For web hosting, please check out our Web Hosting plans which include features specifically designed for running websites.",
  },
  {
    title: "What protocols are supported?",
    answer:
      "We support a wide range of protocols: FTP, FTPS, SFTP, SCP, SSH, WebDAV, SMB/CIFS, and NFS. You can also use rsync and rclone for synchronization, and we provide a RESTful API for programmatic access.",
  },
  {
    title: "How quickly can I get started?",
    answer:
      "Your Storage Box is provisioned instantly after payment. You'll receive your access credentials via email within minutes, and you can start uploading files right away using any of the supported access methods.",
  },
];

export default function CloudStorageFAQs() {
  return (
    <Faqs
      faqs={cloudStorageFaqs}
      heading="Frequently Asked Questions"
      subheading={
        <>
          Have questions about our Storage Box service? Check out our answers
          below or{" "}
          <a href="/contact-us" className="text-blue-600">
            contact our support team
          </a>
          .
        </>
      }
    />
  );
}
