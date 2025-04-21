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
import EmailsAndDomains from "./emailsdomains";
import Ecommerce from "./ecommerce";
import Hosting from "./hosting";

export default function OnlineSuccess() {
  return (
    <div className="x-padding relative overflow-hidden isolate mx-auto max-w-6xl px-4 py-16">
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
      <div className="text-center mb-16 ">
        <h1 className={` ${sectionHeadings} `}>
          Your online{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 text-transparent bg-clip-text">
            success
          </span>{" "}
          starts here
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Choose from a wide variety of products and services to grow your idea
          online.
        </p>
      </div>

      <Tabs defaultValue="websites" className="w-full">
        <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger
            value="websites"
            className="data-[state=active]:bg-background data-[state=active]:text-primary rounded-l-lg"
          >
            Websites
          </TabsTrigger>
          <TabsTrigger
            value="emailsdomains"
            className="data-[state=active]:bg-background data-[state=active]:text-primary"
          >
            Email & Domains
          </TabsTrigger>
          <TabsTrigger
            value="ecommerce"
            className="data-[state=active]:bg-background data-[state=active]:text-primary"
          >
            Ecommerce
          </TabsTrigger>
          <TabsTrigger
            value="hosting"
            className="data-[state=active]:bg-background data-[state=active]:text-primary rounded-r-lg"
          >
            Hosting
          </TabsTrigger>
        </TabsList>

        <TabsContent value="websites">
          <Websites />
        </TabsContent>

        <TabsContent value="emailsdomains">
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
          <div className="bg-[#2D1576] text-white rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6">Domains & Email</h2>
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
