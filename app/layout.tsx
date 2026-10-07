import type { Metadata } from "next";
import "@/app/ui/global.css";
// import "@/app/ui/main-nav.css";
import "@/app/ui/navStyles.css";
import { inter } from "@/app/ui/fonts";
import ResponsiveNav from "@/components/responsive-nav";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { CurrencyProvider } from "@/contexts/currency-context";
import JsonLd from "@/components/shared/json-ld";

const siteUrl = "https://deltaworx.co.bw";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Cloud Computing, Hosting and Web Services in Botswana | Deltaworx",
    template: "%s | Deltaworx",
  },
  description:
    "Deltaworx is a Cloud Computing and Web services provider in Botswana We specialise in web development, domain registration, email hosting, virtual servers, cloud compute and network solutions. We help businesses run their digital infrastructure without the usual complexity.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any", // 🔑 this tells browsers: use this for UI
      },
      {
        url: "/icon-google.png",
        type: "image/png",
        sizes: "144x144", // 🔑 big enough for Google, not attractive to browsers
      },
    ],
  },
};

// Business details mirror the footer (components/footer/companyInfo.tsx)
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#organization`,
      name: "Deltaworx",
      url: siteUrl,
      logo: `${siteUrl}/logo/logo-500x500.png`,
      image: `${siteUrl}/logo/logo-500x500.png`,
      email: "admin@deltaworx.co.bw",
      telephone: "+26772537524",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 698, Old Mall",
        addressLocality: "Maun",
        addressCountry: "BW",
      },
      areaServed: { "@type": "Country", name: "Botswana" },
      sameAs: ["https://web.facebook.com/DeltaworxBW"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Deltaworx",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SRC}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
        <JsonLd data={siteSchema} />
      </head>
      <body className={`${inter.className} bg-background antialiased`}>
        <CurrencyProvider>
          <ResponsiveNav />
          {children}
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
