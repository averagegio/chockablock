import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, message } = body || {};
    if (!email || !message) {
      return NextResponse.json({ ok: false, error: 'email and message are required' }, { status: 400 });
    }
    // In a real app, save to DB or send email here
    return NextResponse.json({ ok: true, received: { email, message } }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'POST email and message as JSON' }, { status: 200 });
}


