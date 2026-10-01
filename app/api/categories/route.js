import { NextResponse } from 'next/server';
import { MOCK_ARTICLES } from '../../../src/data/mockArticles';

export async function GET() {
  const cricketCount = MOCK_ARTICLES.filter((a) => a.sport === 'cricket').length;
  const footballCount = MOCK_ARTICLES.filter((a) => a.sport === 'football').length;

  return NextResponse.json({
    categories: [
      {
        id: 'all',
        label: 'সব খবর',
        englishLabel: 'All News',
        count: MOCK_ARTICLES.length,
      },
      {
        id: 'cricket',
        label: 'ক্রিকেট',
        englishLabel: 'Cricket',
        count: cricketCount,
      },
      {
        id: 'football',
        label: 'ফুটবল',
        englishLabel: 'Football',
        count: footballCount,
      },
    ],
  });
}
