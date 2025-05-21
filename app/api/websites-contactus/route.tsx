// app/api/contact/route.js
import { sendEmail } from "@/lib/sendformdata";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log("Contact form submission received");
    const body = await request.json();
    const { name, email, company, budget, message, token } = body;
    console.log("Received data:", body);

    // Verify Turnstile token
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("website", "bigzee.app");
    formData.append("message", message);
    formData.append("secret", process.env.TURNSTILE_SECRET_KEY);
    formData.append("response", token);

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      console.error("Turnstile verification failed:", turnstileData);
      return new NextResponse(
        JSON.stringify({ error: "Turnstile verification failed" }),
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    sendEmail(formData);

    // For now, we'll just log the form data for demonstration
    console.log("Contact form submission:", {
      name,
      email,
      company,
      budget,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
