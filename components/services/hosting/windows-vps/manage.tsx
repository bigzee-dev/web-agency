import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Rocket, Server } from "lucide-react";
import Image from "next/image";
import {
  longSectionHeadings,
  pageHeadingsCenter,
  primaryButton,
  sectionHeadings,
} from "@/app/ui/customTailwindClasses";
import Link from "next/link";

export default function ManageInstance() {
  return (
    <main className="min-h-screen bg-background">
      <DashboardFeature />
    </main>
  );
}

function DashboardFeature() {
  const features = [
    "Connect via RDP for full desktop experience",
    "1 Free Backup Slot included",
    "Full Administrator Access",
  ];

  return (
    <section className="px-4 pb-0 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        {/* Content Grid */}
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left: Mockups */}
          <div
            className="relative flex justify-center"
            style={{ width: "100%", height: "400px" }}
          >
            <Image
              src="/img/windows-vps/cloudimg.png"
              alt="VPS Management Dashboard"
              fill
              className="rounded-lg object-contain"
            />
          </div>

          {/* Right: Features */}
          <div className="flex flex-col gap-6">
            <h2 className={` ${longSectionHeadings} `}>
              Manage Your Instance with Ease
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Manage, monitor, and configure your VPS from a clean, intuitive
              control panel. From OS installs to backups, security, and user
              access, everything is just a click away.
            </p>

            {/* Feature List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-gray-800" />
                  <span className="font-sans text-base text-gray-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="#pricing-vps"
                className={` ${primaryButton} inline-flex items-center justify-center gap-x-2`}
              >
                <Rocket className="size-4" />
                Launch One
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
