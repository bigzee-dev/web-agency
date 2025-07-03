"use client";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/online-success-tabs/tabs";

// components
import Websites from "./websites";
import EmailsAndDomains from "./email.disabled.tsx";
import Ecommerce from "./ecommerce";
import Hosting from "./hosting";

export default function OnlineSuccess() {
  return (
    <div className="x-padding relative isolate mx-auto max-w-6xl overflow-hidden px-4 py-16">
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[80rem] bg-gradient-to-tr from-[#4754a2] to-[#9089fc] opacity-10"
        />
      </div> */}
      <div className="mb-16 text-center">
        <h1 className={` ${sectionHeadings} `}>
          Your online{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            success
          </span>{" "}
          starts here
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose from a wide variety of products and services to grow your idea
          online.
        </p>
      </div>

      <Tabs defaultValue="websites" className="w-full">
        <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-2 rounded-lg border border-gray-300 md:grid-cols-4">
          <TabsTrigger
            value="websites"
            className="rounded-l-lg border-r border-gray-300 data-[state=active]:bg-background data-[state=active]:text-blue-600"
          >
            Websites
          </TabsTrigger>
          <TabsTrigger
            value="webapps"
            className="border-r border-gray-300 data-[state=active]:bg-background data-[state=active]:text-blue-600"
          >
            Web Apps
          </TabsTrigger>

          <TabsTrigger
            value="ecommerce"
            className="border-r border-gray-300 data-[state=active]:bg-background data-[state=active]:text-blue-600"
          >
            Ecommerce
          </TabsTrigger>
          <TabsTrigger
            value="email"
            className="rounded-r-lg data-[state=active]:bg-background data-[state=active]:text-blue-600"
          >
            Email
          </TabsTrigger>
        </TabsList>
        <TabsList className="mx-auto mb-8 grid w-full max-w-[21rem] grid-cols-2 rounded-bl-lg rounded-br-lg border-b border-l border-r border-gray-300 md:grid-cols-2">
          <TabsTrigger
            value="domains"
            className="rounded-bl-lg border-r border-gray-300 data-[state=active]:bg-background data-[state=active]:text-blue-600"
          >
            Domains
          </TabsTrigger>
          <TabsTrigger
            value="hosting"
            className="rounded-r-lg rounded-br-lg data-[state=active]:bg-background data-[state=active]:text-blue-600"
          >
            Hosting
          </TabsTrigger>
        </TabsList>

        <TabsContent value="websites">
          <Websites />
        </TabsContent>
        <TabsContent value="webapps">
          <Websites />
        </TabsContent>

        <TabsContent value="email">
          {/* <div className="bg-[#2D1576] text-white rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6">Website Builder</h2>
            <p className="text-lg opacity-90">
              Create a professional website with our easy-to-use builder.
            </p>
          </div> */}
          <EmailsAndDomains />
        </TabsContent>
        <TabsContent value="ecommerce">
          {/* <div className="bg-[#2D1576] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Badge className="absolute top-8 left-8 bg-[#6558F5] hover:bg-[#6558F5] text-white">
              FREE WEBSITE MIGRATION
            </Badge>
            <div className="mt-12">
              <h2 className="text-4xl font-bold mb-6">Web hosting</h2>
              <p className="text-lg opacity-90">
                Secure and reliable hosting solutions for your website.
              </p>
            </div>
            <div className="absolute top-8 right-8 flex items-center gap-2 bg-white text-[#2D1576] px-4 py-2 rounded-full">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">SSL certificate</span>
              <Badge
                variant="secondary"
                className="bg-[#E3F9E5] text-[#14532D] hover:bg-[#E3F9E5] hover:text-[#14532D]"
              >
                ACTIVE
              </Badge>
            </div>
          </div> */}
          <Ecommerce />
        </TabsContent>
        <TabsContent value="hosting">
          {/* <div className="bg-[#2D1576] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Badge className="absolute top-8 left-8 bg-[#6558F5] hover:bg-[#6558F5] text-white">
              FREE WEBSITE MIGRATION
            </Badge>
            <div className="mt-12">
              <h2 className="text-4xl font-bold mb-6">Web hosting</h2>
              <p className="text-lg opacity-90">
                Secure and reliable hosting solutions for your website.
              </p>
            </div>
            <div className="absolute top-8 right-8 flex items-center gap-2 bg-white text-[#2D1576] px-4 py-2 rounded-full">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">SSL certificate</span>
              <Badge
                variant="secondary"
                className="bg-[#E3F9E5] text-[#14532D] hover:bg-[#E3F9E5] hover:text-[#14532D]"
              >
                ACTIVE
              </Badge>
            </div>
          </div> */}
          <Hosting />
        </TabsContent>

        <TabsContent value="domains">
          <div className="rounded-3xl bg-[#2D1576] p-8 text-white md:p-12">
            <h2 className="mb-6 text-4xl font-bold">Domains & Email</h2>
            <p className="text-lg opacity-90">
              Register your perfect domain name and set up professional email
              addresses.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
