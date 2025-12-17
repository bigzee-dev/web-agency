import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/online-success-tabs/tabs";

// components
import Websites from "./websites";
import WebApps from "./webapps";
import Email from "./email";
import Ecommerce from "./ecommerce";
import Cloud from "./cloud";
import Domains from "./domains";

export default function OnlineSuccess() {
  return (
    <div className="x-padding z-40 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-12 md:py-16">
      <div className="mb-6 text-center">
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
      {/* Tabs for larger screens */}
      {/* Hidden on small screens, visible on medium and larger screens */}
      <div className="hidden md:block">
        <Tabs
          defaultValue="websites"
          className="flex w-full flex-col items-center gap-y-4"
        >
          <TabsList className="mx-auto w-full max-w-max rounded-lg border border-gray-300">
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="webapps">Web Apps</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="domains">Domains</TabsTrigger>
            <TabsTrigger value="ecommerce">Ecommerce</TabsTrigger>
          </TabsList>
          <TabsContent value="websites">
            <Websites />
          </TabsContent>
          <TabsContent value="cloud">
            <Cloud />
          </TabsContent>
          <TabsContent value="webapps">
            <WebApps />
          </TabsContent>
          <TabsContent value="email">
            <Email />
          </TabsContent>
          <TabsContent value="domains">
            <Domains />
          </TabsContent>
          <TabsContent value="ecommerce">
            <Ecommerce />
          </TabsContent>
        </Tabs>
      </div>
      {/* Tabs for larger screens */}
      {/* Hidden on small screens, visible on medium and larger screens */}
      <div className="block w-full space-y-4 md:hidden">
        <Websites />
        <Cloud />
        <WebApps />
        <Ecommerce />
        <Email />
        <Domains />
      </div>
    </div>
  );
}
