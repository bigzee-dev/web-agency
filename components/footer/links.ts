export const footerLinks = [
  {
    heading: "Company",
    links: [
      {
        title: "About us",
        href: "/about-us",
        type: "internal",
      },
      {
        title: "Blog",
        href: "/blog-posts",
        type: "internal",
      },
      {
        title: "Terms of Service",
        href: "/legal/terms-of-service",
        type: "internal",
      },
      {
        title: "Company Profile",
        href: "https://bigzee-mxr1.xyz/companyprofile.pdf",
        type: "external",
      },
    ],
  },
  {
    heading: "Solutions",
    links: [
      {
        title: "Websites",
        href: "/websites",
        type: "internal",
      },
      {
        title: "Web Apps",
        href: "/web-apps",
        type: "internal",
      },
      {
        title: "Ecommerce",
        href: "/ecommerce",
        type: "internal",
      },
    ],
  },
  {
    heading: "Services",
    links: [
      {
        title: "linux VPS",
        href: "/linux-vps",
        type: "internal",
      },
      {
        title: "Email",
        href: "/emails",
        type: "internal",
      },
      {
        title: "Domains",
        href: "/domains",
        type: "internal",
      },
      {
        title: "Hosting",
        href: "/web-hosting",
        type: "internal",
      },
    ],
  },
  {
    heading: "Support",
    links: [
      {
        title: "Contact us",
        href: "/contact-us",
        type: "internal",
      },
      {
        title: "Login",
        href: `${process.env.WHMCS_URL}/index.php?rp=/login`,
        type: "internal",
      },
      {
        title: "Dashboard",
        href: `${process.env.WHMCS_URL}/clientarea.php`,
        type: "internal",
      },
      {
        title: "Support Ticket",
        href: "/acceptable-use-policy",
        type: `${process.env.WHMCS_URL}/submitticket.php`,
      },
    ],
  },
];
