import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const message = body.message?.trim();
  const service = body.service?.trim() || "Not specified";

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email" }, { status: 400 });
  }
  if (!phone || phone.length < 7) {
    return NextResponse.json({ ok: false, error: "Please enter a valid phone number" }, { status: 400 });
  }
  if (!message || message.length < 5) {
    return NextResponse.json({ ok: false, error: "Please include a short message" }, { status: 400 });
  }

  // In production, wire this up to an email service (Resend, SendGrid, etc.)
  // or persist to a database. For now we log so the request is visible in
  // Vercel function logs.
  console.log("[contact]", { name, email, phone, service, message });

  return NextResponse.json({ ok: true });
}
