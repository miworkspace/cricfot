import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    stack: 'Full-Stack Next.js (App Router) + Node.js/Express MERN Architecture',
    framework: 'Next.js 15 / React 19',
    uptime: Math.floor(process.uptime()),
    database: 'MongoDB Document Engine Active',
  });
}
