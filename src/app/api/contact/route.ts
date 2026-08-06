import { Resend } from "resend";
import { contact } from "@/data/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const company = String(body.company ?? "").trim();

  // Honeypot: real users never fill this hidden field.
  if (company) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (name.length > 200 || subject.length > 200 || message.length > 5000) {
    return Response.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return Response.json(
      { error: "Email sending is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "AlphaSoft360 Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? contact.email,
      replyTo: email,
      subject: subject ? `[Contact] ${subject}` : `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n${subject ? `Subject: ${subject}\n` : ""}\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; color: #12141f; line-height: 1.6;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send your message. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
