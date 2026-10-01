import { NextResponse } from 'next/server';
import { MOCK_ARTICLES } from '../../../data/mockArticles';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get('sport');
  const category = searchParams.get('category');
  const search = searchParams.get('q');
  const limitParam = searchParams.get('limit');
  const limit = limitParam ? parseInt(limitParam, 10) : 20;

  let articles = [...MOCK_ARTICLES];

  if (sport && sport.toLowerCase() !== 'all') {
    articles = articles.filter((a) => a.sport.toLowerCase() === sport.toLowerCase());
  }

  if (category) {
    articles = articles.filter((a) => a.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (search) {
    const q = search.toLowerCase();
    articles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        (a.banglaTitle && a.banglaTitle.includes(q)) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return NextResponse.json({
    total: articles.length,
    articles: articles.slice(0, limit),
  });
}

export async function POST(request) {
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
