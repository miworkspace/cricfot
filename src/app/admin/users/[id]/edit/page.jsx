"use client";
import { use } from "react";
import { useParams } from "next/navigation";
import { AdminUserEditPage } from "../../../../../views/admin/AdminUserEditPage";
export default function Page({ params }) {
  const routeParams = useParams();
  let id = routeParams?.id;
  if (!id && params) {
    if (typeof params.then === "function") {
      try {
        const resolved = use(params);
        id = resolved.id;
      } catch {
      }
    } else {
      id = params.id;
    }
  }
  return <AdminUserEditPage userId={id || ""} />;
}
