"use client";
import { sectionHeadings } from "@/app/ui/customTailwindClasses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// components
import Websites from "./websites";
import EmailsAndDomains from "./email";
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

      <Tabs defaultValue="websites">
        <TabsList>
          <TabsTrigger value="websites">Websites</TabsTrigger>
          <TabsTrigger value="webapps">Web Apps</TabsTrigger>
          <TabsTrigger value="ecommerce">Ecommerce</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="hosting">Hosting</TabsTrigger>
          <TabsTrigger value="domains">Domains</TabsTrigger>
        </TabsList>
        <TabsContent value="websites">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
