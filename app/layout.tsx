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
  title: "Cloud Compute, Web Dev, Domains, Email, Servers in BW | Deltaworx",
  description:
    "Deltaworx is a leading IT solutions provider in Botswana, specializing in cloud computing, web development, domain registration, email hosting, virtual servers, and network solutions. We empower businesses with cutting-edge technology and reliable services to enhance their online presence and operational efficiency.",
  icons: {
    icon: "/icon.svg",
  },
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
          src="https://umami.bigzee.app/script.js"
          data-website-id="65f346f6-91da-491b-952e-976e916755ae"
          strategy="afterInteractive"
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
