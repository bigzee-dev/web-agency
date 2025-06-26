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
import Hosting from "./hosting";
import Domains from "./domains";

export default function OnlineSuccess() {
  return (
    <div className="x-padding flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-16 gap-6 z-40">
      <div className="text-center mb-6 ">
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
      <Tabs
        defaultValue="websites"
        className="flex flex-col items-center gap-y-2 w-full"
      >
        <TabsList className="border border-gray-300 max-w-max mx-auto rounded-lg   overflow-x-auto whitespace-nowrap w-full">
          <TabsTrigger value="websites">Websites</TabsTrigger>
          <TabsTrigger value="webapps">Web Apps</TabsTrigger>
          <TabsTrigger value="ecommerce">Ecommerce</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="hosting">Hosting</TabsTrigger>
          <TabsTrigger value="domains">Domains</TabsTrigger>
        </TabsList>
        <TabsContent value="websites">
          <Websites />
        </TabsContent>
        <TabsContent value="webapps">
          <WebApps />
        </TabsContent>
        <TabsContent value="ecommerce">
          <Ecommerce />
        </TabsContent>
        <TabsContent value="email">
          <Email />
        </TabsContent>
        <TabsContent value="hosting">
          <Hosting />
        </TabsContent>
        <TabsContent value="domains">
          <Domains />
        </TabsContent>
      </Tabs>
    </div>
  );
}
