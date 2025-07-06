"use client";

import { useState } from "react";
import { montserrat } from "@/app/ui/fonts";
import Script from "next/script";

// componeents
import Form from "./form";
import TestForm from "./testform";
import WebsitesForm from "./websitesform";

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      error: null,
      success: false,
    });

    // Get the Turnstile token
    const token = document.querySelector(
      '[name="cf-turnstile-response"]',
    ).value;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setStatus({
        submitted: true,
        submitting: false,
        error: null,
        success: true,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      // Reset Turnstile
      window.turnstile.reset();
    } catch (error) {
      setStatus({
        submitted: true,
        submitting: false,
        error: error.message,
        success: false,
      });
    }
  };

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />

      <div className="overflow-hidden rounded-lg">
        <div className="px-3 sm:p-6">
          <h2 className={`mb-6 text-4xl font-semibold text-neutral-100`}>
            Lets start Working on your Project
          </h2>

          {status.success ? (
            <div className="mb-6 rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {status.error ? (
            <div className="mb-6 rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">
                    {status.error}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          <WebsitesForm />
        </div>
      </div>
    </div>
  );
}
