"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  subject?: string
  message: string
}

export async function sendEmail({ name, email, subject, message }: EmailData) {
  // Create a test account if no email credentials are provided
  // In production, you would use actual email credentials
  const testAccount = await nodemailer.createTestAccount()

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.ethereal.email",
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER || testAccount.user,
      pass: process.env.EMAIL_PASS || testAccount.pass,
    },
  })

  // Email details
  const mailOptions = {
    from: `"Experience to Impact" <${process.env.EMAIL_FROM || "noreply@experiencetoimpact.indiana.edu"}>`,
    to: process.env.EMAIL_TO || "recipient@indiana.edu",
    replyTo: email,
    subject: subject
      ? `${subject} - Experience to Impact Contact Form`
      : "New Inquiry from Experience to Impact Website",
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #990000;">New Message from Experience to Impact Website</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject || "N/A"}</p>
  <div style="margin-top: 20px;">
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line;">${message}</p>
  </div>
</div>
    `,
  }

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions)

    // For development purposes, log the URL where the email can be previewed
    if (process.env.NODE_ENV !== "production") {
      console.log("Message sent: %s", info.messageId)
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}

