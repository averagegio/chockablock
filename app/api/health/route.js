import { NextResponse } from 'next/server';

export async function GET() {
  const payload = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    app: 'chockablock',
  };
  return NextResponse.json(payload, { status: 200 });
}


