// app/api/contact/route.js

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message, token } = body;

    // Verify Turnstile token
    const formData = new URLSearchParams();
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

    // Handle email sending logic here
    // This is where you would integrate with your email service provider (SendGrid, AWS SES, etc.)
    // For example with SendGrid:
    //
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'your-email@example.com',
    //   from: 'website@yourdomain.com',
    //   subject: `New contact form submission from ${name}`,
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Company: ${company || 'Not provided'}
    //     Budget: ${budget}
    //     Message: ${message}
    //   `,
    // });

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
