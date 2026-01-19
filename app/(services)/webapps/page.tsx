import WebAppsHeader from "@/components/services/webapps/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Application Development - Custom Software Solutions | Deltaworx",
  description:
    "Custom web application development in Botswana. Build scalable, secure web apps tailored to your business needs. From CRM to inventory management, Deltaworx delivers powerful solutions.",
  keywords: [
    "web application development Botswana",
    "custom software",
    "SaaS development",
    "business applications",
    "enterprise software",
    "web app development",
  ],
};

export default function WebApps() {
  return (
    <div>
      <WebAppsHeader />
    </div>
  );
}
