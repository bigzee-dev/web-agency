"use client";

import {
  sectionHeadings,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";
import { montserrat } from "@/app/ui/fonts";
import { motion, type Variants, type Easing } from "framer-motion";
import { Database, Copy } from "lucide-react";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";

const easeOut: Easing = [0.4, 0, 0.2, 1];
const easeInOut: Easing = [0.4, 0, 0.6, 1];

export default function Rule321() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <section className="overflow-hidden px-4 py-16 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className={` ${sectionHeadings} mb-4`}>The 3-2-1 Backup Rule</h2>
          <p className={sectionSubHeadings}>
            A time-tested strategy to protect your data against hardware
            failure, human error, malware, and disasters.
          </p>
        </motion.div>

        {/* Main Visual */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-gradient-to-b from-backup-3 via-backup-2 to-backup-1 lg:block" />

          {/* Rule 3 - Three Copies */}
          <motion.div variants={itemVariants} className="relative mb-8 lg:mb-0">
            <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="mb-8 lg:mb-0 lg:pr-16 lg:text-right">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="font-display text-7xl font-bold text-primary md:text-8xl">
                    3
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-medium uppercase tracking-wider text-backup-3">
                      Copies
                    </p>
                    <p
                      className={`${montserrat.className} text-xl font-semibold text-foreground`}
                    >
                      Keep Three Copies
                    </p>
                  </div>
                </div>
                <p className="max-w-md font-sans text-gray-600 lg:ml-auto">
                  Maintain your primary data plus two backup copies. This
                  ensures redundancy at every level.
                </p>
              </div>

              <div className="relative lg:pl-16">
                {/* Node Indicator */}
                <div className="shadow-glow absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-backup-3 lg:left-0 lg:block lg:-translate-x-1/2" />

                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  className="shadow-soft rounded-2xl border border-gray-400/70 bg-card p-6"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-card bg-backup-3/20">
                        <Database className="h-5 w-5 text-backup-3" />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-card bg-backup-3/15">
                        <Copy className="h-5 w-5 text-backup-3" />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-card bg-backup-3/10">
                        <Copy className="h-5 w-5 text-backup-3" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        1 Primary + 2 Backups
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Active data with redundancy
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-backup-3/10 px-3 py-2">
                      <p className="text-xs font-medium text-backup-3">
                        Primary
                      </p>
                    </div>
                    <div className="rounded-lg bg-backup-3/10 px-3 py-2">
                      <p className="text-xs font-medium text-backup-3">
                        Backup 1
                      </p>
                    </div>
                    <div className="rounded-lg bg-backup-3/10 px-3 py-2">
                      <p className="text-xs font-medium text-backup-3">
                        Backup 2
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Spacer for desktop */}
          <div className="hidden h-24 lg:block" />

          {/* Rule 2 - Two Media Types */}
          <motion.div variants={itemVariants} className="relative mb-8 lg:mb-0">
            <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="mb-8 lg:order-2 lg:mb-0 lg:pl-16">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="font-display text-7xl font-bold text-backup-2 md:text-8xl">
                    2
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-medium uppercase tracking-wider text-backup-2">
                      Media Types
                    </p>
                    <p
                      className={` ${montserrat.className} text-xl font-semibold text-foreground`}
                    >
                      Different Storage
                    </p>
                  </div>
                </div>
                <p className="max-w-md font-sans text-gray-600">
                  Store copies on different media types: SSD, HDD, cloud, or
                  tape. This protects against technology-specific failures.
                </p>
              </div>

              <div className="relative lg:order-1 lg:pr-16 lg:text-right">
                {/* Node Indicator */}
                <div className="shadow-glow absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-backup-2 lg:left-auto lg:right-0 lg:block lg:translate-x-1/2" />

                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  style={{ animationDelay: "0.5s" }}
                  className="shadow-soft rounded-2xl border border-gray-400/70 bg-card p-6"
                >
                  <div className="mb-4 flex flex-wrap justify-center gap-3 lg:justify-end">
                    <div className="flex items-center gap-2 rounded-full border border-backup-2/20 bg-backup-2/10 px-4 py-2">
                      <span className="text-sm font-medium text-foreground">
                        SSD
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-backup-2/20 bg-backup-2/10 px-4 py-2">
                      <span className="text-sm font-medium text-foreground">
                        NAS
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-backup-2/20 bg-backup-2/10 px-4 py-2">
                      <span className="text-sm font-medium text-foreground">
                        Cloud
                      </span>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground lg:text-right">
                    No single technology failure can compromise all copies
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Spacer for desktop */}
          <div className="hidden h-24 lg:block" />

          {/* Rule 1 - One Off-site */}
          <motion.div variants={itemVariants} className="relative">
            <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="mb-8 lg:mb-0 lg:pr-16 lg:text-right">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="font-display text-7xl font-bold text-blue-600 md:text-8xl">
                    1
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
                      Off-site
                    </p>
                    <p
                      className={`${montserrat.className} text-xl font-semibold text-foreground`}
                    >
                      Remote Location
                    </p>
                  </div>
                </div>
                <p className="max-w-md font-sans text-gray-600 lg:ml-auto">
                  Keep one copy off site, in the cloud or another data center.
                  Protection against theft, fire, floods, or ransomware.
                </p>
              </div>

              <div className="relative lg:pl-16">
                {/* Node Indicator */}
                <div className="shadow-glow absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 lg:left-0 lg:block lg:-translate-x-1/2" />

                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  style={{ animationDelay: "1s" }}
                  className="shadow-soft rounded-2xl border border-blue-600/40 bg-gradient-to-br from-blue-600/20 to-primary/10 p-6"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20">
                      <FaCloudUploadAlt className="h-7 w-7 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Our Cloud Storage
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Your off-site backup solution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-xl border border-blue-600/30 bg-card/80 px-4 py-3">
                    <IoShieldCheckmark className="h-5 w-5 text-gray-700" />
                    <span className="text-sm font-medium text-gray-600">
                      Protected from local disasters
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Summary Checklist */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="shadow-soft mx-auto max-w-3xl rounded-3xl border border-gray-300 bg-card p-8 md:p-10">
            <h3
              className={` ${montserrat.className} font-display mb-6 text-center text-2xl font-bold text-secondary`}
            >
              Why It Matters
            </h3>
            <div className="grid gap-4 font-sans sm:grid-cols-2">
              {[
                "Ransomware can encrypt all local copies",
                "Disk failure is inevitable over time",
                "Human error (accidental deletes) happens",
                "Disasters can wipe out entire locations",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-muted/50 p-3"
                >
                  <FaCircleCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-800" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 bg-secondary/20 p-2 text-center font-sans text-sm font-medium text-secondary">
              The 3-2-1 rule ensures no single failure can destroy all your
              data.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
