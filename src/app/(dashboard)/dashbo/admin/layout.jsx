import { AdminRouteGuard } from "@/src/components/admin/AdminRouteGuard";

export const metadata = {
  title: "Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({ children }) {
  return <AdminRouteGuard>{children}</AdminRouteGuard>;
}
