"use client";
import { use } from "react";
import { useParams } from "next/navigation";
import { AdminArticleEditPage } from "../../../../../views/admin/AdminArticleEditPage";
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
  return <AdminArticleEditPage articleId={id || ""} />;
}
