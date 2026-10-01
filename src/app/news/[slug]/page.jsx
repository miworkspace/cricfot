"use client";
import { use } from "react";
import { useParams } from "next/navigation";
import { NewsDetailPage } from "../../../views/NewsDetailPage";
export default function Page({ params }) {
  const routeParams = useParams();
  let slug = routeParams?.slug;
  if (!slug && params) {
    if (typeof params.then === "function") {
      try {
        const resolved = use(params);
        slug = resolved.slug;
      } catch {
      }
    } else {
      slug = params.slug;
    }
  }
  return <NewsDetailPage slug={slug || "art-1"} />;
}
