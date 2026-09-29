'use client';

import React, { use } from 'react';
import { useParams } from 'next/navigation';
import { AdminUserEditPage } from '../../../../../src/pages/admin/AdminUserEditPage';

interface PageProps {
  params?: Promise<{ id: string }> | { id: string };
}

export default function Page({ params }: PageProps) {
  const routeParams = useParams<{ id: string }>();
  let id = routeParams?.id;
  if (!id && params) {
    if (typeof (params as Promise<{ id: string }>).then === 'function') {
      try {
        const resolved = use(params as Promise<{ id: string }>);
        id = resolved.id;
      } catch {
        // Fallback
      }
    } else {
      id = (params as { id: string }).id;
    }
  }

  return <AdminUserEditPage userId={id || ''} />;
}
