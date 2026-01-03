import type { Metadata } from "next";
import "@/app/ui/global.css";
// import "@/app/ui/main-nav.css";
import "@/app/ui/navStyles.css";
import { inter } from "@/app/ui/fonts";
import ResponsiveNav from "@/components/responsive-nav";
import Footer from "@/components/footer/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Deltaworx | Botswana, Cloud Computing, Web Dev, Domains, Email, Servers, Networks",
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
          data-website-id="811eed82-8238-4191-8f26-858616355a42"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-background antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
