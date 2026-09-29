'use client';

import React, { use } from 'react';
import { useParams } from 'next/navigation';
import { NewsDetailPage } from '../../../src/pages/NewsDetailPage';

interface PageProps {
  params?: Promise<{ slug: string }> | { slug: string };
}

export default function Page({ params }: PageProps) {
  const routeParams = useParams<{ slug: string }>();
  
  // Support both Next.js 15 async params and client useParams
  let slug = routeParams?.slug;
  if (!slug && params) {
    if (typeof (params as Promise<{ slug: string }>).then === 'function') {
      try {
        const resolved = use(params as Promise<{ slug: string }>);
        slug = resolved.slug;
      } catch {
        // Fallback
      }
    } else {
      slug = (params as { slug: string }).slug;
    }
  }

  return <NewsDetailPage slug={slug || 'art-1'} />;
}
