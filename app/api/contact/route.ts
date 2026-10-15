import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

export const runtime = 'nodejs';

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

// Basic spam limit: 5 messages per IP per 10 minutes.
// This is in-memory, so it is a light guard only. Use a shared store (e.g. Upstash) for strict limits.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

async function notify(lead: { name: string; email: string; phone: string; message: string }) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!key || !to) return; // email is optional

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Ai Angel <onboarding@resend.dev>', // use your verified domain once you have one
      to,
      reply_to: lead.email,
      subject: `New lead: ${lead.name}`,
      text: `Name: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone || '-'}\n\n${lead.message}`,
    }),
  });
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (limited(ip)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  // Bots fill the hidden field: pretend success, save nothing
  if (body.website) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 100),
    email: clean(body.email, 200).toLowerCase(),
    phone: clean(body.phone, 30),
    message: clean(body.message, 3000),
  };

  if (lead.name.length < 2 || !/^\S+@\S+\.\S+$/.test(lead.email) || lead.message.length < 10) {
    return NextResponse.json({ error: 'Please check your details' }, { status: 400 });
  }

  try {
    const db = await getDb();
    await db.collection('leads').insertOne({ ...lead, status: 'new', createdAt: new Date() });
  } catch (err) {
    console.error('Saving lead failed:', err);
    return NextResponse.json({ error: 'Could not save your message' }, { status: 500 });
  }

  // The lead is already saved, so a failed email must not fail the request
  await notify(lead).catch((err) => console.error('Email notification failed:', err));

  return NextResponse.json({ ok: true });
}