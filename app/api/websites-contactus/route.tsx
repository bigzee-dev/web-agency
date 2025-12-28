import { sendEmail } from "@/lib/sendformdata";
import { NextResponse } from "next/server";

export const runtime = "edge";

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  token: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    console.log("Contact form submission received");

    // parse and type the incoming JSON safely
    const body = (await request.json()) as ContactFormData;
    const { name, email, company, budget, message, website, token } = body;

    // build URLSearchParams for Turnstile (expects form-encoded)
    const turnstileForm = new URLSearchParams();
    turnstileForm.append("name", name || "");
    turnstileForm.append("email", email || "");
    turnstileForm.append("company", company || "");
    turnstileForm.append("budget", budget || "");
    turnstileForm.append("message", message || "");
    turnstileForm.append("website", website || "");

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is not set in environment");
      return new NextResponse(
        JSON.stringify({ error: "Turnstile secret not configured" }),
        { status: 500 },
      );
    }
    turnstileForm.append("secret", turnstileSecret);
    turnstileForm.append("response", token || "");

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: turnstileForm,
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

    // send email using a typed object
    const emailResult = await sendEmail(body);
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
