import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    googleAds: {
      client: 'ca-pub-cricfot-commercial-2026',
      enabled: true,
      supportedFormats: ['leaderboard', 'mpu', 'halfpage', 'in-article', 'billboard'],
    },
    directSponsors: [
      {
        id: 'sp-1',
        title: 'BPL 2026 Official Live Streaming Partner',
        sponsor: 'T-Sports & CricFot Live',
        link: 'https://cricfot.com/live',
      },
    ],
  });
}
