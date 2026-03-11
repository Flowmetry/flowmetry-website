import { NextRequest, NextResponse } from 'next/server';

/* ── Simple in-memory rate limit ─────────────────────────────────────────── */
// Note: resets on cold start in serverless environments — sufficient for basic
// spam prevention. Upgrade to Redis/Upstash for stricter enforcement.

const rateLimit = new Map<string, number>();
const WINDOW_MS = 60_000; // 60 seconds per IP

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

/* ── Handler ──────────────────────────────────────────────────────────────── */

export async function POST(req: NextRequest) {
  // Rate limit check
  const ip  = getClientIp(req);
  const now = Date.now();
  const last = rateLimit.get(ip) ?? 0;
  if (now - last < WINDOW_MS) {
    return NextResponse.json(
      { error: 'rate-limited' },
      { status: 429 },
    );
  }
  rateLimit.set(ip, now);

  // Webhook URL from environment (never exposed to browser)
  const webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: 'Service not configured' }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.N8N_AUTH_KEY
          ? { Authorization: `Bearer ${process.env.N8N_AUTH_KEY}` }
          : {}),
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`Webhook returned ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
