import nodemailer from "nodemailer";

// Configure the transporter to use Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "everest.mxrouting.net",
  port: 465, // SSL
  secure: true,
  auth: {
    user: "admin@bigzee.app", // Your Zoho Mail email
    pass: "brookieKei4ev@", // App password if 2FA is enabled
  },
});

// Function to send email
export async function sendEmail(formData) {
  try {
    // Configure the email details
    const mailOptions = {
      from: '"mywebsite.com" <admin@bigzee.app>', // Sender address
      to: "zimamankei@gmail.com", // Customer's email
      subject: `You have a new message on , ${formData.website}!`,
      text: `Hi ${formData.name},\n\nThank you for reaching out to us. Here's a copy of your message:\n\n${formData.message}\n\nWe will get back to you shortly.\n\nBest regards,\nBigZee Team`,
      //   bcc: 'admin@bigzee.app', // Send a copy to your Zoho inbox
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

// Example usage
const formData = {
  website: "keizimmy.com",
  name: "John Doe",
  customerEmail: "john.doe@example.com",
  message: "I am interested in your services.",
};

sendEmail(formData).then((result) => console.log(result));
