const { BrevoClient } = require("@getbrevo/brevo");

const brevo = new BrevoClient({ apiKey: process.env.BREVO_API_KEY });

async function sendEmail({ to, subject, html }) {
  await brevo.transactionalEmails.sendTransacEmail({
    sender: { name: "TrackFolio AI", email: process.env.GMAIL_USER },
    to: [{ email: to }],
    subject: subject,
    htmlContent: html,
  });
}

module.exports = sendEmail;