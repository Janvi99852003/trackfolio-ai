const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  family: 4, // force IPv4, avoids ENETUNREACH on some hosts
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