import nodemailer from "nodemailer";
import type { ContactFormData } from "@/app/api/websites-contactus/route";

// Result type for the sendEmail function
type SendEmailResult = { success: true } | { success: false; error: string };

// Safe environment fallbacks to satisfy TypeScript
const SMTP_EMAIL = process.env.SMTP_EMAIL ?? "";
const SMTP_PWD = process.env.SMTP_PWD ?? "";

// Configure the transporter to use Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "mail.deltaworx.co.bw",
  port: 465, // SSL
  secure: true,
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PWD,
  },
});

// Function to send email — typed to the ContactFormData shape from the route
export async function sendEmail(
  formData: ContactFormData,
): Promise<SendEmailResult> {
  try {
    // Log incoming data for debugging
    console.log("Form data for email:", formData);

    // Build mail options (use Nodemailer's type for clarity)
    const mailOptions: import("nodemailer").SendMailOptions = {
      from: `${formData.website ?? "your site"} <mail@deltaworx.co.bw>`, // Sender address
      to: "zimamankei@gmail.com",
      subject: `You have a new message on ${formData.website ?? "your site"}!`,
      text: `From: ${formData.name}\n\nEmail: ${formData.email}\n\nCompany: ${formData.company}\n\nBudget: ${formData.budget}\n\nMessage: ${formData.message}`,
      bcc: "admin@bigzee.app",
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return { success: true };
  } catch (err) {
    console.error("Error sending email:", err);
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}
