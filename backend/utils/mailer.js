const nodemailer = require("nodemailer");
const dns = require("dns");

// Force Node to prefer IPv4 when resolving domain names
dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendEmail({ to, subject, html }) {
  await transporter.sendMail({
    from: `"TrackFolio AI" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
}

module.exports = sendEmail;