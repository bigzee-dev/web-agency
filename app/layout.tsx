import type { Metadata } from "next";
import "@/app/ui/global.css";
// import "@/app/ui/main-nav.css";
import "@/app/ui/navStyles.css";
import { inter } from "@/app/ui/fonts";
import ResponsiveNav from "@/components/responsive-nav";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { CurrencyProvider } from "@/contexts/currency-context";

export const metadata: Metadata = {
  title: "Cloud Compute, Web Dev, Domains, Email, Servers | Botswana",
  description:
    "Deltaworx is a Cloud Computing and Web services provider in Botswana We specialise in web development, domain registration, email hosting, virtual servers, cloud compute and network solutions. We help businesses run their digital infrastructure and online systems without the usual complexity.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any", // 🔑 this tells browsers: use this for UI
      },
      {
        url: "/favicon-google.png",
        type: "image/png",
        sizes: "144x144", // 🔑 big enough for Google, not attractive to browsers
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Deltaworx",
  url: "https://deltaworx.co.bw",
  logo: "https://deltaworx.co.bw/favicon-google.png", // Your logo URL
  sameAs: [
    // Add your social media profiles
    "https://web.facebook.com/deltaworxbw",
    //"https://twitter.com/deltaworx",
    // etc.
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Deltaworx",
  url: "https://deltaworx.co.bw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={process.env.NEXT_PUBLIC_UMAMI_SRC}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
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
