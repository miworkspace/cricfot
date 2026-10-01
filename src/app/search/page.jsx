"use client";
import { Suspense } from "react";
import { SearchPage } from "../../views/SearchPage";
export default function Page() {
  return (
    <Suspense fallback={null}>
      <SearchPage />
    </Suspense>
  );
}
