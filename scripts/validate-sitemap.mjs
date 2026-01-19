#!/usr/bin/env node

/**
 * Sitemap Validation Script
 *
 * This script validates the sitemap by:
 * 1. Starting a Next.js production build
 * 2. Fetching the sitemap.xml
 * 3. Validating the structure and URLs
 *
 * Usage: pnpm sitemap:validate
 */

import { spawn } from "child_process";
import { setTimeout } from "timers/promises";

const PORT = 3000;
const SITEMAP_URL = `http://localhost:${PORT}/sitemap.xml`;

async function startServer() {
  console.log("🔨 Building Next.js app...");

  // Build the app first
  const build = spawn("pnpm", ["build"], { stdio: "inherit", shell: true });

  await new Promise((resolve, reject) => {
    build.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Build failed with code ${code}`));
    });
  });

  console.log("✅ Build complete");
  console.log(`🚀 Starting server on port ${PORT}...`);

  // Start the server
  const server = spawn("pnpm", ["start"], {
    stdio: "pipe",
    shell: true,
    env: { ...process.env, PORT: String(PORT) }
  });

  // Wait for server to be ready
  await setTimeout(3000);

  return server;
}

async function fetchSitemap() {
  console.log(`📥 Fetching sitemap from ${SITEMAP_URL}...`);

  const response = await fetch(SITEMAP_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  return xml;
}

function validateSitemap(xml) {
  console.log("🔍 Validating sitemap...\n");

  // Check for valid XML structure
  if (!xml.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
    console.warn("⚠️  Warning: Missing XML declaration");
  }

  if (!xml.includes('<urlset')) {
    throw new Error("Invalid sitemap: Missing <urlset> tag");
  }

  // Count URLs
  const urlMatches = xml.match(/<url>/g);
  const urlCount = urlMatches ? urlMatches.length : 0;

  console.log(`✅ Found ${urlCount} URLs in sitemap\n`);

  // Extract and display some URLs
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;

  while ((match = urlRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }

  if (urls.length > 0) {
    console.log("📄 Sample URLs:");
    urls.slice(0, 10).forEach(url => console.log(`   - ${url}`));
    if (urls.length > 10) {
      console.log(`   ... and ${urls.length - 10} more`);
    }
    console.log();
  }

  // Check for blog posts
  const blogUrls = urls.filter(url => url.includes("/blog-posts/"));
  console.log(`📝 Blog posts: ${blogUrls.length}`);

  // Check for service pages
  const serviceUrls = urls.filter(url =>
    url.includes("/domains") ||
    url.includes("/websites") ||
    url.includes("/hosting") ||
    url.includes("/vps") ||
    url.includes("/emails") ||
    url.includes("/webapps") ||
    url.includes("/ecommerce")
  );
  console.log(`🔧 Service pages: ${serviceUrls.length}`);

  return { urlCount, urls };
}

async function main() {
  let server = null;

  try {
    server = await startServer();
    const xml = await fetchSitemap();
    const result = validateSitemap(xml);

    console.log("\n✅ Sitemap validation successful!");
    console.log(`\n💡 Your sitemap contains ${result.urlCount} URLs and is ready to be submitted to search engines.`);
    console.log("\n📋 Next steps:");
    console.log("   1. Deploy your site");
    console.log("   2. Submit sitemap to Google Search Console: https://deltaworx.co.bw/sitemap.xml");
    console.log("   3. Submit to Bing Webmaster Tools");

  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  } finally {
    if (server) {
      console.log("\n🛑 Stopping server...");
      server.kill();
    }
  }
}

main();
