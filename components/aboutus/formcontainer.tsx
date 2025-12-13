"use client";
import Script from "next/script";

// components

import ContactUsForm from "@/components/shared/contactform/contactusform";

export default function AboutUsFormContainer() {
  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800/80 px-2">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />

      <div className="overflow-hidden rounded-lg">
        <div className="p-6 px-3">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
