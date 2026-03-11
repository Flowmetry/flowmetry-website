import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`Webhook returned ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
