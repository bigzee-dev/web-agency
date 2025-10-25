import nodemailer from "nodemailer";

// Configure the transporter to use Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "eu1.workspace.org",
  port: 465, // SSL
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL, //
    pass: process.env.SMTP_PWD, //
  },
});

// Function to send email
export async function sendEmail(formData) {
  try {
    // If the incoming data is URLSearchParams (e.g. from a form POST)
    // or a FormData-like object, convert it to a plain object so
    // we can access fields with dot-notation (formData.name etc.).
    let data = formData;
    if (formData && typeof formData.get === "function") {
      data = Object.fromEntries(formData);
      console.log("Normalized form data:", data);
    }

    // Configure the email details
    const mailOptions = {
      from: `${data.website} <mail@bigzee-mxr1.xyz>`, // Sender address
      to: "zimamankei@gmail.com", // admins email
      subject: `You have a new message on ${data.website || "your site"}!`,
      text: `From: ${data.name},\n\nEmail: ${data.email}\n\nMessage: ${data.message}\n\nCompany: ${data.company || "N/A"}\n\nBudget: ${data.budget || "N/A"}`,
      bcc: "admin@bigzee.app", // Send a copy to other email
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}
