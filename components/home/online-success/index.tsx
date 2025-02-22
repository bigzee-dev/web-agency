"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/online-success-tabs/tabs";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";

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
      <div className="text-center mb-16 z-40">
        <h1
          className={` ${montserrat.className} text-4xl md:text-5xl font-bold text-gray-800 mb-4 `}
        >
          Your online{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-600 to-blue-700 text-transparent bg-clip-text">
            success
          </span>{" "}
          starts here
        </h1>
        <p className="text-lg text-gray-600">
          Choose from a wide variety of products and services to grow your idea
          online.
        </p>
      </div>

      <Tabs defaultValue="recommended" className="w-full">
        <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger
            value="recommended"
            className="data-[state=active]:bg-[#c8d1ef] data-[state=active]:text-primary"
          >
            Recommended
          </TabsTrigger>
          <TabsTrigger
            value="website"
            className="data-[state=active]:bg-[#E6E8FF] data-[state=active]:text-[#2D1576]"
          >
            Create a website
          </TabsTrigger>
          <TabsTrigger
            value="hosting"
            className="data-[state=active]:bg-[#E6E8FF] data-[state=active]:text-[#2D1576]"
          >
            Hosting
          </TabsTrigger>
          <TabsTrigger
            value="domains"
            className="data-[state=active]:bg-[#E6E8FF] data-[state=active]:text-[#2D1576]"
          >
            Domains & email
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recommended">
          <div className="relative isolate overflow-hidden bg-gray-800 text-white rounded-3xl p-8 md:p-12">
            <div
              aria-hidden="true"
              className="absolute left-1/4 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#89a6fc] opacity-20"
              />
            </div>
            <h2 className="text-4xl font-bold mb-6">Recommended for you</h2>
            <p className="text-lg opacity-90">
              Discover our most popular products and services tailored to your
              needs.
            </p>
            <h2 className="text-4xl font-bold mb-6">Recommended for you</h2>
            <p className="text-lg opacity-90">
              Discover our most popular products and services tailored to your
              needs.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="website">
          <div className="bg-[#2D1576] text-white rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6">Website Builder</h2>
            <p className="text-lg opacity-90">
              Create a professional website with our easy-to-use builder.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="hosting">
          <div className="bg-[#2D1576] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
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
          </div>
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
