import Faqs from "@/components/shared/faqs";

const cloudStorageFaqs = [
  {
    title: "How do I access my Storage Box?",
    answer:
      "You can access your Storage Box in multiple ways: through our web-based control panel, via SSH, via FTP/SFTP clients like FileZilla, as a mounted network drive on your computer, or using command-line tools like rsync and rclone. Your welcome email includes connection details such as IP address, ports, and login credentials.",
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
    title: "Is there a bandwidth limit?",
    answer:
      "Yes, there are bandwidth limits based on your storage plan. However, we offer generous bandwidth allowances, and most users find that they are more than sufficient for typical file storage and access needs. If you have high bandwidth requirements, please contact our support team to discuss options.",
  },
  {
    title: "Can I use this for website hosting?",
    answer:
      "Storage Box is designed for file storage and backups, not for hosting websites. For web hosting, please check out our Web Hosting plans which include features specifically designed for running websites.",
  },
  {
    title: "What protocols are supported?",
    answer:
      "We support a wide range of protocols: FTP, FTPS, SFTP, SCP, SSH . You can also use rsync and rclone for automated backups and synchronization.",
  },
  {
    title: "How quickly can I get started?",
    answer:
      "Your Storage Box is provisioned instantly after payment. You'll receive your access credentials via email within minutes, and you can start uploading files right away using any of the supported access methods.",
  },
  {
    title: "What payment methods are accepted ?",
    answer:
      "We accept PayPal, Bank Transfer / EFT, Orange Money, MyZaka, Smega and soon Credit / Debit Cards",
  },
  {
    title: "Is there any contractual obligation or can I cancel anytime ?",
    answer:
      "By default, our VPS plans are billed monthly. You can also choose to pay every 3, 6, or 12 months. Plans can be easily modified or canceled anytime through the Client Area.",
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
