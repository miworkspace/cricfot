import { NextResponse } from 'next/server';
import { MOCK_ARTICLES } from '../../../../data/mockArticles';

export async function GET(_request, { params }) {
  const { slug } = await params;

  const article = MOCK_ARTICLES.find(
    (a) => a.slug === slug || a.id === slug || a.id.toLowerCase() === slug.toLowerCase()
  );

  if (!article) {
    return NextResponse.json({ error: 'Article not found', slug }, { status: 404 });
  }

  return NextResponse.json(article);
}
