import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Send a POST with JSON to echo' }, { status: 200 });
}


