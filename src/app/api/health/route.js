import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    stack: 'Full-Stack Next.js (App Router) JavaScript',
    framework: 'Next.js 15 (App Router) + React 19',
    uptime_seconds: Math.floor(process.uptime()),
    database: 'MongoDB Document Engine Active',
  });
}
