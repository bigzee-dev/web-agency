export const CloudStoragePlans = [
  {
    id: "storage-100gb",
    name: "Storage Box 100GB",
    priceMonthly: "P60",
    priceYearly: "P600",

    features: [
      "100GB Available Storage",
      "Modern GUI",
      "Use on Phone/Tablet/Laptop",
      "SSH/FTP/SFTP/SCP/FTPS",
      "rsync/rclone",
      "Usable as network drive",
    ],
    href: `${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/store/cloud-storage/storage-box-100gb`,
    linkText: "Get 100GB",
    featured: false,
  },
  {
    id: "storage-250gb",
    name: "Storage Box 250GB",
    priceMonthly: "P120",
    priceYearly: "P1200",

    features: [
      "250GB Available Storage",
      "Modern GUI",
      "Use on Phone/Tablet/Laptop",
      "SSH/FTP/SFTP/SCP/FTPS",
      "rsync/rclone",
      "Usable as network drive",
    ],
    href: `${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/store/cloud-storage/storage-box-250gb`,
    linkText: "Get 250GB",
    featured: false,
  },
  {
    id: "storage-500gb",
    name: "Storage Box 500GB",
    priceMonthly: "P180",
    priceYearly: "P1800",

    features: [
      "500GB Available Storage",
      "Modern GUI",
      "Use on Phone/Tablet/Laptop",
      "SSH/FTP/SFTP/SCP/FTPS",
      "rsync/rclone",
      "Usable as network drive",
    ],
    href: `${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/store/cloud-storage/storage-box-500gb`,
    linkText: "Get 500GB",
    featured: true,
  },
  {
    id: "storage-1tb",
    name: "Storage Box 1TB",
    priceMonthly: "P260",
    priceYearly: "P2600",

    features: [
      "1TB Available Storage",
      "Modern GUI",
      "Use on Phone/Tablet/Laptop",
      "SSH/FTP/SFTP/SCP/FTPS",
      "rsync/rclone",
      "Usable as network drive",
    ],
    href: `${process.env.NEXT_PUBLIC_WHMCS_URL}/index.php?rp=/store/cloud-storage/storage-box-1tb`,
    linkText: "Get 1TB",
    featured: false,
  },
];
