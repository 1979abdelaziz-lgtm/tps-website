import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_COMPLETION_TIME_MS = 2500;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) return true;

  existing.count += 1;
  rateLimitStore.set(ip, existing);
  return false;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { message: "The contact service is temporarily unavailable." },
      { status: 503 },
    );
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { message: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const honeypot = cleanText(body.website, 200);
  if (honeypot) {
    return NextResponse.json({ message: "Your enquiry has been received." });
  }

  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;
  if (!startedAt || Date.now() - startedAt < MIN_COMPLETION_TIME_MS) {
    return NextResponse.json(
      { message: "Please review the form and try again." },
      { status: 400 },
    );
  }

  const name = cleanText(body.name, 100);
  const company = cleanText(body.company, 120);
  const email = cleanText(body.email, 254).toLowerCase();
  const phone = cleanText(body.phone, 40);
  const service = cleanText(body.service, 120);
  const message = cleanText(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { message: "Please provide a little more detail about your enquiry." },
      { status: 400 },
    );
  }

  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeService = escapeHtml(service || "Not selected");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const timestamp = new Date().toISOString();

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "TPS Website <website@tetra-power.com>",
      to: ["info@tetra-power.com"],
      reply_to: email,
      subject: `New Website Enquiry — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6;max-width:680px;margin:0 auto">
          <h1 style="font-size:24px;margin-bottom:8px">New website enquiry</h1>
          <p style="color:#475569;margin-top:0">A visitor submitted the TPS contact form.</p>
          <table style="width:100%;border-collapse:collapse;margin:24px 0">
            <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:700">Name</td><td style="padding:10px;border:1px solid #e2e8f0">${safeName}</td></tr>
            <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:700">Email</td><td style="padding:10px;border:1px solid #e2e8f0">${safeEmail}</td></tr>
            <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:700">Phone</td><td style="padding:10px;border:1px solid #e2e8f0">${safePhone}</td></tr>
            <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:700">Company</td><td style="padding:10px;border:1px solid #e2e8f0">${safeCompany}</td></tr>
            <tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:700">Service</td><td style="padding:10px;border:1px solid #e2e8f0">${safeService}</td></tr>
          </table>
          <h2 style="font-size:18px">Project details</h2>
          <div style="padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px">${safeMessage}</div>
          <p style="margin-top:24px;font-size:12px;color:#64748b">Submitted: ${timestamp}<br />Source: tetra-power.com Contact Form</p>
        </div>
      `,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    console.error("Resend API error:", resendResponse.status, errorText);
    return NextResponse.json(
      { message: "Your message could not be sent. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Your enquiry has been sent." });
}
