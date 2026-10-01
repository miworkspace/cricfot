"use client";
import { usePathname } from "next/navigation";
import { AdminLayout } from "../../components/admin/AdminLayout";
import { authService } from "../../services/authService";
import { AdminLoginPage } from "../../views/admin/AdminLoginPage";
import { canRoleAccessRoute } from "../../lib/permissions/rbac";
import { AdminAccessDenied } from "../../components/admin/AdminAccessDenied";
export default function AdminRootLayout({
  children
}) {
  const pathname = usePathname();
  const currentUser = authService.getCurrentUser();
  if (pathname === "/admin/login") {
    return <AdminLoginPage />;
  }
  if (!currentUser) {
    return <AdminLoginPage />;
  }
  const userRole = currentUser.role === "admin" ? "admin" : "manager";
  if (!canRoleAccessRoute(userRole, pathname)) {
    return <AdminLayout breadcrumbs={[{ label: "Dashboard", href: "/admin" }, { label: "\u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4" }]}>
        <AdminAccessDenied attemptedPath={pathname} requiredRole="admin" />
      </AdminLayout>;
  }
  return <AdminLayout breadcrumbs={[{ label: "Dashboard", href: "/admin" }]}>
      {children}
    </AdminLayout>;
}
