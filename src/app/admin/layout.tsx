'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { AdminLayout } from '../../src/components/admin/AdminLayout';
import { authService } from '../../src/services/authService';
import { AdminLoginPage } from '../../src/pages/admin/AdminLoginPage';
import { canRoleAccessRoute } from '../../src/lib/permissions/rbac';
import { AdminAccessDenied } from '../../src/components/admin/AdminAccessDenied';

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentUser = authService.getCurrentUser();

  // 1. Login page does not need sidebar/header layout
  if (pathname === '/admin/login') {
    return <AdminLoginPage />;
  }

  // 2. Unauthenticated check
  if (!currentUser) {
    return <AdminLoginPage />;
  }

  // 3. RBAC role guard
  const userRole = (currentUser.role === 'admin' ? 'admin' : 'manager') as 'admin' | 'manager';
  if (!canRoleAccessRoute(userRole, pathname)) {
    return (
      <AdminLayout breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'অ্যাক্সেস সংরক্ষিত' }]}>
        <AdminAccessDenied attemptedPath={pathname} requiredRole="admin" />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout breadcrumbs={[{ label: 'Dashboard', href: '/admin' }]}>
      {children}
    </AdminLayout>
  );
}
