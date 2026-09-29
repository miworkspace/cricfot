import { NextRequest, NextResponse } from 'next/server';
import { MOCK_ARTICLES } from '../../../src/data/mockArticles';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get('sport');
  const search = searchParams.get('q');
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  let results = [...MOCK_ARTICLES];

  if (sport && sport !== 'all') {
    results = results.filter((a) => a.sport.toLowerCase() === sport.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        (a.banglaTitle && a.banglaTitle.includes(q)) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return NextResponse.json({
    total: results.length,
    articles: results.slice(0, limit),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json(
      {
        success: true,
        message: 'Article created successfully via Next.js Route Handler',
        article: {
          id: `art-${Date.now()}`,
          ...body,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Invalid payload' },
      { status: 400 }
    );
  }
}
