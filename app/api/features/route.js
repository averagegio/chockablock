import { NextResponse } from 'next/server';

const FEATURES = [
  { id: 'speed', title: 'Lightning Fast', description: 'Optimized for speed and performance.' },
  { id: 'security', title: 'Secure', description: 'Enterprise‑grade security for your data.' },
  { id: 'scalability', title: 'Scalable', description: 'Built to grow with your business.' },
];

export async function GET() {
  return NextResponse.json({ features: FEATURES }, { status: 200, headers: { 'Cache-Control': 'no-store' } });
}


