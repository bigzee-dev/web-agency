// app/api/contact/route.js
import { sendEmail } from "@/lib/sendformdata";

import { NextResponse } from "next/server";

export async function POST(request: { json: () => any }) {
  try {
    console.log("Contact form submission received");
    const body = await request.json();
    const { name, email, company, budget, message, token } = body;

    // Verify Turnstile token
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("company", company || "");
    formData.append("budget", budget || "");
    formData.append("message", message);
    formData.append("website", "deltaworx.co.bw");

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is not set in environment");
      return new NextResponse(
        JSON.stringify({ error: "Turnstile secret not configured" }),
        { status: 500 },
      );
    }
    formData.append("secret", turnstileSecret);
    formData.append("response", token);

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      console.error("Turnstile verification failed:", turnstileData);
      return new NextResponse(
        JSON.stringify({ error: "Turnstile verification failed" }),
        { status: 400 },
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 },
      );
    }

    // email is sent with the form data, if there is an erro sending the email it is handled and tne response sent to the front end
    const emailResult = await sendEmail(formData);
    if (!emailResult || emailResult.success === false) {
      console.error("sendEmail failed:", emailResult?.error || emailResult);
      return new NextResponse(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 },
    );
  }
}
