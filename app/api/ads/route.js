import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    googleAds: {
      client: 'ca-pub-cricfot-commercial-2026',
      enabled: true,
      supportedFormats: ['leaderboard', 'mpu', 'halfpage', 'in-article', 'billboard'],
    },
    slots: [
      {
        id: 'ca-pub-cricfot-top-leaderboard-994',
        name: 'Top Leaderboard Google Ad',
        format: 'leaderboard',
        dimensions: '728x90',
        sponsor: 'Banglalink 4G',
        badge: 'অফিসিয়াল টেলিকম পার্টনার',
      },
      {
        id: 'ca-pub-cricfot-sidebar-mpu-501',
        name: 'Sidebar Medium Rectangle MPU',
        format: 'mpu',
        dimensions: '300x250',
        sponsor: 'Apex Sports Footwear',
        badge: 'স্পোর্টস গিয়ার',
      },
      {
        id: 'ca-pub-cricfot-in-article-432',
        name: 'Mid-Article In-Feed Native Ad',
        format: 'in-article',
        dimensions: 'Responsive (Fluid)',
        sponsor: 'Walton Smart TV',
        badge: 'অফিসিয়াল ব্রডকাস্ট পার্টনার',
      },
    ],
    directSponsors: [
      {
        id: 'sp-1',
        title: 'BPL 2026 Official Live Streaming Partner',
        sponsor: 'T-Sports & CricFot Live',
        link: 'https://cricfot.com/live',
      },
    ],
    sponsored_articles: [
      {
        id: 'sp-1',
        title: 'খেলাধুলার প্রতিটি মুহূর্তে হাই-স্পিড ৫G কানেক্টিভিটি',
        sponsor: 'গ্রামীনফোন স্পোর্টস প্যাক',
        category: 'টেলিকম স্পনসরড',
      },
      {
        id: 'sp-2',
        title: 'ক্রিকেট ও ফুটবল খেলোয়াড়দের ইনজুরি রিকভারির সেরা গাইডলাইন',
        sponsor: 'এভারকেয়ার স্পোর্টস মেডিসিন',
        category: 'হেলথ পার্টনার',
      },
    ],
  });
}
