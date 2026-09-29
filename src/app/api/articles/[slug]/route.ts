import { NextRequest, NextResponse } from 'next/server';
import { MOCK_ARTICLES } from '../../../../src/data/mockArticles';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  let slug = '';
  if (typeof (params as Promise<{ slug: string }>).then === 'function') {
    const resolved = await (params as Promise<{ slug: string }>);
    slug = resolved.slug;
  } else {
    slug = (params as { slug: string }).slug;
  }

  const article = MOCK_ARTICLES.find(
    (a) => a.slug === slug || a.id === slug || a.id.toLowerCase() === slug.toLowerCase()
  );

  if (!article) {
    return NextResponse.json(
      { error: 'Article not found', slug },
      { status: 404 }
    );
  }

  return NextResponse.json(article);
}
