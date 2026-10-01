"use client";

import { usePathname } from "next/navigation";
import { AdminLayout } from "@/src/components/admin/AdminLayout";
import { AdminAccessDenied } from "@/src/components/admin/AdminAccessDenied";
import { canRoleAccessRoute } from "@/src/lib/permissions/rbac";
import { authService } from "@/src/services/authService";
import { AdminLoginPage } from "@/src/views/admin/AdminLoginPage";

export function AdminRouteGuard({ children }) {
  const pathname = usePathname();
  const currentUser = authService.getCurrentUser();

  if (pathname === "/admin/login" || !currentUser) {
    return <AdminLoginPage />;
  }

  const userRole = currentUser.role === "admin" ? "admin" : "manager";
  if (!canRoleAccessRoute(userRole, pathname)) {
    return (
      <AdminLayout
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          {
            label:
              "\u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B7\u09C7\u09B8 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4",
          },
        ]}
      >
        <AdminAccessDenied attemptedPath={pathname} requiredRole="admin" />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout breadcrumbs={[{ label: "Dashboard", href: "/admin" }]}>
      {children}
    </AdminLayout>
  );
}
